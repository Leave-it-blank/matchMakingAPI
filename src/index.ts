import { config } from 'dotenv';
import express, { Application, NextFunction, Request, Response } from 'express';
import http from 'http';
import router from './routes/baseRouter';

config();

const app: Application = express();

const PORT: number = parseInt(process.env.PORT || "3000");
app.use('/', router);
//app.use('/2nd', 2ndrouter);

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
