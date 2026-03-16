import express from "express"
import { AllLaunchers, createLaunchers, DeleteLauncherByID, getLauncherByID } from "../controllers/launcher.controller.js"

const router = express.Router()

router.get('/',AllLaunchers)
router.post('/',createLaunchers)
router.get('/:id',getLauncherByID)
router.delete('/:id',DeleteLauncherByID)


export default router