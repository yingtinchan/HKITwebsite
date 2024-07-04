import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { User } from './entitly/user.entity';
import { JwtService } from '@nestjs/jwt';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    async getStudents(_name){
        console.log("_name="+_name);
        var _ext = "";
        if(_name!="undefined"){
            _ext += " and name='"+_name+"'";
        }

        const data = await this.usersRepository
            .query('select student_id, name, email, major_id, created_at, updated_at from student where 1=1 and token is not NULL' + _ext);
        console.log(JSON.stringify(data[0]));
        if(JSON.stringify(data[0])==undefined || JSON.stringify(data[0])==""){
            throw new UnauthorizedException();
        }

        return {
            "statusCode": 200,
            "message": "success",
            data:data[0]
        };
        
        
    }
}