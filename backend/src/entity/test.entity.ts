import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import User from './user.entity';

@Entity()
class Test {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  symbol: string;

  @Column()
  @OneToMany(() => User, (user) => user.group, { onDelete: 'SET NULL' })
  users: User[];
}
export default Test;
