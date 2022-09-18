import { gql } from '@apollo/client'

export const GET_HANDS = gql`
  query GetAllHands {
    hands {
      id
      title
      content
      user_id
      created_at
      updated_at
      street_infos(order_by: { street: asc }) {
        id
        hand_id
        street
        es
        stack
        created_at
        updated_at
        actions(order_by: { order: asc }) {
          id
          street_info_id
          position
          move
          size
          order
          created_at
          updated_at
        }
        street_info_cards {
          card {
            id
            mark
            num
          }
        }
      }
    }
  }
`
export const GET_HANDS_LOCAL = gql`
  query GetAllHands {
    hands @client {
      id
      title
      content
      user_id
      created_at
      updated_at
      street_infos(order_by: { street: asc }) {
        id
        hand_id
        street
        es
        stack
        created_at
        updated_at
        actions(order_by: { order: asc }) {
          id
          street_info_id
          position
          move
          size
          order
          created_at
          updated_at
        }
        street_info_cards {
          card {
            id
            mark
            num
          }
        }
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
      title
      content
      user_id
      created_at
      updated_at
      street_infos(order_by: { street: asc }) {
        id
        hand_id
        street
        es
        stack
        created_at
        updated_at
        actions(order_by: { order: asc }) {
          id
          street_info_id
          position
          move
          size
          order
          created_at
          updated_at
        }
        street_info_cards {
          card {
            id
            mark
            num
          }
        }
      }
    }
  }
`

export const GET_HAND_BY_ID_LOCAL = gql`
  query GetHandByID($id: uuid!) {
    hands_by_pk(id: $id) @client {
      id
      title
      content
      user_id
      created_at
      updated_at
      street_infos(order_by: { street: asc }) {
        id
        hand_id
        street
        es
        stack
        created_at
        updated_at
        actions(order_by: { order: asc }) {
          id
          street_info_id
          position
          move
          size
          order
          created_at
          updated_at
        }
        street_info_cards {
          card {
            id
            mark
            num
          }
        }
      }
    }
  }
`

// export const CREATE_HANDS = gql`
//   mutation CreateHands($title: String!, $content: String!, $user_id: String!) {
//     insert_hands_one(
//       object: { title: $title, content: $content, user_id: $user_id }
//     ) {
//       id
//       title
//       content
//       created_at
//       user_id
//     }
//   }
// `

// export const UPDATE_HANDS = gql`
//   mutation UpdateHands($id: uuid!, $title: String!, $content: String!) {
//     update_hands_by_pk(
//       pk_columns: { id: $id }
//       _set: { title: $title, content: $content }
//     ) {
//       id
//       title
//       content
//       user_id
//       created_at
//     }
//   }
// `

// export const DELETE_HANDS = gql`
//   mutation DeleteHands($id: uuid!) {
//     delete_hands_by_pk(id: $id) {
//       id
//       title
//       content
//       user_id
//       created_at
//     }
//   }
// `
