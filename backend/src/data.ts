import {
  User,
  Meeting,
  Attendee,
  Transport,
  Accommodation,
} from './types.js';

// In-memory data stores
export const users: User[] = [];
export const meetings: Meeting[] = [];
export const attendees: Attendee[] = [];
export const transports: Transport[] = [];
export const accommodations: Accommodation[] = [];

// Counters
export let userIdCounter = 1;
export let meetingIdCounter = 1;
export let attendeeIdCounter = 1;
export let transportIdCounter = 1;
export let accommodationIdCounter = 1;

// Reset function for seeding
export function resetData() {
  users.length = 0;
  meetings.length = 0;
  attendees.length = 0;
  transports.length = 0;
  accommodations.length = 0;
  
  userIdCounter = 1;
  meetingIdCounter = 1;
  attendeeIdCounter = 1;
  transportIdCounter = 1;
  accommodationIdCounter = 1;
}

// Set counters function for seeding
export function setCounters(
  userId: number,
  meetingId: number,
  attendeeId: number,
  transportId: number,
  accommodationId: number
) {
  userIdCounter = userId;
  meetingIdCounter = meetingId;
  attendeeIdCounter = attendeeId;
  transportIdCounter = transportId;
  accommodationIdCounter = accommodationId;
}

// Incrementer functions for counters
export function incrementUserIdCounter(): number {
  return userIdCounter++;
}

export function incrementMeetingIdCounter(): number {
  return meetingIdCounter++;
}

export function incrementAttendeeIdCounter(): number {
  return attendeeIdCounter++;
}

export function incrementTransportIdCounter(): number {
  return transportIdCounter++;
}

export function incrementAccommodationIdCounter(): number {
  return accommodationIdCounter++;
}
