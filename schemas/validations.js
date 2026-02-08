import z from 'zod';

export const isPasswordValid = z.string().min(8).regex(/[A-Z]/, "Must contain UpperCase Letter").regex(/[0-9]/, "Must Contain a number");