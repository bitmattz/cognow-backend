import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn,ManyToOne,JoinColumn } from 'typeorm';

import User from './User';

@Entity('courses')
class Courses{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  author_id: string;

  @ManyToOne(() => User)
  @JoinColumn({name: 'author_id'})
  author: User;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  imagem: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}
export default Courses;