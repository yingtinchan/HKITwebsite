import { Repository } from 'typeorm';
import { User } from './entitly/user.entity';
export declare class AdminService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    addUser(_type: any, _id: any, _name: any, _password: any, _email: any, _major_id: any): Promise<{
        statusCode: number;
        message: string;
    }>;
}
