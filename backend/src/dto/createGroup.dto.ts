import User from '../entity/user.entity';

export class CreateGroupDto {
  name: string;
  symbol: string;
  // users: User[];
}

export default CreateGroupDto;
