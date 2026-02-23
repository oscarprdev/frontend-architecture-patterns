import { z } from "zod";

export const transportSchema = z.object({
  id: z.string(),
  type: z.string(),
  from: z.string(),
  to: z.string(),
  departureDate: z.string(),
  arrivalDate: z.string(),
});
export type Transport = z.infer<typeof transportSchema>;

export const accommodationSchema = z.object({
  id: z.string(),
  name: z.string(),
  address: z.string(),
  checkIn: z.string(),
  checkOut: z.string(),
});
export type Accommodation = z.infer<typeof accommodationSchema>;

export const attendeeSchema = z.object({
  id: z.string(),
  userId: z.string(),
  meetingId: z.string(),
  user: z.object({ name: z.string(), email: z.string() }),
  transport: transportSchema.nullable().optional(),
  accommodation: accommodationSchema.nullable().optional(),
});
export type Attendee = z.infer<typeof attendeeSchema>;
