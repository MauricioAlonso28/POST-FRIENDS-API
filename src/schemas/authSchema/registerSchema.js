import { z } from 'zod'

const registerSchema = z.object({
    firstName: z.string({
        required_error: "First name is required"
    }).max(12, {
        message: "First name must be less than 13 characters long",
    }),
    lastName: z.string({
        required_error: "Last name is required"
    }).max(12, {
        message: "Last name must be less than 13 characters long",
    }),
    username: z.string({
        required_error: "Username is required."
    }).max(30, {
        message: "Username must be less than 31 characters long",
    }),
    email: z.string({
        required_error: "Email is required."
    }).email({
        message: "Invalid Email."
    }),
    password: z.string({
        required_error: "Password is required.",
    }).min(6, {
        message: "Password must be at least 6 characters."
    }),
    age: z.string({
        required_error: "Age is required.",
    }),
    image: z.string({
        required_error: "Image URL is required.",
    }),
    city: z.string({
        required_error: "City is required.",
    }),
    country: z.string({
        required_error: "Country is required.",
    }),
    description: z.string().max(200, {
        message: "Description must be less than 201 characters long",
    }),
})

export default registerSchema