import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import User from './entity/user.entity';
import Group from './entity/group.identity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Group])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
