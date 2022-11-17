import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import CreateGroupDto from './dto/createGroup.dto';
import UpdateGroupDto from './dto/updateGroup.dto';
import { GroupService } from "./group.service";

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  //get all groups
  @Get()
  getGroups() {
    return this.groupService.getAllGroups();
  }

  //get group by id
  @Get(':id')
  getGroupById(@Param('id') id: number) {
    return this.groupService.getGroupById(id);
  }

  //get users by group id
  @Get(':id/users')
  getUsersByGroupId(@Param('id') id: number) {
    return this.groupService.getUsersByGroupId(id);
  }

  //create group
  @Post('create')
  async createNewGroup(@Body() group: CreateGroupDto) {
    return this.groupService.createNewGroup(group);
  }

  //update group
  @Patch(':id')
  async updateGroup(@Param('id') id: number, @Body() group: UpdateGroupDto) {
    return this.groupService.updateGroup(id, group);
  }

  //delete group
  @Delete(':id')
  async deleteGroup(@Param('id') id: string) {
    return this.groupService.deleteGroup(Number(id));
  }

}
