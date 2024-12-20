import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import userRouter from './routes/userRoutes.js'
import taskRouter from './routes/taskRoutes.js'

const app = express()

// Allow credentials in CORS
app.use(cors({
    origin: 'http://localhost:5173', // Frontend URL
    credentials: true, // Allow cookies to be sent
}));
app.use(express.json())
app.use(cookieParser());

app.use('/api/v1/users', userRouter)
app.use('/api/v1/tasks', taskRouter)

export default app