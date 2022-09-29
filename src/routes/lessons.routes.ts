import {application, Router} from 'express';
import {getCustomRepository} from 'typeorm';

import CreateLessonService from '../services/Lessons/CreateLessonService';
import DeleteLessonService from '../services/Lessons/DeleteLessonService';
import UpdateLessonImagesService from '../services/Lessons/UpdateLessonImagesService';
import LessonsRepository from '../repositories/LessonsRepository';

import ensureAuthenticated from '../middlewares/EnsureAuthenticated';

import multer from 'multer';
import uploadConfig from '../config/upload';

const lessonsRouter = Router();

const upload = multer(uploadConfig);

lessonsRouter.use(ensureAuthenticated);

lessonsRouter.get('/', async (request,response) => {
  const lessonsRepository = getCustomRepository(LessonsRepository);
  const lessons = await lessonsRepository.find();

  return response.json(lessons);

});



lessonsRouter.post('/', async (request, response) => {


    const {
        author_id, 
        title,
        description,
        text_content,
        embed_content} = request.body;


    const createAppointment =  new CreateLessonService();
    const appointment = await createAppointment.execute({author_id, title, description,text_content, embed_content});


    return response.json(appointment);



});

lessonsRouter.patch('/content', ensureAuthenticated, upload.single('avatar'), async (request, response) =>{

    const updateLessonImages = new UpdateLessonImagesService();

    const lesson = await updateLessonImages.execute({
      id: request.params.id,
      banner: request.file?.filename,
      image_content: request.file?.filename,
      video_content: request.file?.filename,
      audio_content: request.file?.filename,

    });


    return response.json(lesson);

});

lessonsRouter.delete('/:id', async (request, response) => {

    const {id}= request.params;
  
    const deleteLesson = new DeleteLessonService();
  
    await deleteLesson.execute(id);
  
    return response.status(204).send();
  });

export default lessonsRouter;
