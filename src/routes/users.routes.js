import { Router } from "express";
import { addTIcket, create, get, reminder } from "../controllers/users.controller.js"

const router = Router()

router.get("/", get)
router.get("/reminder/:userID", reminder)
router.post("/", create)
router.put("/add", addTIcket)

export default router