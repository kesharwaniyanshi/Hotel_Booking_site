const { z } = require("zod");

const messageSchema = z.object({
    username: z
        .string({ required_error: "Username is required" })
        .trim()
        .min(3, { message: "Username must have atleast 3 characters" })
        .max(255, { message: "Username must have atmax 255 characters" }),
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .min(3, { message: "Email must have atleast 3 characters" })
        .max(255, { message: "Email must have atmax 255 characters" }),
    message: z
        .string({ required_error: "Messsage is required" })
        .trim()
        .min(3, { message: "Message must have atleast 3 characters" })
        .max(255, { message: "Message must have atmax 255 characters" })
});

module.exports= messageSchema;