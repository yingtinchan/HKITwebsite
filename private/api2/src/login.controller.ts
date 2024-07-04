import { Controller, Get, Header, Post , Req, Param, Body} from '@nestjs/common';
import { LoginService } from './login.service';
var jwt = require('jsonwebtoken');
import config from './config/config.json';

@Controller()
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('/login')
  login(@Body() body: any, @Req() req){
    console.log('body='+JSON.stringify(body));
    return this.loginService.login(body.student_id, body.password);
  }
  @Post('/logout')
  logout(@Body() body: any, @Req() req){
    var _type="";
    jwt.verify(req.headers.authorization, config.SECRET_KEY, function(err, decoded) {
      console.log(decoded.name);
      _type=decoded.userType;
    });

    return this.loginService.logout(req.headers.authorization, _type);
  }
  
}
