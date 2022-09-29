import {Router} from 'express';
import usersRouter from './user.routes';
import sessionsRouter from './sessions.routes';
import lessonsRouter from './lessons.routes';

const routes = Router();
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/lessons',lessonsRouter);

export default routes;