import { getCustomRepository, TransactionRepository } from 'typeorm';

import AppError from '../../errors/AppError';

import Lessons from '../../models/Lessons';

import {getRepository} from 'typeorm';

class DeleteLessonService {
  public async execute(id: string): Promise<void> {

    const lessonsRepository = getRepository(Lessons);
    const lesson = await lessonsRepository.findOne(id);


    if(!lesson){
      throw new AppError("Lesson does not exist");
    }

    await lessonsRepository.remove(lesson);
  }
}

export default DeleteLessonService;
