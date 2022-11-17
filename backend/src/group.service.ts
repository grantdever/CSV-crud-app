/* eslint-disable prettier/prettier */
import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateGroupDto from './dto/createGroup.dto';
import UpdateGroupDto from './dto/updateGroup.dto';
import Group from './entity/group.identity';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group) private groupRepository: Repository<Group>,
  ) {}

  //find all groups
  async getAllGroups(): Promise<Group[]> {
    return this.groupRepository.find({relations: {users: true}});
  }

  //find group by id
  async getGroupById(id: number): Promise<Group> {
    const group = await this.groupRepository.findOne({
      relations: {
        users: true,
      },
      where: {
        id,
      },
    });
    if (group) {
      return group;
    }

    throw new HttpException('Group not found', HttpStatus.NOT_FOUND);
  }

  //find users by group id
  async getUsersByGroupId(id: number): Promise<any> {
    const group = await this.groupRepository.findOne({
      relations: {
        users: true,
      },
      where: {
        id,
      },
    });
    if (group.users) {
      return group.users;
    }

    throw new HttpException('Group has no users', HttpStatus.NOT_FOUND);
  }

  //create group(s)
  async createNewGroup(group: CreateGroupDto): Promise<Group> {
    const newGroup = this.groupRepository.create(group);
    const savedGroup = await this.groupRepository.save(newGroup);

    if (!savedGroup) {
      throw new InternalServerErrorException('Problem saving the group');
    }

    return savedGroup;
  }

  //update one group
  async updateGroup(id: number, post: UpdateGroupDto): Promise<Group> {
    await this.groupRepository.update(id, post);
    const updatedGroup = await this.groupRepository.findOne({
      relations: {
        users: true,
      },
      where: {
        id,
      },
    });
    if (updatedGroup) {
      return updatedGroup;
    }

    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  //delete one group
  async deleteGroup(id: number) {
    const deletedGroup = await this.groupRepository.delete(id);
    if (!deletedGroup.affected) {
      throw new HttpException('Group not found', HttpStatus.NOT_FOUND);
    }
  }
}
