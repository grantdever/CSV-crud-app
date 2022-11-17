import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import User from './user.entity';

@Entity()
class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  symbol: string;

  @OneToMany(() => User, (user) => user.group, {
    onDelete: 'SET NULL',
    cascade: true,
  })
  users: User[];
}
export default Group;
