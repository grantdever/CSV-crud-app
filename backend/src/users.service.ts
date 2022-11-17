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
import Group from './entity/group.identity';
import { QueryBuilder } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  //find all users
  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find({ relations: { group: true } });
  }

  //find user by id
  async getUserById(id: number): Promise<User> {
    const user = await this.userRepository.findOne({
      relations: {
        group: true,
      },
      where: {
        id,
      },
    });
    if (user) {
      return user;
    }

    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  //create user(s)
  async createNewUser(user: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(user);
    const savedUser = await this.userRepository.save(newUser);

    if (!savedUser) {
      throw new InternalServerErrorException('Problem saving the user');
    }

    return savedUser;
  }

  //update one user
  async updateUser(id: number, post: UpdateUserDto): Promise<User> {
    await this.userRepository.update(id, post);
    const updatedUser = await this.userRepository.findOneBy({ id: id });
    if (updatedUser) {
      return updatedUser;
    }

    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  //delete one user
  async deleteUser(id: number) {
    const deletedUser = await this.userRepository.delete(id);
    if (!deletedUser.affected) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  }
}
