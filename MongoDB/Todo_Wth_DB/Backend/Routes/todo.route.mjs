import { Router } from "express"
import todoController from "../Controllers/todo.controller.mjs"

const todoRouter= Router();

todoRouter.post('/create',todoController.createDoc);
todoRouter.get('/read',todoController.readDoc);
todoRouter.get('/readbyid',todoController.readDocById);
todoRouter.delete('/deletebyid',todoController.deleteDocById);
todoRouter.patch('/updatebyid',todoController.updateDocById);
todoRouter.get('/filterbyage',todoController.filterDocByAge);
todoRouter.get('/searchbyname',todoController.searchDocByName);


export default todoRouter;