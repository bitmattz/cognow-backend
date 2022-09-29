import {application, Router} from 'express';
import ensureAuthenticated from '../middlewares/EnsureAuthenticated';
import CreateUserService from '../services/User/CreateUserService';
import multer from 'multer';
import uploadConfig from '../config/upload';
import UpdateUserAvatarService from '../services/User/UpdateUserAvatarService';


const usersRouter = Router();

const upload = multer(uploadConfig);

usersRouter.post('/', async (request, response) => {

      const{ name, username, password } = request.body;

      const createUser = new CreateUserService();

      const user = await createUser.execute({
        name,
        username,
        password,
      });
      // @ts-expect-error Aqui vai ocorrer um erro, mas estou ignorando
      delete user.password;

      return response.json(user);



});

usersRouter.patch('/avatar', ensureAuthenticated, upload.single('avatar'), async (request, response) =>{

    const updateUserAvatar = new UpdateUserAvatarService();

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file?.filename,
    });

        // @ts-expect-error Aqui vai ocorrer um erro, mas estou ignorando
    delete user.password;

    return response.json(user);


});

export default usersRouter;
