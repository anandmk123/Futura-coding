import { Router } from "express";

import todoController from "../Controllers/todo.controller.mjs";

const route=Router()

route.get('/status',todoController.handleStatus)
route.get('/gettodolist',todoController.handleGetTodoList)
route.post('/addtask',todoController.handleAddTask)
route.delete('/delete/:id',todoController.handleDeleteTask)
route.patch('/update',todoController.handleUpdateTask)

export default route