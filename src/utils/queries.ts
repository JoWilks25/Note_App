import { gql } from '@apollo/client';

export const GET_NOTES = gql`
  query GetNotes {
    notes(
      distinct_on: [id],
      limit: 100,
      offset: 0,
      order_by: [{id: desc}],
      where: {}
    ){
      id
      text
    }
  }
`;

interface AddNote {
  text: string;
}

export const ADD_NOTE = gql`
  mutation AddNote (
    $text: String!
  ) {
  insert_notes_one(
      object: { text: $text },
      on_conflict: { constraint: notes_pkey }
    ) {
      id
      text
    }
  }
`