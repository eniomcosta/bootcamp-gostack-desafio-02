import { Router } from 'express';

import UserController from './app/controllers/UserController';

const routes = new Router();

routes.get('/users', UserController.findAll);
routes.post('/users', UserController.store);

routes.put('/users/:id', UserController.update);

export default routes;
