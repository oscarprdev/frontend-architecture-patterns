# GraphQL Queries and Mutations Reference

Complete guide to all queries and mutations organized by entity flows.

## Table of Contents

1. [User Flow](#user-flow)
2. [Meeting Flow](#meeting-flow)
3. [Attendee Flow](#attendee-flow)
4. [Transport Flow](#transport-flow)
5. [Accommodation Flow](#accommodation-flow)
6. [Complete Workflow Examples](#complete-workflow-examples)

---

## User Flow

### Create a User

```graphql
mutation CreateUser($name: String!, $email: String!) {
  createUser(name: $name, email: $email) {
    id
    name
    email
  }
}
```

**Variables:**
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```

### Get All Users

```graphql
query GetAllUsers {
  users {
    id
    name
    email
  }
}
```

### Get User by ID

```graphql
query GetUser($id: ID!) {
  user(id: $id) {
    id
    name
    email
  }
}
```

**Variables:**
```json
{
  "id": "1"
}
```

### Delete a User

```graphql
mutation DeleteUser($id: ID!) {
  deleteUser(id: $id)
}
```

**Variables:**
```json
{
  "id": "1"
}
```

**Note:** Deleting a user also removes all related attendees.

---

## Meeting Flow

### Create a Meeting

```graphql
mutation CreateMeeting($title: String!, $date: String!, $location: String!) {
  createMeeting(title: $title, date: $date, location: $location) {
    id
    title
    date
    location
  }
}
```

**Variables:**
```json
{
  "title": "Annual Tech Conference 2024",
  "date": "2024-06-15",
  "location": "San Francisco, CA"
}
```

### Get All Meetings

```graphql
query GetAllMeetings {
  meetings {
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
    }
  }
}
```

### Get Meeting by ID with Attendees

```graphql
query GetMeeting($id: ID!) {
  meeting(id: $id) {
    id
    title
    date
    location
    attendees {
      id
      user {
        id
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

**Variables:**
```json
{
  "id": "1"
}
```

### Delete a Meeting

```graphql
mutation DeleteMeeting($id: ID!) {
  deleteMeeting(id: $id)
}
```

**Variables:**
```json
{
  "id": "1"
}
```

**Note:** Deleting a meeting also removes all related attendees.

---

## Attendee Flow

### Add User to Meeting (Create Attendee)

```graphql
mutation AddAttendeeToMeeting($userId: ID!, $meetingId: ID!) {
  addAttendeeToMeeting(userId: $userId, meetingId: $meetingId) {
    id
    userId
    meetingId
    user {
      name
      email
    }
    meeting {
      title
      date
      location
    }
  }
}
```

**Variables:**
```json
{
  "userId": "1",
  "meetingId": "1"
}
```

### Get All Attendees

```graphql
query GetAllAttendees {
  attendees {
    id
    user {
      id
      name
      email
    }
    meeting {
      id
      title
      date
      location
    }
    transport {
      id
      type
      from
      to
    }
    accommodation {
      id
      name
      address
    }
  }
}
```

### Get Attendee by ID

```graphql
query GetAttendee($id: ID!) {
  attendee(id: $id) {
    id
    user {
      name
      email
    }
    meeting {
      title
      date
      location
    }
    transport {
      type
      from
      to
      departureDate
      arrivalDate
    }
    accommodation {
      name
      address
      checkIn
      checkOut
    }
  }
}
```

**Variables:**
```json
{
  "id": "1"
}
```

### Remove Attendee from Meeting

```graphql
mutation RemoveAttendee($id: ID!) {
  removeAttendeeFromMeeting(id: $id)
}
```

**Variables:**
```json
{
  "id": "1"
}
```

---

## Transport Flow

### Create Transport

```graphql
mutation CreateTransport(
  $type: TransportType!
  $from: String!
  $to: String!
  $departureDate: String!
  $arrivalDate: String!
) {
  createTransport(
    type: $type
    from: $from
    to: $to
    departureDate: $departureDate
    arrivalDate: $arrivalDate
  ) {
    id
    type
    from
    to
    departureDate
    arrivalDate
  }
}
```

**Variables:**
```json
{
  "type": "FLIGHT",
  "from": "New York",
  "to": "San Francisco",
  "departureDate": "2024-06-14T10:00:00Z",
  "arrivalDate": "2024-06-14T13:30:00Z"
}
```

**Transport Types:** `FLIGHT`, `TRAIN`, `BUS`, `CAR`

### Get All Transports

```graphql
query GetAllTransports {
  transports {
    id
    type
    from
    to
    departureDate
    arrivalDate
  }
}
```

### Get Transport by ID

```graphql
query GetTransport($id: ID!) {
  transport(id: $id) {
    id
    type
    from
    to
    departureDate
    arrivalDate
  }
}
```

**Variables:**
```json
{
  "id": "1"
}
```

### Assign Transport to Attendee

```graphql
mutation AssignTransport($attendeeId: ID!, $transportId: ID!) {
  assignTransportToAttendee(attendeeId: $attendeeId, transportId: $transportId) {
    id
    transport {
      id
      type
      from
      to
    }
    user {
      name
    }
    meeting {
      title
    }
  }
}
```

**Variables:**
```json
{
  "attendeeId": "1",
  "transportId": "1"
}
```

### Unassign Transport from Attendee

```graphql
mutation UnassignTransport($attendeeId: ID!) {
  unassignTransportFromAttendee(attendeeId: $attendeeId) {
    id
    transport
    user {
      name
    }
  }
}
```

**Variables:**
```json
{
  "attendeeId": "1"
}
```

### Delete Transport

```graphql
mutation DeleteTransport($id: ID!) {
  deleteTransport(id: $id)
}
```

**Variables:**
```json
{
  "id": "1"
}
```

**Note:** Deleting a transport also removes the assignment from any attendees.

---

## Accommodation Flow

### Create Accommodation

```graphql
mutation CreateAccommodation(
  $name: String!
  $address: String!
  $checkIn: String!
  $checkOut: String!
) {
  createAccommodation(
    name: $name
    address: $address
    checkIn: $checkIn
    checkOut: $checkOut
  ) {
    id
    name
    address
    checkIn
    checkOut
  }
}
```

**Variables:**
```json
{
  "name": "Grand Hotel San Francisco",
  "address": "123 Market St, San Francisco, CA 94102",
  "checkIn": "2024-06-14",
  "checkOut": "2024-06-16"
}
```

### Get All Accommodations

```graphql
query GetAllAccommodations {
  accommodations {
    id
    name
    address
    checkIn
    checkOut
  }
}
```

### Get Accommodation by ID

```graphql
query GetAccommodation($id: ID!) {
  accommodation(id: $id) {
    id
    name
    address
    checkIn
    checkOut
  }
}
```

**Variables:**
```json
{
  "id": "1"
}
```

### Assign Accommodation to Attendee

```graphql
mutation AssignAccommodation($attendeeId: ID!, $accommodationId: ID!) {
  assignAccommodationToAttendee(attendeeId: $attendeeId, accommodationId: $accommodationId) {
    id
    accommodation {
      id
      name
      address
      checkIn
      checkOut
    }
    user {
      name
    }
    meeting {
      title
    }
  }
}
```

**Variables:**
```json
{
  "attendeeId": "1",
  "accommodationId": "1"
}
```

### Unassign Accommodation from Attendee

```graphql
mutation UnassignAccommodation($attendeeId: ID!) {
  unassignAccommodationFromAttendee(attendeeId: $attendeeId) {
    id
    accommodation
    user {
      name
    }
  }
}
```

**Variables:**
```json
{
  "attendeeId": "1"
}
```

### Delete Accommodation

```graphql
mutation DeleteAccommodation($id: ID!) {
  deleteAccommodation(id: $id)
}
```

**Variables:**
```json
{
  "id": "1"
}
```

**Note:** Deleting an accommodation also removes the assignment from any attendees.

---

## Complete Workflow Examples

### Workflow 1: Create a Complete Meeting Setup

This workflow creates a meeting, adds users, creates transport and accommodation, and assigns them to attendees.

```graphql
# Step 1: Create users
mutation CreateUsers(
  $user1Name: String!
  $user1Email: String!
  $user2Name: String!
  $user2Email: String!
) {
  user1: createUser(name: $user1Name, email: $user1Email) {
    id
    name
  }
  user2: createUser(name: $user2Name, email: $user2Email) {
    id
    name
  }
}

# Step 2: Create a meeting
mutation CreateMeeting($title: String!, $date: String!, $location: String!) {
  createMeeting(title: $title, date: $date, location: $location) {
    id
    title
  }
}

# Step 3: Add users as attendees
mutation AddAttendees(
  $userId1: ID!
  $userId2: ID!
  $meetingId: ID!
) {
  attendee1: addAttendeeToMeeting(userId: $userId1, meetingId: $meetingId) {
    id
  }
  attendee2: addAttendeeToMeeting(userId: $userId2, meetingId: $meetingId) {
    id
  }
}

# Step 4: Create transport options
mutation CreateTransports(
  $transport1Type: TransportType!
  $transport1From: String!
  $transport1To: String!
  $transport1Departure: String!
  $transport1Arrival: String!
  $transport2Type: TransportType!
  $transport2From: String!
  $transport2To: String!
  $transport2Departure: String!
  $transport2Arrival: String!
) {
  transport1: createTransport(
    type: $transport1Type
    from: $transport1From
    to: $transport1To
    departureDate: $transport1Departure
    arrivalDate: $transport1Arrival
  ) {
    id
  }
  transport2: createTransport(
    type: $transport2Type
    from: $transport2From
    to: $transport2To
    departureDate: $transport2Departure
    arrivalDate: $transport2Arrival
  ) {
    id
  }
}

# Step 5: Create accommodation
mutation CreateAccommodation(
  $name: String!
  $address: String!
  $checkIn: String!
  $checkOut: String!
) {
  createAccommodation(
    name: $name
    address: $address
    checkIn: $checkIn
    checkOut: $checkOut
  ) {
    id
  }
}

# Step 6: Assign transport and accommodation to attendees
mutation AssignResources(
  $attendeeId1: ID!
  $attendeeId2: ID!
  $transportId1: ID!
  $transportId2: ID!
  $accommodationId: ID!
) {
  assignTransport1: assignTransportToAttendee(
    attendeeId: $attendeeId1
    transportId: $transportId1
  ) {
    id
    transport {
      type
      from
      to
    }
  }
  assignTransport2: assignTransportToAttendee(
    attendeeId: $attendeeId2
    transportId: $transportId2
  ) {
    id
    transport {
      type
      from
      to
    }
  }
  assignAccommodation1: assignAccommodationToAttendee(
    attendeeId: $attendeeId1
    accommodationId: $accommodationId
  ) {
    id
    accommodation {
      name
      address
    }
  }
  assignAccommodation2: assignAccommodationToAttendee(
    attendeeId: $attendeeId2
    accommodationId: $accommodationId
  ) {
    id
    accommodation {
      name
      address
    }
  }
}
```

**Variables for Step 1 (CreateUsers):**
```json
{
  "user1Name": "John Doe",
  "user1Email": "john@example.com",
  "user2Name": "Jane Smith",
  "user2Email": "jane@example.com"
}
```

**Variables for Step 2 (CreateMeeting):**
```json
{
  "title": "Annual Tech Conference 2024",
  "date": "2024-06-15",
  "location": "San Francisco, CA"
}
```

**Variables for Step 3 (AddAttendees):**
```json
{
  "userId1": "1",
  "userId2": "2",
  "meetingId": "1"
}
```

**Variables for Step 4 (CreateTransports):**
```json
{
  "transport1Type": "FLIGHT",
  "transport1From": "New York",
  "transport1To": "San Francisco",
  "transport1Departure": "2024-06-14T10:00:00Z",
  "transport1Arrival": "2024-06-14T13:30:00Z",
  "transport2Type": "FLIGHT",
  "transport2From": "Los Angeles",
  "transport2To": "San Francisco",
  "transport2Departure": "2024-06-14T08:00:00Z",
  "transport2Arrival": "2024-06-14T09:30:00Z"
}
```

**Variables for Step 5 (CreateAccommodation):**
```json
{
  "name": "Grand Hotel San Francisco",
  "address": "123 Market St, San Francisco, CA 94102",
  "checkIn": "2024-06-14",
  "checkOut": "2024-06-16"
}
```

**Variables for Step 6 (AssignResources):**
```json
{
  "attendeeId1": "1",
  "attendeeId2": "2",
  "transportId1": "1",
  "transportId2": "2",
  "accommodationId": "1"
}
```

### Workflow 2: Query Complete Meeting Information

Get all details about a meeting including all attendees with their transport and accommodation.

```graphql
query GetCompleteMeetingDetails($id: ID!) {
  meeting(id: $id) {
    id
    title
    date
    location
    attendees {
      id
      user {
        id
        name
        email
      }
      transport {
        id
        type
        from
        to
        departureDate
        arrivalDate
      }
      accommodation {
        id
        name
        address
        checkIn
        checkOut
      }
    }
  }
}
```

**Variables:**
```json
{
  "id": "1"
}
```

### Workflow 3: Update Attendee Assignments

Change transport or accommodation for an attendee.

```graphql
# Unassign current transport
mutation UnassignCurrentTransport($attendeeId: ID!) {
  unassignTransportFromAttendee(attendeeId: $attendeeId) {
    id
    transport
  }
}

# Assign new transport
mutation AssignNewTransport($attendeeId: ID!, $transportId: ID!) {
  assignTransportToAttendee(attendeeId: $attendeeId, transportId: $transportId) {
    id
    transport {
      id
      type
      from
      to
    }
  }
}

# Similarly for accommodation
mutation UpdateAccommodation($attendeeId: ID!, $accommodationId: ID!) {
  unassignAccommodationFromAttendee(attendeeId: $attendeeId) {
    id
  }
  assignAccommodationToAttendee(attendeeId: $attendeeId, accommodationId: $accommodationId) {
    id
    accommodation {
      name
      address
    }
  }
}
```

**Variables for UnassignCurrentTransport:**
```json
{
  "attendeeId": "1"
}
```

**Variables for AssignNewTransport:**
```json
{
  "attendeeId": "1",
  "transportId": "2"
}
```

**Variables for UpdateAccommodation:**
```json
{
  "attendeeId": "1",
  "accommodationId": "2"
}
```

### Workflow 4: Get All Data Overview

Query all entities to get a complete overview of the system.

```graphql
query GetAllData {
  users {
    id
    name
    email
  }
  meetings {
    id
    title
    date
    location
    attendees {
      id
      user {
        name
      }
      transport {
        type
        from
        to
      }
      accommodation {
        name
      }
    }
  }
  transports {
    id
    type
    from
    to
  }
  accommodations {
    id
    name
    address
  }
}
```

---

## Error Handling

All mutations that reference IDs (like `userId`, `meetingId`, `attendeeId`, etc.) will throw errors if the referenced entity doesn't exist:

- `addAttendeeToMeeting`: Throws error if user or meeting not found
- `assignTransportToAttendee`: Throws error if attendee or transport not found
- `assignAccommodationToAttendee`: Throws error if attendee or accommodation not found
- `unassignTransportFromAttendee`: Throws error if attendee not found
- `unassignAccommodationFromAttendee`: Throws error if attendee not found

Delete operations return `false` if the entity doesn't exist, `true` if successfully deleted.

---

## Best Practices

1. **Create resources before assigning**: Always create Transport and Accommodation resources before assigning them to attendees.

2. **Query what you need**: Use GraphQL's field selection to only query the fields you need, reducing payload size.

3. **Handle optional fields**: Remember that `transport` and `accommodation` on Attendee are optional - they may be `null`.

4. **Use fragments for repeated fields**: Consider using GraphQL fragments for commonly queried field sets.

5. **Batch operations**: You can run multiple mutations in a single request using aliases (e.g., `user1: createUser(...)`, `user2: createUser(...)`).
