import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn,ManyToOne,JoinColumn } from 'typeorm';

import User from './User';
@Entity('lessons')
class Lessons{
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
  banner: string;

  @Column('text-content')
  textContent: string;

  @Column('image-content')
  imageContent: string;

  @Column('video-content')
  videoContent: string;

  @Column('audio-content')
  audioContent: string;

  @Column('embed-content')
  embedContent: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Lessons;