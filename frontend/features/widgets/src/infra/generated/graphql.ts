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
  meetingId: Scalars['ID']['output'];
  transport?: Maybe<Transport>;
  user: User;
  userId: Scalars['ID']['output'];
};

export type Query = {
  __typename?: 'Query';
  attendee?: Maybe<Attendee>;
};

export type QueryAttendeeArgs = {
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

export type GetAttendeeByIdQueryVariables = Exact<{
  attendeeId: Scalars['ID']['input'];
}>;

export type GetAttendeeByIdQuery = {
  __typename?: 'Query';
  attendee?: {
    __typename?: 'Attendee';
    id: string;
    userId: string;
    meetingId: string;
    user: { __typename?: 'User'; name: string; email: string };
    transport?: {
      __typename?: 'Transport';
      id: string;
      type: TransportType;
      from: string;
      to: string;
      departureDate: string;
      arrivalDate: string;
    } | null;
    accommodation?: {
      __typename?: 'Accommodation';
      id: string;
      name: string;
      address: string;
      checkIn: string;
      checkOut: string;
    } | null;
  } | null;
};

export const GetAttendeeByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAttendeeById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attendeeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attendee"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attendeeId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"meetingId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transport"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}},{"kind":"Field","name":{"kind":"Name","value":"departureDate"}},{"kind":"Field","name":{"kind":"Name","value":"arrivalDate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accommodation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"checkIn"}},{"kind":"Field","name":{"kind":"Name","value":"checkOut"}}]}}]}}]}}]} as unknown as DocumentNode<GetAttendeeByIdQuery, GetAttendeeByIdQueryVariables>;
