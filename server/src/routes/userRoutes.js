import { Router } from 'express'
import { register } from '../controllers/users/register.js'
import { logout } from '../controllers/users/logout.js'
import { login } from '../controllers/users/login.js'
import { check_login } from '../controllers/users/check_login.js'

const userRouter = Router()

userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.get('/check_login', check_login)
userRouter.post('/logout', logout)

export default userRouter