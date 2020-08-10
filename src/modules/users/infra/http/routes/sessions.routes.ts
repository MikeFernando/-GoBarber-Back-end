import { Router } from 'express';

import SessionsCrontroller from '../controllers/SessionsController';

const sessionsRouter = Router();
const sessionsController = new SessionsCrontroller();

sessionsRouter.post('/', sessionsController.create);

export default sessionsRouter;
