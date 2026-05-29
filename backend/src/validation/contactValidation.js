import Joi from "joi";

const contactSchema = Joi.object({
    name: Joi.string().required().trim(),
    email: Joi.string().email().required().trim(),
    message: Joi.string().required().trim()
});

export default contactSchema;