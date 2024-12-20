import { Router } from 'express'
import { register } from '../controllers/register.js'
import { login } from '../controllers/login.js'
import { check_login } from '../controllers/check_login.js'
import { logout } from '../controllers/logout.js'

const userRouter = Router()

userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.get('/check_login', check_login)
userRouter.post('/logout', logout)

export default userRouter