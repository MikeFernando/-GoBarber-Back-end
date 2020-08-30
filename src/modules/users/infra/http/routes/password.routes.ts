import { Router } from 'express';

import ForgotPasswordController from '../controllers/ForgotPasswordController';
import ResetPasswordController from '../controllers/ResetPasswordControler';

const PasswordRouter = Router();
const forgotPasswordController = new ForgotPasswordController();
const resetPasswordController = new ResetPasswordController();

PasswordRouter.post('/', forgotPasswordController.create);
PasswordRouter.post('/', resetPasswordController.create);

export default PasswordRouter;
