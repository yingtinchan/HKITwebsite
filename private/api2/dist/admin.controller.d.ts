import { AdminService } from './admin.service';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    addUser(body: any, req: any): Promise<{
        statusCode: number;
        message: string;
    }>;
}
