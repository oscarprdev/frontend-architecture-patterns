import {
  User,
  Meeting,
  Attendee,
  Transport,
  TransportType,
  Accommodation,
} from './types.js';
import {
  users,
  meetings,
  attendees,
  transports,
  accommodations,
  resetData,
  setCounters,
} from './data.js';

// Seed function
function seed() {
  // Reset all data
  resetData();

  // Use local counters for seeding
  let currentUserIdCounter = 1;
  let currentMeetingIdCounter = 1;
  let currentAttendeeIdCounter = 1;
  let currentTransportIdCounter = 1;
  let currentAccommodationIdCounter = 1;

  // Create users
  const user1: User = {
    id: String(currentUserIdCounter++),
    name: 'John Doe',
    email: 'john.doe@example.com',
  };
  const user2: User = {
    id: String(currentUserIdCounter++),
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
  };
  const user3: User = {
    id: String(currentUserIdCounter++),
    name: 'Bob Wilson',
    email: 'bob.wilson@example.com',
  };
  users.push(user1, user2, user3);

  // Create meeting
  const meeting1: Meeting = {
    id: String(currentMeetingIdCounter++),
    title: 'Annual Tech Conference 2024',
    date: '2024-06-15',
    location: 'San Francisco, CA',
  };
  meetings.push(meeting1);

  // Create flights (inbound and outbound)
  const flightInbound: Transport = {
    id: String(currentTransportIdCounter++),
    type: TransportType.FLIGHT,
    from: 'New York',
    to: 'San Francisco',
    departureDate: '2024-06-14T10:00:00Z',
    arrivalDate: '2024-06-14T13:30:00Z',
  };
  const flightOutbound: Transport = {
    id: String(currentTransportIdCounter++),
    type: TransportType.FLIGHT,
    from: 'San Francisco',
    to: 'New York',
    departureDate: '2024-06-16T14:00:00Z',
    arrivalDate: '2024-06-16T22:00:00Z',
  };
  transports.push(flightInbound, flightOutbound);

  // Create hotel
  const hotel1: Accommodation = {
    id: String(currentAccommodationIdCounter++),
    name: 'Grand Hotel San Francisco',
    address: '123 Market St, San Francisco, CA',
    checkIn: '2024-06-14',
    checkOut: '2024-06-17',
  };
  accommodations.push(hotel1);

  // Create attendees: each has flight + hotel assigned
  const attendee1: Attendee = {
    id: String(currentAttendeeIdCounter++),
    userId: user1.id,
    meetingId: meeting1.id,
    transportId: flightInbound.id,
    accommodationId: hotel1.id,
  };
  const attendee2: Attendee = {
    id: String(currentAttendeeIdCounter++),
    userId: user2.id,
    meetingId: meeting1.id,
    transportId: flightInbound.id,
    accommodationId: hotel1.id,
  };
  const attendee3: Attendee = {
    id: String(currentAttendeeIdCounter++),
    userId: user3.id,
    meetingId: meeting1.id,
    transportId: flightOutbound.id,
    accommodationId: hotel1.id,
  };
  attendees.push(attendee1, attendee2, attendee3);

  // Update counters so new items created via mutations continue from correct IDs
  setCounters(
    currentUserIdCounter,
    currentMeetingIdCounter,
    currentAttendeeIdCounter,
    currentTransportIdCounter,
    currentAccommodationIdCounter
  );

  console.log('✅ Seed data created successfully!');
  console.log(`   - ${users.length} users`);
  console.log(`   - ${meetings.length} meetings`);
  console.log(`   - ${attendees.length} attendees`);
  console.log(`   - ${transports.length} transports (flights)`);
  console.log(`   - ${accommodations.length} accommodations (hotels)`);
}

// Run seed when script is executed
seed();

export { seed };
