import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, JoinTable } from 'typeorm';
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

  @ManyToOne(() => Group, (group) => group.users, { nullable: true })
  group: Group;
}

export default User;
