import z from 'zod';

export const isStudentValid = z.object({
    email : z.email().endsWith('@lpu.in'),
    password: z.string().min(8),
    fullName: z.string(),
    vid: z.number()
})