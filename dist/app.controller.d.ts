import { AppService } from './app.service';
import { CreateDto } from './dto/create.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    createUser(create: CreateDto): string;
    getUsers(): any[];
    findUser(id: number): any;
    updateUser(id: number, update: Partial<CreateDto>): string;
    deleteUser(id: number): string;
}
