import { gql } from '@apollo/client'

export const GET_HANDS = gql`
  query GetAllHands {
    hands {
      id
      user_id
      title
      content
      created_at
      actions(order_by: { street: asc, order: asc }) {
        id
        street
        position
        move
        size
        order
      }
    }
  }
`
export const GET_HANDS_LOCAL = gql`
  query GetAllHands {
    hands @client {
      id
      user_id
      title
      content
      created_at
      actions(order_by: { street: asc, order: asc }) {
        id
        street
        position
        move
        size
        order
      }
    }
  }
`

export const GET_HAND_IDS = gql`
  query GetAllHandIDs {
    hands {
      id
    }
  }
`

export const GET_HAND_BY_ID = gql`
  query GetHandByID($id: uuid!) {
    hands_by_pk(id: $id) {
      id
      user_id
      title
      content
      created_at
      actions(order_by: { street: asc, order: asc }) {
        id
        street
        position
        move
        size
        order
      }
    }
  }
`

export const CREATE_HANDS = gql`
  mutation CreateHands($title: String!, $content: String!, $user_id: String!) {
    insert_hands_one(
      object: { title: $title, content: $content, user_id: $user_id }
    ) {
      id
      title
      content
      created_at
      user_id
    }
  }
`

export const UPDATE_HANDS = gql`
  mutation UpdateHands($id: uuid!, $title: String!, $content: String!) {
    update_hands_by_pk(
      pk_columns: { id: $id }
      _set: { title: $title, content: $content }
    ) {
      id
      title
      content
      user_id
      created_at
    }
  }
`

export const DELETE_HANDS = gql`
  mutation DeleteHands($id: uuid!) {
    delete_hands_by_pk(id: $id) {
      id
      title
      content
      user_id
      created_at
    }
  }
`
