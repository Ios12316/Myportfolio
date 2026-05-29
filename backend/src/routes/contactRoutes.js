import express from "express";
import { createMessage, getAllMessages, deleteMessage} from "../controllers/contactController.js";

const router = express.Router();

router.post("/contact", createMessage);
router.post("/contacts", createMessage);
router.get("/messages", getAllMessages);
router.delete("/messages/:id", deleteMessage);

export default router;