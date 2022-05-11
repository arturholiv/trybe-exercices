import { Router } from 'express';
import userRoutes from './userRouter';

const router = Router();

router
    .use('/users', userRoutes)

export default router;
