import { z } from "zod";

export const signupSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be between 3 and 20 characters.")
    .max(20, "Name must be between 3 and 20 characters.")
    .regex(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces."),

  email: z
    .string()
    .min(1, "Email cannot be empty.")
    .email("Please enter a valid email address."),

  password: z
    .string()
    .min(6, "Password must be longer than 6 characters.")
    .refine((value) => /[A-Z]/.test(value), {
      message: "Password must have at least one capital letter.",
    })
    .refine((value) => /[0-9]/.test(value), {
      message: "Password must have at least one number.",
    })
    .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
      message: "Password must have at least one special character.",
    }),

  phoneNum: z
    .string()
    .min(8, "Phone number must be between 8 and 10 digits.")
    .max(10, "Phone number must be between 8 and 10 digits.")
    .regex(/^\d+$/, "Phone number must be a number."),

  address: z
    .string()
    .min(10, "Address must be between 10 and 100 characters.")
    .max(100, "Address must be between 10 and 100 characters."),
});

export const signinSchema = z.object({
  email: z
    .string()
    .min(1, "Name or email cannot be empty.")
    .refine((value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value) || /^[a-zA-Z0-9_.-]+$/.test(value);
    }, "Please enter a valid email or name."),

  password: z.string().min(6, "Password must be longer than 6 characters."),
});

export const validateSignup = (data) => {
  return signupSchema.safeParse(data);
};

export const validateSignin = (data) => {
  return signinSchema.safeParse(data);
};
