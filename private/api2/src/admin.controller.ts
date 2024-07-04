import { Controller, Get, Header, Post , Req, Param, Body, UnauthorizedException} from '@nestjs/common';
import { AdminService } from './admin.service';
var jwt = require('jsonwebtoken');
import config from './config/config.json';

@Controller()
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('/addUser')
  addUser(@Body() body: any, @Req() req){

    jwt.verify(req.headers.authorization, config.SECRET_KEY, function(err, decoded) {
      console.log(decoded.userType);
      if(decoded.userType!="admin"){
        throw new UnauthorizedException();
      }
    });

    console.log("req="+req.headers.authorization);
    console.log('body='+JSON.stringify(body));
    return this.adminService.addUser(body.type,body.id,body.name,body.password,body.email,body.major_id);
  }
}
