import User from '../entity/user.entity';
//describes the data format for a group update
// dto = data transfer object
export class UpdateGroupDto {
  id: number;
  name: string;
  symbol: string;
  users: User[];
}

export default UpdateGroupDto;
