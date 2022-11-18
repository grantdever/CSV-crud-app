import Group from '../entity/group.identity';
// describes the data format for a user update
// dto = data transfer object
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
