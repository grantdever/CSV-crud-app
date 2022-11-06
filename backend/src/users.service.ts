import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateUserDto from './dto/createUser.dto';
import User from './entity/user.entity';
import UpdateUserDto from './dto/updateUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  //find all
  getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  //find by id
  async getUserById(id: string): Promise<User> {
    const user = await this.userRepository.findOneBy({ id: id });

    if (user) {
      return user;
    }

    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  //create
  async createNewUser(user: CreateUserDto): Promise<User> {
    console.log('create is called');
    console.log(user);
    const newUser = this.userRepository.create(user);
    console.log(newUser);
    const savedUser = await this.userRepository.save(newUser);
    console.log(savedUser);

    if (!savedUser) {
      throw new InternalServerErrorException('Problem saving the user');
    }

    return savedUser;
  }

  //update
  async updateUser(id: string, post: UpdateUserDto): Promise<User> {
    await this.userRepository.update(id, post);
    const updatedUser = await this.userRepository.findOneBy({ id: id });
    if (updatedUser) {
      return updatedUser;
    }

    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  //delete
  async deleteUser(id: number) {
    const deletedUser = await this.userRepository.delete(id);
    if (!deletedUser.affected) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  }
}
