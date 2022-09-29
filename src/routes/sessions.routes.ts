import {Router} from 'express';

import AuthenticateUserService from '../services/User/AuthenticateUserService';
const sessionsRouter = Router();



sessionsRouter.post('/', async (request, response) => {


     const {username,password} = request.body;

     const authenticateUser = new AuthenticateUserService();

     const {user, token} = await authenticateUser.execute({
      username,
      password,
     });
    // @ts-expect-error Aqui vai ocorrer um erro, mas estou ignorando

     delete user.password;

    return response.json({user, token});



});

export default sessionsRouter;
