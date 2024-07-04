import { Repository } from 'typeorm';
import { User } from './entitly/user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    getStudents(_name: any): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
