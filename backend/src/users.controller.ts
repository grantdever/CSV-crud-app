import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import CreateUserDto from './dto/createUser.dto';
import UpdateUserDto from './dto/updateUser.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //get all users
  @Get()
  getUsers() {
    return this.usersService.getAllUsers();
  }

  //get user by id
  @Get(':id')
  getUserById(@Param('id') id: number) {
    return this.usersService.getUserById(id);
  }

  //create user
  @Post('create')
  async createNewUser(@Body() user: CreateUserDto) {
    return this.usersService.createNewUser(user);
  }

  //update user
  @Patch(':id')
  async updateUser(@Param('id') id: number, @Body() user: UpdateUserDto) {
    return this.usersService.updateUser(id, user);
  }

  //delete user
  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    return this.usersService.deleteUser(Number(id));
  }
}
