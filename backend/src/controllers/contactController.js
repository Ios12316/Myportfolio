import Contact from "../models/contactModel.js";
import asyncHandler from "../middleware/asyncHandler.js";


export const createMessage = async (req, res) => {
    try{
        const {name, email, message} = req.body;
        if(!name || !email || !message){
            return res.status(400).json({message: "All fields are required"});
        }

        const newMessage = await Contact.create({name, email, message});
        res.status(201).json({message: "Message sent successfully", data: newMessage});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

export const getAllMessages = async (req, res) => {
    try {
        const messages = await Contact.find().sort({ createdAt: -1});
        res.status(200).json({ count: messages.length, data: messages});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

export const deleteMessage = async (req, res) => {
    try {
        const message = await Contact.findById(req.params.id);
        if(!message){
            return res.status(404).json({message: "Message not found"});
        }

        await message.deleteOne();
        res.status(200).json({message: "Message deleted successfully"});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}