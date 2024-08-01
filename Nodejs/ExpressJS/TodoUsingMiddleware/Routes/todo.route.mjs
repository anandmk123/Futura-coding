import { Router } from "express";

import todoController from "../Controllers/todo.controller.mjs";
import { modifyAddRequrst } from "../Middleware/todo.middleware.mjs";

const route=Router()

route.get('/status',todoController.handleStatus)
route.get('/gettodolist',todoController.handleGetTodoList)
route.post('/addtask',modifyAddRequrst,todoController.handleAddTask)
route.delete('/delete/:id',todoController.handleDeleteTask)
route.patch('/update',todoController.handleUpdateTask)

export default route