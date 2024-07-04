import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getStudents(body: any, req: any): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
