import { z } from "zod";

export const accommodationSchema = z.object({
  id: z.string(),
  name: z.string(),
  address: z.string(),
  checkIn: z.string(),
  checkOut: z.string(),
});
export type Accommodation = z.infer<typeof accommodationSchema>;

const attendeeUserSchema = z.object({
  name: z.string(),
  email: z.string(),
});

export const attendeeSchema = z.object({
  id: z.string(),
  userId: z.string(),
  meetingId: z.string(),
  user: attendeeUserSchema,
  accommodation: accommodationSchema.nullable().optional(),
});
export type Attendee = z.infer<typeof attendeeSchema>;
