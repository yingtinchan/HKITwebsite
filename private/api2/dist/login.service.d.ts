import { Repository } from 'typeorm';
import { User } from './entitly/user.entity';
import { JwtService } from '@nestjs/jwt';
export declare class LoginService {
    private usersRepository;
    private jwtService;
    constructor(usersRepository: Repository<User>, jwtService: JwtService);
    login(_id: any, _password: any): Promise<{
        statusCode: number;
        message: string;
        access_token: string;
        data: any;
    }>;
    logout(_token: any, _type: any): Promise<{
        statusCode: number;
        message: string;
    }>;
}
