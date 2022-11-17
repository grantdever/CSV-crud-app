import Group from '../entity/group.identity';

export class CreateUserDto {
  firstname: string;
  lastname: string;
  address: string;
  city: string;
  state: string;
  group: Group;
}

export default CreateUserDto;
