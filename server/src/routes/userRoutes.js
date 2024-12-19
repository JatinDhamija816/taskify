import { Router } from 'express'
import { register } from '../controllers/register.js'
import { login } from '../controllers/login.js'

const userRouter = Router()

userRouter.post('/register', register)
userRouter.post('/login', login)

export default userRouter