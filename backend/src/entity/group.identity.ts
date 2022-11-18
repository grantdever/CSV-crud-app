import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import User from './user.entity';
// describes the structure and relations of the group table in my database
@Entity()
class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  symbol: string;
  //creates the relationship to users and allows deletion of users, group
  @OneToMany(() => User, (user) => user.group, { nullable: true })
  users: User[];
}
export default Group;
