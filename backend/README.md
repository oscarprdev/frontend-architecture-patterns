# Travel App Backend

A simple GraphQL backend for a travel application built with Apollo Server and TypeScript.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

The server will run on `http://localhost:4000` and Apollo Studio will be available at `http://localhost:4000`.

## GraphQL Schema

### Entities

- **User**: Basic user information (id, name, email)
- **Meeting**: A meeting/event that attendees can join (id, title, date, location)
- **Attendee**: Represents a user attending a meeting (id, userId, meetingId, transport, accommodation)
- **Transport**: Transportation details (id, type, from, to, departureDate, arrivalDate)
- **Accommodation**: Accommodation details (id, name, address, checkIn, checkOut)

### Data Model

- Users can attend multiple meetings (via Attendee records)
- Each Attendee belongs to one Meeting and one User
- Transport and Accommodation are created independently, then assigned to Attendees
- An Attendee can optionally have one Transport and one Accommodation assigned

### Queries

- `users` - Get all users
- `user(id: ID!)` - Get a user by ID
- `meetings` - Get all meetings
- `meeting(id: ID!)` - Get a meeting by ID
- `attendees` - Get all attendees
- `attendee(id: ID!)` - Get an attendee by ID
- `transports` - Get all transports
- `transport(id: ID!)` - Get a transport by ID
- `accommodations` - Get all accommodations
- `accommodation(id: ID!)` - Get an accommodation by ID

### Mutations

**Users:**
- `createUser(name: String!, email: String!)` - Create a new user
- `deleteUser(id: ID!)` - Delete a user (and related attendees)

**Meetings:**
- `createMeeting(title: String!, date: String!, location: String!)` - Create a new meeting
- `deleteMeeting(id: ID!)` - Delete a meeting (and related attendees)

**Attendees:**
- `addAttendeeToMeeting(userId: ID!, meetingId: ID!)` - Add a user as an attendee to a meeting
- `removeAttendeeFromMeeting(id: ID!)` - Remove an attendee from a meeting

**Transport:**
- `createTransport(type: TransportType!, from: String!, to: String!, departureDate: String!, arrivalDate: String!)` - Create a new transport
- `deleteTransport(id: ID!)` - Delete a transport
- `assignTransportToAttendee(attendeeId: ID!, transportId: ID!)` - Assign a transport to an attendee
- `unassignTransportFromAttendee(attendeeId: ID!)` - Unassign transport from an attendee

**Accommodation:**
- `createAccommodation(name: String!, address: String!, checkIn: String!, checkOut: String!)` - Create a new accommodation
- `deleteAccommodation(id: ID!)` - Delete an accommodation
- `assignAccommodationToAttendee(attendeeId: ID!, accommodationId: ID!)` - Assign an accommodation to an attendee
- `unassignAccommodationFromAttendee(attendeeId: ID!)` - Unassign accommodation from an attendee

## Example Queries

### Create a meeting and add attendees
```graphql
mutation {
  # Create a meeting
  createMeeting(title: "Annual Conference", date: "2024-06-15", location: "San Francisco") {
    id
    title
  }
  
  # Create users
  user1: createUser(name: "John Doe", email: "john@example.com") {
    id
  }
  
  user2: createUser(name: "Jane Smith", email: "jane@example.com") {
    id
  }
  
  # Add attendees to meeting
  attendee1: addAttendeeToMeeting(userId: "1", meetingId: "1") {
    id
    user { name }
    meeting { title }
  }
  
  attendee2: addAttendeeToMeeting(userId: "2", meetingId: "1") {
    id
    user { name }
    meeting { title }
  }
}
```

### Create transport and accommodation, then assign to attendee
```graphql
mutation {
  # Create transport
  transport: createTransport(
    type: FLIGHT
    from: "New York"
    to: "San Francisco"
    departureDate: "2024-06-14T10:00:00Z"
    arrivalDate: "2024-06-14T13:00:00Z"
  ) {
    id
  }
  
  # Create accommodation
  accommodation: createAccommodation(
    name: "Grand Hotel"
    address: "123 Main St, San Francisco"
    checkIn: "2024-06-14"
    checkOut: "2024-06-16"
  ) {
    id
  }
  
  # Assign to attendee
  assignTransportToAttendee(attendeeId: "1", transportId: "1") {
    id
    transport { type from to }
  }
  
  assignAccommodationToAttendee(attendeeId: "1", accommodationId: "1") {
    id
    accommodation { name address }
  }
}
```

### Get meeting with all attendees and their assignments
```graphql
query {
  meeting(id: "1") {
    id
    title
    date
    location
    attendees {
      id
      user {
        name
        email
      }
      transport {
        type
        from
        to
      }
      accommodation {
        name
        address
      }
    }
  }
}
```

## Data Storage

Currently uses in-memory storage (arrays). Data will be lost when the server restarts. This is intentional for simplicity.

## TypeScript

The backend is written in TypeScript. Type definitions are in `src/types.ts`. To build:

```bash
npm run build
```
