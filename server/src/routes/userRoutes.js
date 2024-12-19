import { Router } from 'express'
import { registerUser } from '../controllers/register.js'

const userRouter = Router()

userRouter.post('/register', registerUser)

export default userRouter