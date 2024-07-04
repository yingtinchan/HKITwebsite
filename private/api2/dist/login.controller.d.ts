import { LoginService } from './login.service';
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    login(body: any, req: any): Promise<{
        statusCode: number;
        message: string;
        access_token: string;
        data: any;
    }>;
    logout(body: any, req: any): Promise<{
        statusCode: number;
        message: string;
    }>;
}
