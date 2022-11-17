import User from '../entity/user.entity';

export class UpdateGroupDto {
  id: number;
  name: string;
  symbol: string;
  color: string;
  users: User[];
}

export default UpdateGroupDto;
