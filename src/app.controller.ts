import { Controller, Get, Post,Body,Param,Patch, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateDto} from './dto/create.dto';
let User=[]
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  
  @Post('user') //add user
  createUser(@Body() create:CreateDto){
    User.push(create);
    return 'user added'
  }

  @Get('user') //show all users
  getUsers(){
    return User;
  }

  @Get('user/:id') //find user by id
findUser(@Param('id') id: number): any {
  const user = User.find((user) => user.id === id);
  if (!user) {
    return 'User not found';
  }

  return user;
}

  
  @Patch('user/:id') // Update user by id
  updateUser(@Param('id') id: number, @Body() update: Partial<CreateDto>): string {
    const user = User.find((user) => user.id === id);
    if (!user) {
      return 'User not found';
    }

    Object.assign(user, update); 
    return 'User updated';
  }

  @Delete('user/:id') // Delete user by id
  deleteUser(@Param('id') id: number): string {
    const userIndex = User.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return 'User not found';
    }
  
    User.splice(userIndex, 1);
    return 'User deleted';
  }


  
}
