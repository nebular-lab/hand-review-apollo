// export const getStaticPaths: GetStaticPaths = async () => {
//   const apolloClient = initializeApollo()
//   const { data } = await apolloClient.query<GetAllHandIDsQuery>({
//     query: GET_HAND_IDS,
//   })
//   console.log('getStaticPaths', data.hands)
//   const paths = data.hands.map((hand) => ({
//     params: {
//       id: hand.id,
//     },
//   }))
//   return {
//     paths,
//     fallback: true,
//   }
// }

import Edit from "components/Pages/hands/[id]/Edit"

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const apolloClient = initializeApollo()
//   if (params && params.id) {
//     const { data } = await apolloClient.query<GetHandByIdQuery>({
//       query: GET_HAND_BY_ID,
//       variables: { id: params.id },
//     })
//     return {
//       props: {
//         hand: data.hands_by_pk,
//       },
//       revalidate: 1,
//     }
//   }
//   return { props: { hand: 1 } }
// }

const EditPage = () => {
  return <Edit />
}

export default EditPage
