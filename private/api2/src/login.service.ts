import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { User } from './entitly/user.entity';
import { JwtService } from '@nestjs/jwt';
import { checkUserTypeByID } from './function/function';

@Injectable()
export class LoginService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        private jwtService: JwtService
    ) {}

    async login(_id,_password){
      console.log("_id="+_id+" | _password="+_password);
      var _ext = "";
      var _table = "";
      var _major_id = "";

      if(_id.substring(0,1)=="A"){
        _table="admin";
      }else if(_id.substring(0,1)=="S"){
        _table="student";
        _major_id="major_id,";
      }else if(_id.substring(0,1)=="T"){
        _table="teacher";  
      }

      if(_id!="undefined" && _password!="undefined"){
        _ext += " and "+_table+"_id='"+_id+"'";
        _ext += " and password='"+_password+"'";
      }

      var data = await this.usersRepository.query("select "+_table+"_id, name, email,"+_major_id+" created_at, updated_at,'"+_table+"' as type from "+_table+" where 1=1" + _ext);
      console.log(JSON.stringify(data));

      if(JSON.stringify(data)=="[]"){
        throw new UnauthorizedException();
      }

      console.log('select * from '+_table+' where 1=1' + _ext);
      console.log("return="+JSON.stringify(data[0].name));
      
      const payload = {
        id: _id, 
        sub: _id,
        name: data[0].name,
        email: data[0].email,
        major_id: data[0].major_id,
        userType: _table
      };

      const token = await this.jwtService.sign(payload);
      console.log("token="+token);
      if(_ext!=""){
        await this.usersRepository.query("update "+_table+" set token='"+token+"' where 1=1" + _ext);
      }
         
      return {
        "statusCode": 200,
        "message": "success",
        access_token:token,
        data:data[0]
      };
    }

    async logout(_token, _type){
      console.log("_token="+_token);
      
      var _ext = "";
      if(_token!="undefined"){
          _ext += " and token='"+_token+"'";
      }

      if(_ext!=""){
        await this.usersRepository.query("update "+_type+" set token=NULL where 1=1" + _ext);
      }
      return {
        "statusCode": 200,
        "message": "success"
      };
    }
}
