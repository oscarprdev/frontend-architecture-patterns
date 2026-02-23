/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

type Documents = {
  "query GetAttendeeById($attendeeId: ID!) {\n  attendee(id: $attendeeId) {\n    id\n    userId\n    meetingId\n    user {\n      name\n      email\n    }\n    transport {\n      id\n      type\n      from\n      to\n      departureDate\n      arrivalDate\n    }\n    accommodation {\n      id\n      name\n      address\n      checkIn\n      checkOut\n    }\n  }\n}": typeof types.GetAttendeeByIdDocument,
};

const documents: Documents = {
  "query GetAttendeeById($attendeeId: ID!) {\n  attendee(id: $attendeeId) {\n    id\n    userId\n    meetingId\n    user {\n      name\n      email\n    }\n    transport {\n      id\n      type\n      from\n      to\n      departureDate\n      arrivalDate\n    }\n    accommodation {\n      id\n      name\n      address\n      checkIn\n      checkOut\n    }\n  }\n}": types.GetAttendeeByIdDocument,
};

export function graphql(source: string): unknown;

export function graphql(source: "query GetAttendeeById($attendeeId: ID!) {\n  attendee(id: $attendeeId) {\n    id\n    userId\n    meetingId\n    user {\n      name\n      email\n    }\n    transport {\n      id\n      type\n      from\n      to\n      departureDate\n      arrivalDate\n    }\n    accommodation {\n      id\n      name\n      address\n      checkIn\n      checkOut\n    }\n  }\n}"): (typeof documents)["query GetAttendeeById($attendeeId: ID!) {\n  attendee(id: $attendeeId) {\n    id\n    userId\n    meetingId\n    user {\n      name\n      email\n    }\n    transport {\n      id\n      type\n      from\n      to\n      departureDate\n      arrivalDate\n    }\n    accommodation {\n      id\n      name\n      address\n      checkIn\n      checkOut\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
