import { Router } from "express";

import todoController from "../Controllers/todo.controller.mjs";
import { requestLog } from "../Middleware/log.mjs";

const route=Router()

route.get('/status',todoController.handleStatus)
//Middleware is only given to a particular router instead of all request.
route.get('/gettodolist',requestLog,todoController.handleGetTodoList)
route.post('/addtask',todoController.handleAddTask)
route.delete('/delete/:id',todoController.handleDeleteTask)
route.patch('/update',todoController.handleUpdateTask)

export default route