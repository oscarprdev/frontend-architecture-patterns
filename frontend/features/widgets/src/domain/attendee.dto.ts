export interface AttendeeQueryDto {
  id: string;
  userId: string;
  meetingId: string;
  user: { name: string; email: string };
  transport?: {
    id: string;
    type: string;
    from: string;
    to: string;
    departureDate: string;
    arrivalDate: string;
  } | null;
  accommodation?: {
    id: string;
    name: string;
    address: string;
    checkIn: string;
    checkOut: string;
  } | null;
}

export interface AttendeeByIdDto {
  attendee?: AttendeeQueryDto;
}
