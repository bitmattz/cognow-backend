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

  @Column()
  text_content: string;

  @Column()
  image_content: string;

  @Column()
  video_content: string;

  @Column()
  audio_content: string;

  @Column()
  embed_content: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Lessons;