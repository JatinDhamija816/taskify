import express from 'express'
import cors from 'cors'
import userRouter from './routes/userRoutes.js'

const app = express()

// Allow credentials in CORS
app.use(cors({
    origin: 'http://localhost:5173', // Frontend URL
    credentials: true, // Allow cookies to be sent
}));
app.use(express.json())
app.use('/api/v1/users', userRouter)

export default app