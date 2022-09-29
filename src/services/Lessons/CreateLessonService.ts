import {getRepository} from 'typeorm';
import { hash } from 'bcryptjs';
import Lessons from '../../models/Lessons';
import AppError from './/../../errors/AppError';


interface Request{
    author_id: string;
    title: string;
    description: string;
    text_content: string;
    embed_content: string;
}

class CreateLessonService{
  public async execute({author_id, title, description,text_content, embed_content}: Request):Promise<Lessons>{
    const lessonRepository = getRepository(Lessons);
    
    const lesson = lessonRepository.create({
      author_id,
      title,
      description,
      text_content,
      embed_content
    });

    await lessonRepository.save(lesson);
    return lesson;
  }
}
export default CreateLessonService;

