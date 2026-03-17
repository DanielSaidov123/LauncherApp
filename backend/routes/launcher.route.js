import express from "express"
import { AllLaunchers, createLaunchers, DeleteLauncherByID, getLauncherByID, updateLauncher } from "../controllers/launcher.controller.js"
import { checkAuth } from "../middleware/auth.middleware.js"

const router = express.Router()

router.get('/',checkAuth(["admin" ,"intel" ,"airforce"]),AllLaunchers)
router.post('/' ,checkAuth(["admin" ,"intel"]),createLaunchers)
router.put('/:id',checkAuth(["admin" ,"intel"]),updateLauncher)
router.get('/:id',checkAuth(["admin" ,"intel" ,"airforce"]),getLauncherByID)
router.delete('/:id',checkAuth(["admin" ,"intel"]),DeleteLauncherByID)


export default router