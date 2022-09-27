import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn,ManyToOne,JoinColumn } from 'typeorm';

import Courses from './Courses';
import Lessons from './Lessons';

@Entity('courses_lessons')
class CoursesLessons{

  @Column()
  course_id: string;

  @ManyToOne(() => Courses)
  @JoinColumn({name: 'course_id'})
  course: Courses;

  @Column()
  lesson_id: string;

  @ManyToOne(() => Courses)
  @JoinColumn({name: 'lesson_id'})
  lesson: Lessons;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}