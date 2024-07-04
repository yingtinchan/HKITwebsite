import { Controller, Get, Header, Post , Req, Param, Body} from '@nestjs/common';
import { AppService } from './app.service';
import { LoginService } from './login.service';
import { AdminService } from './admin.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly loginService: LoginService, private readonly adminService: AdminService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
/*
  @Get('/test1')
  getHi(): string {
    return 'hi test1';
  }

  @Post('/test2')
  post1(): string {
    return 'hi post2';
  }

  @Post('/login/')
  @Header('Cache-Control', '12a')
  login(@Body() body: any){
    console.log('body='+JSON.stringify(body));
    //return name;
    return this.loginService.login(body.student_id, body.password);
  }
*/
  //@Post('/addUser/')
  //addUser(@Body() body: any){
  //  console.log('body='+JSON.stringify(body));
  //  return this.adminService.addUser(body.type, body.name, body.password, body.email, body.major_id);
  //}

}
