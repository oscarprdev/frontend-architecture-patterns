/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Accommodation = {
  __typename?: 'Accommodation';
  address: Scalars['String']['output'];
  checkIn: Scalars['String']['output'];
  checkOut: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Attendee = {
  __typename?: 'Attendee';
  accommodation?: Maybe<Accommodation>;
  id: Scalars['ID']['output'];
  meeting: Meeting;
  meetingId: Scalars['ID']['output'];
  transport?: Maybe<Transport>;
  user: User;
  userId: Scalars['ID']['output'];
};

export type Meeting = {
  __typename?: 'Meeting';
  attendees: Array<Attendee>;
  date: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  location: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addAttendeeToMeeting: Attendee;
  assignAccommodationToAttendee: Attendee;
  assignTransportToAttendee: Attendee;
  createAccommodation: Accommodation;
  createMeeting: Meeting;
  createTransport: Transport;
  createUser: User;
  deleteAccommodation: Scalars['Boolean']['output'];
  deleteMeeting: Scalars['Boolean']['output'];
  deleteTransport: Scalars['Boolean']['output'];
  deleteUser: Scalars['Boolean']['output'];
  removeAttendeeFromMeeting: Scalars['Boolean']['output'];
  unassignAccommodationFromAttendee: Attendee;
  unassignTransportFromAttendee: Attendee;
};


export type MutationAddAttendeeToMeetingArgs = {
  meetingId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationAssignAccommodationToAttendeeArgs = {
  accommodationId: Scalars['ID']['input'];
  attendeeId: Scalars['ID']['input'];
};


export type MutationAssignTransportToAttendeeArgs = {
  attendeeId: Scalars['ID']['input'];
  transportId: Scalars['ID']['input'];
};


export type MutationCreateAccommodationArgs = {
  address: Scalars['String']['input'];
  checkIn: Scalars['String']['input'];
  checkOut: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateMeetingArgs = {
  date: Scalars['String']['input'];
  location: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type MutationCreateTransportArgs = {
  arrivalDate: Scalars['String']['input'];
  departureDate: Scalars['String']['input'];
  from: Scalars['String']['input'];
  to: Scalars['String']['input'];
  type: TransportType;
};


export type MutationCreateUserArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationDeleteAccommodationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMeetingArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTransportArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveAttendeeFromMeetingArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUnassignAccommodationFromAttendeeArgs = {
  attendeeId: Scalars['ID']['input'];
};


export type MutationUnassignTransportFromAttendeeArgs = {
  attendeeId: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  accommodation?: Maybe<Accommodation>;
  accommodations: Array<Accommodation>;
  attendee?: Maybe<Attendee>;
  attendees: Array<Attendee>;
  meeting?: Maybe<Meeting>;
  meetings: Array<Meeting>;
  transport?: Maybe<Transport>;
  transports: Array<Transport>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAccommodationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAttendeeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMeetingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTransportArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};

export type Transport = {
  __typename?: 'Transport';
  arrivalDate: Scalars['String']['output'];
  departureDate: Scalars['String']['output'];
  from: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  to: Scalars['String']['output'];
  type: TransportType;
};

export enum TransportType {
  Bus = 'BUS',
  Car = 'CAR',
  Flight = 'FLIGHT',
  Train = 'TRAIN'
}

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type GetAttendeesByMeetingQueryVariables = Exact<{
  meetingId: Scalars['ID']['input'];
}>;


export type GetAttendeesByMeetingQuery = { __typename?: 'Query', meeting?: { __typename?: 'Meeting', attendees: Array<{ __typename?: 'Attendee', id: string, userId: string, meetingId: string, user: { __typename?: 'User', name: string, email: string }, accommodation?: { __typename?: 'Accommodation', id: string, name: string, address: string, checkIn: string, checkOut: string } | null }> } | null };


export const GetAttendeesByMeetingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAttendeesByMeeting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"meetingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meeting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"meetingId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"meetingId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accommodation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"checkIn"}},{"kind":"Field","name":{"kind":"Name","value":"checkOut"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAttendeesByMeetingQuery, GetAttendeesByMeetingQueryVariables>;