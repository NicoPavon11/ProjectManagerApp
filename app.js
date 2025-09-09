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


const allowedOrigins = ['http://localhost:4200', 'https://localhost:4200', 'https://projectmanagerapp-a59c.onrender.com']; 

const corsOptions = {
    origin: (origin, callback) => {
        // Permite peticiones si el origen está en la lista blanca
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('No permitido por CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
// app.use(cors({
//   origin: 'https://localhost:4200',
//   credentials: true
// }));
app.disable('x-powered-by');



app.get('/', (req, res) => {
    res.send('Holis')
})
app.use((req, res, next) => {
  console.log("Cookies disponibles en app:", req.cookies);
  next();
});

app.use('/user',userRouter);
app.use('/board',boardRouter);
app.use('/task', taskRouter);
app.use('/auth', authRouter);

app.listen(port, (req, res) => {
    console.log(`Servidor corriendo en puerto:3000`);
})