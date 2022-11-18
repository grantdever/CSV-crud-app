import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  JoinTable,
} from 'typeorm';
import Group from './group.identity';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  usernumber: number;
  //creates the relationship to groups and allows deletion of users, group
  @ManyToOne(() => Group, (group) => group.users, {
    nullable: true,
    cascade: true,
    onDelete: 'SET NULL',
  })
  group: Group;
}

export default User;
