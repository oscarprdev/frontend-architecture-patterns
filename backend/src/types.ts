export enum TransportType {
  FLIGHT = 'FLIGHT',
  TRAIN = 'TRAIN',
  BUS = 'BUS',
  CAR = 'CAR',
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Meeting {
  id: string;
  title: string;
  date: string;
  location: string;
}

export interface Transport {
  id: string;
  type: TransportType;
  from: string;
  to: string;
  departureDate: string;
  arrivalDate: string;
}

export interface Accommodation {
  id: string;
  name: string;
  address: string;
  checkIn: string;
  checkOut: string;
}

export interface Attendee {
  id: string;
  userId: string;
  meetingId: string;
  transportId?: string;
  accommodationId?: string;
}
