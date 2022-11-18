import Group from '../entity/group.identity';
// describes the data format for a new user
// dto = data transfer object
export class CreateUserDto {
  firstname: string;
  lastname: string;
  address: string;
  city: string;
  state: string;
  group: Group;
}

export default CreateUserDto;
