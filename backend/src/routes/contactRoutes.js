import express from "express";
import { createMessage, getAllMessages, deleteMessage} from "../controllers/contactController.js";
import validate from "../middleware/validate.js";
import contactSchema from "../validation/contactValidation.js";
const router = express.Router();

router.post("/contact", validate(contactSchema), createMessage);
router.get("/messages", getAllMessages);
router.delete("/messages/:id", deleteMessage);

export default router;