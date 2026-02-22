import {
  User,
  Meeting,
  Attendee,
  Transport,
  Accommodation,
  TransportType,
} from '../types.js';
import {
  users,
  meetings,
  attendees,
  transports,
  accommodations,
  incrementUserIdCounter,
  incrementMeetingIdCounter,
  incrementAttendeeIdCounter,
  incrementTransportIdCounter,
  incrementAccommodationIdCounter,
} from '../data.js';

export const resolvers = {
  Query: {
    users: () => users,
    user: (_: any, { id }: { id: string }) => users.find((u) => u.id === id),

    meetings: () => meetings,
    meeting: (_: any, { id }: { id: string }) =>
      meetings.find((m) => m.id === id),

    attendees: () => attendees,
    attendee: (_: any, { id }: { id: string }) =>
      attendees.find((a) => a.id === id),

    transports: () => transports,
    transport: (_: any, { id }: { id: string }) =>
      transports.find((t) => t.id === id),

    accommodations: () => accommodations,
    accommodation: (_: any, { id }: { id: string }) =>
      accommodations.find((a) => a.id === id),
  },

  Mutation: {
    createUser: (_: any, { name, email }: { name: string; email: string }) => {
      const user: User = {
        id: String(incrementUserIdCounter()),
        name,
        email,
      };
      users.push(user);
      return user;
    },

    deleteUser: (_: any, { id }: { id: string }) => {
      const index = users.findIndex((u) => u.id === id);
      if (index === -1) {
        return false;
      }
      users.splice(index, 1);
      // Also remove related attendees
      const filteredAttendees = attendees.filter((a) => a.userId !== id);
      attendees.length = 0;
      attendees.push(...filteredAttendees);
      return true;
    },

    createMeeting: (
      _: any,
      { title, date, location }: { title: string; date: string; location: string }
    ) => {
      const meeting: Meeting = {
        id: String(incrementMeetingIdCounter()),
        title,
        date,
        location,
      };
      meetings.push(meeting);
      return meeting;
    },

    deleteMeeting: (_: any, { id }: { id: string }) => {
      const index = meetings.findIndex((m) => m.id === id);
      if (index === -1) {
        return false;
      }
      meetings.splice(index, 1);
      // Also remove related attendees
      const filteredAttendees = attendees.filter((a) => a.meetingId !== id);
      attendees.length = 0;
      attendees.push(...filteredAttendees);
      return true;
    },

    addAttendeeToMeeting: (
      _: any,
      { userId, meetingId }: { userId: string; meetingId: string }
    ) => {
      const user = users.find((u) => u.id === userId);
      if (!user) {
        throw new Error(`User with id ${userId} not found`);
      }
      const meeting = meetings.find((m) => m.id === meetingId);
      if (!meeting) {
        throw new Error(`Meeting with id ${meetingId} not found`);
      }
      const attendee: Attendee = {
        id: String(incrementAttendeeIdCounter()),
        userId,
        meetingId,
      };
      attendees.push(attendee);
      return attendee;
    },

    removeAttendeeFromMeeting: (_: any, { id }: { id: string }) => {
      const index = attendees.findIndex((a) => a.id === id);
      if (index === -1) {
        return false;
      }
      attendees.splice(index, 1);
      return true;
    },

    createTransport: (
      _: any,
      {
        type,
        from,
        to,
        departureDate,
        arrivalDate,
      }: {
        type: TransportType;
        from: string;
        to: string;
        departureDate: string;
        arrivalDate: string;
      }
    ) => {
      const transport: Transport = {
        id: String(incrementTransportIdCounter()),
        type,
        from,
        to,
        departureDate,
        arrivalDate,
      };
      transports.push(transport);
      return transport;
    },

    deleteTransport: (_: any, { id }: { id: string }) => {
      const index = transports.findIndex((t) => t.id === id);
      if (index === -1) {
        return false;
      }
      transports.splice(index, 1);
      // Remove transport assignment from attendees
      attendees.forEach((a) => {
        if (a.transportId === id) {
          delete a.transportId;
        }
      });
      return true;
    },

    assignTransportToAttendee: (
      _: any,
      { attendeeId, transportId }: { attendeeId: string; transportId: string }
    ) => {
      const attendee = attendees.find((a) => a.id === attendeeId);
      if (!attendee) {
        throw new Error(`Attendee with id ${attendeeId} not found`);
      }
      const transport = transports.find((t) => t.id === transportId);
      if (!transport) {
        throw new Error(`Transport with id ${transportId} not found`);
      }
      attendee.transportId = transportId;
      return attendee;
    },

    unassignTransportFromAttendee: (_: any, { attendeeId }: { attendeeId: string }) => {
      const attendee = attendees.find((a) => a.id === attendeeId);
      if (!attendee) {
        throw new Error(`Attendee with id ${attendeeId} not found`);
      }
      delete attendee.transportId;
      return attendee;
    },

    createAccommodation: (
      _: any,
      {
        name,
        address,
        checkIn,
        checkOut,
      }: {
        name: string;
        address: string;
        checkIn: string;
        checkOut: string;
      }
    ) => {
      const accommodation: Accommodation = {
        id: String(incrementAccommodationIdCounter()),
        name,
        address,
        checkIn,
        checkOut,
      };
      accommodations.push(accommodation);
      return accommodation;
    },

    deleteAccommodation: (_: any, { id }: { id: string }) => {
      const index = accommodations.findIndex((a) => a.id === id);
      if (index === -1) {
        return false;
      }
      accommodations.splice(index, 1);
      // Remove accommodation assignment from attendees
      attendees.forEach((a) => {
        if (a.accommodationId === id) {
          delete a.accommodationId;
        }
      });
      return true;
    },

    assignAccommodationToAttendee: (
      _: any,
      {
        attendeeId,
        accommodationId,
      }: { attendeeId: string; accommodationId: string }
    ) => {
      const attendee = attendees.find((a) => a.id === attendeeId);
      if (!attendee) {
        throw new Error(`Attendee with id ${attendeeId} not found`);
      }
      const accommodation = accommodations.find((a) => a.id === accommodationId);
      if (!accommodation) {
        throw new Error(`Accommodation with id ${accommodationId} not found`);
      }
      attendee.accommodationId = accommodationId;
      return attendee;
    },

    unassignAccommodationFromAttendee: (
      _: any,
      { attendeeId }: { attendeeId: string }
    ) => {
      const attendee = attendees.find((a) => a.id === attendeeId);
      if (!attendee) {
        throw new Error(`Attendee with id ${attendeeId} not found`);
      }
      delete attendee.accommodationId;
      return attendee;
    },
  },

  // Field resolvers for relations
  Attendee: {
    user: (attendee: Attendee) => users.find((u) => u.id === attendee.userId)!,
    meeting: (attendee: Attendee) =>
      meetings.find((m) => m.id === attendee.meetingId)!,
    transport: (attendee: Attendee) =>
      attendee.transportId
        ? transports.find((t) => t.id === attendee.transportId)
        : null,
    accommodation: (attendee: Attendee) =>
      attendee.accommodationId
        ? accommodations.find((a) => a.id === attendee.accommodationId)
        : null,
  },

  Meeting: {
    attendees: (meeting: Meeting) =>
      attendees.filter((a) => a.meetingId === meeting.id),
  },
};
