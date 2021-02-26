import 'reflect-metadata';
import './database/index';
import {router} from './routes';

import express from 'express';

const app = express();

/*middlewares*/
app.use(express.json());
app.use(router)

app.listen(3333, () => {
    console.log("Server is running!");
});