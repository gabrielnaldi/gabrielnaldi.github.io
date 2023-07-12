import { z } from "zod";

export const contactFormSchema = z.object({
    name: z.string().nonempty({ message: 'Enter your name!' }),
    email: z.string().email({ message: 'Enter a valid email!' }),
    message: z.string().nonempty({ message: 'Enter a message!' })
})