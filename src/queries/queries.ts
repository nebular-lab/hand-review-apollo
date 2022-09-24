// import { gql } from '@apollo/client'
export{}
// export const GET_HANDS = gql`
//   query GetAllHands {
//     hands {
//       id
//       title
//       content
//       es
//       user_id
//       created_at
//       updated_at
//       street_infos {
//         id
//         hand_id
//         street
//         created_at
//         updated_at
//         actions {
//           id
//           street_info_id
//           position
//           move
//           size
//           order
//           created_at
//           updated_at
//         }
//       }
//       hands_cards(order_by: { order: asc }) {
//         card {
//           id
//           num
//           mark
//         }
//         order
//       }
//       pots {
//         id
//         hand_id
//         size
//         street
//       }
//     }
//   }
// `
// // export const GET_HANDS_LOCAL = gql`
// //   query GetAllHands {
// //     hands @client {
// //       id
// //       title
// //       content
// //       es
// //       user_id
// //       created_at
// //       updated_at
// //       street_infos {
// //         id
// //         hand_id
// //         street
// //         created_at
// //         updated_at
// //         actions {
// //           id
// //           street_info_id
// //           position
// //           move
// //           size
// //           order
// //           created_at
// //           updated_at
// //         }
// //       }
// //       hands_cards(order_by: { order: asc }) {
// //         card {
// //           id
// //           num
// //           mark
// //         }
// //         order
// //       }
// //       pots {
// //         id
// //         hand_id
// //         size
// //         street
// //       }
// //     }
// //   }
// // `

// export const GET_HAND_IDS = gql`
//   query GetAllHandIDs {
//     hands {
//       id
//     }
//   }
// `

// export const GET_HAND_BY_ID = gql`
//   query GetHandByID($id: uuid!) {
//     hands_by_pk(id: $id) {
//       id
//       title
//       content
//       es
//       user_id
//       created_at
//       updated_at
//       street_infos {
//         id
//         hand_id
//         street
//         created_at
//         updated_at
//         actions {
//           id
//           street_info_id
//           position
//           move
//           size
//           order
//           created_at
//           updated_at
//         }
//       }
//       hands_cards(order_by: { order: asc }) {
//         card {
//           id
//           num
//           mark
//         }
//         order
//       }
//       pots {
//         id
//         hand_id
//         size
//         street
//       }
//     }
//   }
// `

// // export const GET_HAND_BY_ID_LOCAL = gql`
// //   query GetHandByID($id: uuid!) {
// //     hands_by_pk(id: $id) @client {
// //       id
// //       title
// //       content
// //       es
// //       user_id
// //       created_at
// //       updated_at
// //       street_infos {
// //         id
// //         hand_id
// //         street
// //         created_at
// //         updated_at
// //         actions {
// //           id
// //           street_info_id
// //           position
// //           move
// //           size
// //           order
// //           created_at
// //           updated_at
// //         }
// //       }
// //       hands_cards(order_by: { order: asc }) {
// //         card {
// //           id
// //           num
// //           mark
// //         }
// //         order
// //       }
// //       pots {
// //         id
// //         hand_id
// //         size
// //         street
// //       }
// //     }
// //   }
// // `

// // export const CREATE_HANDS = gql`
// //   mutation CreateHands ($title:String!,$content:String!,$user_id:String,$es:Float!){
// //     insert_hands_one(
// //       object: {
// //         title: "title4"
// //         content: "content4"
// //         user_id: "user_4"
// //         es: 100
// //         pots: {
// //           data: [
// //             { size: 15, street: 0 }
// //             { size: 30, street: 1 }
// //             { size: 0, street: 2 }
// //           ]
// //           on_conflict: {
// //             constraint: pots_hand_id_street_key
// //             update_columns: [size, street]
// //           }
// //         }
// //         hands_cards: {
// //           data: [
// //             {
// //               card: {
// //                 data: { mark: "c", num: "9" }
// //                 on_conflict: {
// //                   constraint: cards_num_mark_key
// //                   update_columns: [mark, num]
// //                 }
// //               }
// //               order: 0
// //             }
// //             {
// //               card: {
// //                 data: { mark: "c", num: "9" }
// //                 on_conflict: {
// //                   constraint: cards_num_mark_key
// //                   update_columns: [mark, num]
// //                 }
// //               }
// //               order: 1
// //             }
// //             {
// //               card: {
// //                 data: { mark: "d", num: "9" }
// //                 on_conflict: {
// //                   constraint: cards_num_mark_key
// //                   update_columns: [mark, num]
// //                 }
// //               }
// //               order: 2
// //             }
// //             {
// //               card: {
// //                 data: { mark: "", num: "9" }
// //                 on_conflict: {
// //                   constraint: cards_num_mark_key
// //                   update_columns: [mark, num]
// //                 }
// //               }
// //               order: 3
// //             }
// //             {
// //               card: {
// //                 data: { mark: "d", num: "T" }
// //                 on_conflict: {
// //                   constraint: cards_num_mark_key
// //                   update_columns: [mark, num]
// //                 }
// //               }
// //               order: 4
// //             }
// //           ]
// //           on_conflict: {
// //             constraint: hands_cards_hand_id_card_id_order_key
// //             update_columns: order
// //           }
// //         }
// //       }
// //     ) {
// //       id
// //       title
// //       content
// //       es
// //       user_id
// //       created_at
// //       updated_at
// //       street_infos {
// //         id
// //         hand_id
// //         street
// //         created_at
// //         updated_at
// //         actions {
// //           id
// //           street_info_id
// //           position
// //           move
// //           size
// //           order
// //           created_at
// //           updated_at
// //         }
// //       }
// //       hands_cards(order_by: { order: asc }) {
// //         card {
// //           id
// //           num
// //           mark
// //         }
// //         order
// //       }
// //       pots {
// //         id
// //         hand_id
// //         size
// //         street
// //       }
// //     }
// //   }
// // `

// // export const UPDATE_HANDS = gql`
// //   mutation UpdateHands($id: uuid!, $title: String!, $content: String!) {
// //     update_hands_by_pk(
// //       pk_columns: { id: $id }
// //       _set: { title: $title, content: $content }
// //     ) {
// //       id
// //       title
// //       content
// //       user_id
// //       created_at
// //     }
// //   }
// // `

// // export const DELETE_HANDS = gql`
// //   mutation DeleteHands($id: uuid!) {
// //     delete_hands_by_pk(id: $id) {
// //       id
// //       title
// //       content
// //       user_id
// //       created_at
// //     }
// //   }
// // `
