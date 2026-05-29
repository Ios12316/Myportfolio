import Contact from "../models/contactModel.js";
import asyncHandler from "../middleware/asyncHandler.js";


export const createMessage = asyncHandler(async (req, res) => {
    const { name, email, message } = req.body;
    const newMessage = await Contact.create({ name, email, message });
    res.status(201).json({ message: "Message sent successfully", data: newMessage });
});


export const getAllMessages = asyncHandler(async (req, res) => {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ count: messages.length, data: messages });
});


export const deleteMessage = asyncHandler(async (req, res) => {
    const message = await Contact.findById(req.params.id);
    if (!message) {
        res.status(404);
        throw new Error("Message not found");
    }

    await message.deleteOne();
    res.status(200).json({ message: "Message deleted successfully" });
});