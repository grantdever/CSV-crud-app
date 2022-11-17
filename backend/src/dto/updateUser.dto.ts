import Group from '../entity/group.identity';

export class UpdateUserDto {
  id: number;
  firstname: string;
  lastname: string;
  address: string;
  city: string;
  state: string;
  group: Group;
}

export default UpdateUserDto;
