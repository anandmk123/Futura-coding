import { Router } from "express";
import todoController from "../Controllers/todo.controller.mjs";

const route=Router()

route.get('/status',todoController.handleStatus)

export default route
