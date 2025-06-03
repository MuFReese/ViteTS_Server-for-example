import { Router } from "express";
import { submitForm } from "../controllers/form.controllers";
import { validateForm } from "../middlewares/validation.middlewares";

const router = Router()

router.post('/submit', validateForm, submitForm)

export default router