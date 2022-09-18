export {}
// import { FC, FormEvent, useState } from 'react'
// import Link from 'next/link'
// import { useMutation, useQuery } from '@apollo/client'
// import {
//   CreateHandsMutation,
//   DeleteHandsMutation,
//   GetAllHandsQuery,
//   UpdateHandsMutation,
//   useGetAllHandsQuery,
// } from 'types/generated/graphql'
// import {
//   CREATE_HANDS,
//   DELETE_HANDS,
//   GET_HANDS,
//   UPDATE_HANDS,
// } from 'queries/queries'
// import { useAppMutate } from 'hooks/useAppMutate'

// const Crud: FC = () => {
//   const [editedHand, setEditedHand] = useState({
//     id: '',
//     title: '',
//     content: '',
//     user_id: '',
//   })
//   const { data, error, loading } = useQuery<GetAllHandsQuery>(GET_HANDS, {
//     fetchPolicy: 'cache-and-network',
//   })
//   const { update_hands_by_pk, insert_hands_one, delete_hands_by_pk } =
//     useAppMutate()

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     if (editedHand.id) {
//       try {
//         await update_hands_by_pk({
//           variables: {
//             id: editedHand.id,
//             title: editedHand.title,
//             content: editedHand.content,
//           },
//         })
//       } catch (err) {
//         console.log(err)
//       }
//       setEditedHand({ id: '', title: '', content: '', user_id: '' })
//     } else {
//       try {
//         await insert_hands_one({
//           variables: {
//             title: editedHand.title,
//             content: editedHand.content,
//             user_id: editedHand.user_id,
//           },
//         })
//       } catch (err) {
//         console.log(err)
//       }
//       setEditedHand({ id: '', title: '', content: '', user_id: '' })
//     }
//   }

//   if (error) return <p>Error: {error.message}</p>
//   if (loading) return <p>loading</p>
//   return (
//     <div
//       title="Hasura fetchPolicy"
//       className="flex justify-center items-center"
//     >
//       <p className="mb-6 font-bold">Hasura main page</p>

//       {data?.hands.map((hand, index) => {
//         return (
//           <div key={index}>
//             <p>{hand.title}</p>
//             <p>{hand.content}</p>
//             <p>{hand.user_id}</p>
//             {hand.actions.map((action, index) => {
//               return (
//                 <div key={index}>
//                   <p>{action.street}</p>
//                   <p>{action.position}</p>
//                   <p>{action.move}</p>
//                   <p>{action.size}</p>
//                 </div>
//               )
//             })}
//             <form onSubmit={handleSubmit}>
//               タイトル
//               <input
//                 className="border-red-600"
//                 value={editedHand.title}
//                 onChange={(e) =>
//                   setEditedHand({ ...editedHand, title: e.target.value })
//                 }
//               />
//               コンテント
//               <input
//                 className="border-red-600"
//                 value={editedHand.content}
//                 onChange={(e) =>
//                   setEditedHand({ ...editedHand, content: e.target.value })
//                 }
//               />
//               ユーザー
//               <input
//                 className="border-red-600"
//                 value={editedHand.user_id}
//                 onChange={(e) =>
//                   setEditedHand({ ...editedHand, user_id: e.target.value })
//                 }
//               />
//               <button type="submit" className="bg-green-500">
//                 {editedHand.id ? 'update' : 'create'}
//               </button>
//             </form>
//             <form
//               onSubmit={() =>
//                 delete_hands_by_pk({
//                   variables: {
//                     id: hand.id,
//                   },
//                 })
//               }
//             >
//               <button className="bg-blue-600" type="submit">
//                 削除
//               </button>
//             </form>
//           </div>
//         )
//       })}
//       <Link href="/hasura-sub">
//         <a className="mt-6">Next</a>
//       </Link>
//     </div>
//   )
// }
// export default Crud
