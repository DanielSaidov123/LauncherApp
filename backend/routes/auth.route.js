import express, { application } from "express"
import { login, rgister } from "../controllers/auth.controller.js"

const router = express.Router()

router.post('/register/create' , rgister)
router.post('/login', login)


export default router