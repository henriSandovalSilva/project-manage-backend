import { Router } from 'express';

import AuthController from './app/controllers/AuthController';
import ProjectController from './app/controllers/ProjectController';
import ProjectMinutesWorkedController from './app/controllers/ProjectMinutesWorkedController';

import auth from './app/middlewares/auth';

const routes = new Router();

routes.post('/auth', AuthController.store);

routes.use(auth);

routes.get('/projects', ProjectController.index);
routes.post('/minutes', ProjectMinutesWorkedController.store);

export default routes;
