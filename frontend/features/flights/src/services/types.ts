import { z } from 'zod';

export const transportTypeSchema = z.enum(['FLIGHT', 'TRAIN', 'BUS', 'CAR']);
export type TransportType = z.infer<typeof transportTypeSchema>;

export const flightSchema = z.object({
  id: z.string(),
  type: transportTypeSchema,
  from: z.string(),
  to: z.string(),
  departureDate: z.string(),
  arrivalDate: z.string(),
});
export type Flight = z.infer<typeof flightSchema>;

const attendeeUserSchema = z.object({
  name: z.string(),
  email: z.string(),
});

export const attendeeSchema = z.object({
  id: z.string(),
  userId: z.string(),
  meetingId: z.string(),
  user: attendeeUserSchema,
  transport: flightSchema.nullable().optional(),
});
export type Attendee = z.infer<typeof attendeeSchema>;
