import express, { application } from "express"
import { deleteUser, getAllUser, getUser, login, rgister, updateUser } from "../controllers/auth.controller.js"
import { checkAuth } from "../middleware/auth.middleware.js"

const router = express.Router()

router.post('/register/create' ,checkAuth(["admin"]), rgister)
router.post('/login', login)
router.put('/register/update/:id',checkAuth(["admin"]), updateUser)
router.delete('/register/delete/:id',checkAuth(["admin"]), deleteUser)
router.get('/getUser',checkAuth( ["intel", "airforce", "admin"]), getUser)
router.get('/getAllUsers',checkAuth( ["intel", "airforce", "admin"]), getAllUser)


export default router