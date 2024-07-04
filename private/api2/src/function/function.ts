var jwt = require('jsonwebtoken');
import { UnauthorizedException } from '@nestjs/common';
import config from '../config/config.json';

export function checkJwtIsAdmin(token){
    jwt.verify(token, config.SECRET_KEY, function(err, decoded) {
        console.log(decoded.userType);
        if(decoded.userType!="ADMIN"){
          throw new UnauthorizedException();
        }
    });
    return true;
}

export async function checkUserTypeByID(_id){
    var _table="";
    if(_id.substring(0,1)=="A"){
        _table="admin";
    }else if(_id.substring(0,1)=="S"){
        _table="student";
    }else if(_id.substring(0,1)=="T"){
        _table="teacher";  
    }
    console.log("_table="+_table);
    return _table;
}