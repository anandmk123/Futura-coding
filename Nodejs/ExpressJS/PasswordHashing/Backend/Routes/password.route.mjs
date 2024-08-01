import { Router } from "express";
import passwordController from "../Controllers/password.controller.mjs";

const route=Router()
route.get('/status',passwordController.handleStatus)
route.post('/hash/generate',passwordController.handleGenerateHash)
route.post('/hash/validate',passwordController.handleValid)

export default route