import express from 'express';
import dotenv from 'dotenv';

import routes from '../routes'
import ErrorController from '../controller/error.controller'

dotenv.config();

const app = express();

app.use(express.json());

app.use(routes)

app.use(ErrorController)

export default app;