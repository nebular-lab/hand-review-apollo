export {}
// import { useMutation } from '@apollo/client'
// import { CREATE_HANDS, DELETE_HANDS, UPDATE_HANDS } from 'queries/queries'
// import React, { FC } from 'react'
// import {
//   CreateHandsMutation,
//   DeleteHandsMutation,
//   UpdateHandsMutation,
// } from 'types/generated/graphql'

// export const useAppMutate = () => {
//   const [update_hands_by_pk] = useMutation<UpdateHandsMutation>(UPDATE_HANDS)
//   const [insert_hands_one] = useMutation<CreateHandsMutation>(CREATE_HANDS, {
//     update(cache, { data }) {
//       const insert_hands_one_data = data?.insert_hands_one || false
//       if (insert_hands_one_data) {
//         const cashId = cache.identify(insert_hands_one_data)
//         if (cashId)
//           cache.modify({
//             fields: {
//               hands(existingHands, { toReference }) {
//                 return [toReference(cashId), ...existingHands]
//               },
//             },
//           })
//       }
//     },
//   })

//   const [delete_hands_by_pk] = useMutation<DeleteHandsMutation>(DELETE_HANDS, {
//     update(cache, { data }) {
//       const delete_hand_by_pk_data = data?.delete_hands_by_pk || false
//       if (delete_hand_by_pk_data) {
//         cache.modify({
//           fields: {
//             hands(existingHands, { readField }) {
//               return existingHands.filter(
//                 (hands: any) =>
//                   delete_hand_by_pk_data.id !== readField('id', hands)
//               )
//             },
//           },
//         })
//       }
//     },
//   })
//   return { update_hands_by_pk, insert_hands_one, delete_hands_by_pk }
// }
