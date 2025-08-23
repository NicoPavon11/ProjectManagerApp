import express from 'express'
import cookieParser from 'cookie-parser';
import { userRouter } from './routes/user.js';
import { boardRouter } from './routes/board.js';
import { taskRouter } from './routes/task.js';
import { authRouter } from './routes/auth.js';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}));
app.disable('x-powered-by');



app.get('/', (req, res) => {
    res.send('Holis')
})

app.use('/user', userRouter);
app.use('/board', boardRouter);
app.use('/task', taskRouter);
app.use('/auth', authRouter);

app.listen(port, (req, res) => {
    console.log(`Servidor corriendo en puerto:3000`);
})