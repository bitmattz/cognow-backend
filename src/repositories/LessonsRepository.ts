import Lesson from "../models/Lessons";
import {EntityRepository, Repository} from 'typeorm';

@EntityRepository(Lesson)
class LessonsRepository extends Repository<Lesson>{

  public async findByDate(date: Date): Promise<Lesson | null>{

    const findLesson = await this.findOne({
      where: {date},
    });

    return findLesson || null;
  }
}
export default LessonsRepository;
