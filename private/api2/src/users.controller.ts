import { Controller, Get, Header, Post , Req, Param, Body} from '@nestjs/common';
import { UsersService } from './users.service';
var jwt = require('jsonwebtoken');
import config from './config/config.json';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/getStudents')
  getStudents(@Body() body: any, @Req() req){
    var name="";
    jwt.verify(req.headers.authorization, config.SECRET_KEY, function(err, decoded) {
      console.log(decoded.name);
      name=decoded.name;
    });

    console.log("req="+req.headers.authorization);
    console.log('body='+JSON.stringify(body));
    return this.usersService.getStudents(name);
  }
}
