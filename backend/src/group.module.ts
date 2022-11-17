import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Group from './entity/group.identity';
import { GroupController } from './group.controller';
import { GroupService } from './group.service';
import User from './entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Group])],
  providers: [GroupService],
  controllers: [GroupController],
})
export class GroupModule {}
