import {
  User,
  Meeting,
  Attendee,
  Transport,
  Accommodation,
  TransportType,
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
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
  };
  const user4: User = {
    id: String(currentUserIdCounter++),
    name: 'Alice Williams',
    email: 'alice.williams@example.com',
  };

  users.push(user1, user2, user3, user4);

  // Create meetings
  const meeting1: Meeting = {
    id: String(currentMeetingIdCounter++),
    title: 'Annual Tech Conference 2024',
    date: '2024-06-15',
    location: 'San Francisco, CA',
  };
  const meeting2: Meeting = {
    id: String(currentMeetingIdCounter++),
    title: 'Summer Team Retreat',
    date: '2024-07-20',
    location: 'Lake Tahoe, CA',
  };

  meetings.push(meeting1, meeting2);

  // Create transports
  const transport1: Transport = {
    id: String(currentTransportIdCounter++),
    type: TransportType.FLIGHT,
    from: 'New York',
    to: 'San Francisco',
    departureDate: '2024-06-14T10:00:00Z',
    arrivalDate: '2024-06-14T13:30:00Z',
  };
  const transport2: Transport = {
    id: String(currentTransportIdCounter++),
    type: TransportType.FLIGHT,
    from: 'Los Angeles',
    to: 'San Francisco',
    departureDate: '2024-06-14T08:00:00Z',
    arrivalDate: '2024-06-14T09:30:00Z',
  };
  const transport3: Transport = {
    id: String(currentTransportIdCounter++),
    type: TransportType.TRAIN,
    from: 'Chicago',
    to: 'San Francisco',
    departureDate: '2024-06-13T12:00:00Z',
    arrivalDate: '2024-06-14T10:00:00Z',
  };
  const transport4: Transport = {
    id: String(currentTransportIdCounter++),
    type: TransportType.CAR,
    from: 'Sacramento',
    to: 'Lake Tahoe',
    departureDate: '2024-07-19T14:00:00Z',
    arrivalDate: '2024-07-19T16:30:00Z',
  };

  transports.push(transport1, transport2, transport3, transport4);

  // Create accommodations
  const accommodation1: Accommodation = {
    id: String(currentAccommodationIdCounter++),
    name: 'Grand Hotel San Francisco',
    address: '123 Market St, San Francisco, CA 94102',
    checkIn: '2024-06-14',
    checkOut: '2024-06-16',
  };
  const accommodation2: Accommodation = {
    id: String(currentAccommodationIdCounter++),
    name: 'Downtown Inn',
    address: '456 Mission St, San Francisco, CA 94103',
    checkIn: '2024-06-14',
    checkOut: '2024-06-16',
  };
  const accommodation3: Accommodation = {
    id: String(currentAccommodationIdCounter++),
    name: 'Lake Tahoe Resort',
    address: '789 Lake Blvd, Lake Tahoe, CA 96150',
    checkIn: '2024-07-19',
    checkOut: '2024-07-22',
  };

  accommodations.push(accommodation1, accommodation2, accommodation3);

  // Create attendees
  const attendee1: Attendee = {
    id: String(currentAttendeeIdCounter++),
    userId: user1.id,
    meetingId: meeting1.id,
    transportId: transport1.id,
    accommodationId: accommodation1.id,
  };
  const attendee2: Attendee = {
    id: String(currentAttendeeIdCounter++),
    userId: user2.id,
    meetingId: meeting1.id,
    transportId: transport2.id,
    accommodationId: accommodation2.id,
  };
  const attendee3: Attendee = {
    id: String(currentAttendeeIdCounter++),
    userId: user3.id,
    meetingId: meeting1.id,
    transportId: transport3.id,
    // No accommodation assigned
  };
  const attendee4: Attendee = {
    id: String(currentAttendeeIdCounter++),
    userId: user4.id,
    meetingId: meeting2.id,
    transportId: transport4.id,
    accommodationId: accommodation3.id,
  };

  attendees.push(attendee1, attendee2, attendee3, attendee4);

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
  console.log(`   - ${transports.length} transports`);
  console.log(`   - ${accommodations.length} accommodations`);
}

// Run seed when script is executed
seed();

export { seed };
