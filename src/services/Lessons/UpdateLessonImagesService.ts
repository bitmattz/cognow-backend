import {getRepository} from 'typeorm';
import path from 'path';
import Lessons from '../../models/Lessons';
import fs from 'fs';
import AppError from '../../errors/AppError';


import uploadConfig from '../../config/upload';

interface Request {
  id: string;
  banner: string | undefined;
  image_content: string | undefined;
  video_content: string | undefined;
  audio_content: string | undefined;
}



export default class UpdateLessonImagesService{

  public async validadeFileExist(filepath: string){
    await fs.promises.stat(filepath);
    if(filepath){
      await fs.promises.unlink(filepath);
    }
  }
  public async execute({id, banner, image_content, video_content, audio_content}: Request): Promise<Lessons>{

    const lessonsRepository = getRepository(Lessons);


    const lesson = await lessonsRepository.findOne(id);

    if(!lesson){
      throw new AppError('Error: ',401);
    }

    if((lesson.banner) || (lesson.image_content) ||(lesson.video_content)|| (lesson.audio_content)){
      const bannerFilePath = path.join(uploadConfig.directory, lesson.banner);
      const imageFilePath = path.join(uploadConfig.directory, lesson.image_content);
      const videoFilePath = path.join(uploadConfig.directory, lesson.video_content);
      const audioFilePath = path.join(uploadConfig.directory, lesson.audio_content);

      this.validadeFileExist(bannerFilePath);
      this.validadeFileExist(imageFilePath);
      this.validadeFileExist(videoFilePath);
      this.validadeFileExist(audioFilePath);

    }

    lesson.banner = banner!;
    lesson.image_content = image_content!;
    lesson.video_content = video_content!;
    lesson.audio_content = audio_content!;
    await lessonsRepository.save(lesson);

    return lesson;

  }
}
