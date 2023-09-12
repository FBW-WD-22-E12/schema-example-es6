import { Router } from "express";
import { addPeople } from "./controllers/peopleController.js";

const router = Router();

router.post("/", addPeople);

export default router;
