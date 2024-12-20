import { Router } from 'express'
import { createTask } from '../controllers/tasks/createTask.js'

const taskRouter = Router()

taskRouter.post('/create', createTask)

export default taskRouter