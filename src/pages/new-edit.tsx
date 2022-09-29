import { Button, Space, TextInput } from '@mantine/core'
import { NextLink } from '@mantine/next'
import DraftJSEditor from 'components/molecule/DraftJSEditor'
import ActionTable from 'components/organism/ActionTable'
import { Layout } from 'components/template/Layout'
import Router, { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRecoilState } from 'recoil'
import {
  editingActionsState,
  editingCardsState,
  editingContentState,
  editingESState,
  editingPotState,
  editingReviewState,
  editingTitleState,
  isDataState,
} from 'store/stores'
import {
  Actions_Insert_Input,
  Cards_Constraint,
  Cards_Update_Column,
  Hands_Cards_Constraint,
  Hands_Cards_Insert_Input,
  Hands_Cards_Update_Column,
  Hands_Constraint,
  Hands_Update_Column,
  Pots_Constraint,
  Pots_Update_Column,
  useCreateHandsMutation,
} from 'types/generated/graphql'

const NewEdit = () => {
  const { data: session, status } = useSession()
  const [editingReview, setEditingReview] = useRecoilState(editingReviewState)
  const [editingActions, setEditingActions] =
    useRecoilState(editingActionsState)
  const [editingCards, setEditingCards] = useRecoilState(editingCardsState)
  const [editingES, setEditingES] = useRecoilState(editingESState)
  const [editingPot, setEditingPot] = useRecoilState(editingPotState)
  const [editingTitle, setEditingTitle] = useRecoilState(editingTitleState)
  const [editingContent, setEditingContent] =
    useRecoilState(editingContentState)
  const [isData, setIsData] = useRecoilState(isDataState)
  useEffect(() => {
    setEditingActions([[], [], [], []])
    setEditingCards([
      { num: 'w', mark: 'w' },
      { num: 'w', mark: 'w' },
      { num: 'w', mark: 'w' },
      { num: 'w', mark: 'w' },
      { num: 'w', mark: 'w' },
    ])
    setEditingES(100)
    setEditingPot([0, 0, 0])
    setEditingTitle('')
    setEditingContent('')
    setIsData(true)
  }, [])

  const [createHandsMutation] = useCreateHandsMutation()
  const router = useRouter()
  const onClickSave = () => {
    console.log(editingCards)
    console.log(editingActions)
    const actionList: Actions_Insert_Input[] = []
    editingActions.forEach((street) => {
      street.forEach((action) => {
        actionList.push({
          position: action.position,
          move: action.move,
          size: action.size,
          order: action.order,
          street: action.street,
        })
      })
    })
    const cardList: Hands_Cards_Insert_Input[] = []
    editingCards.forEach((card, index) => {
      cardList.push({
        card: {
          data: {
            mark: card.mark,
            num: card.num,
          },
          on_conflict: {
            constraint: Cards_Constraint.CardsNumMarkKey,
            update_columns: [Cards_Update_Column.Mark, Cards_Update_Column.Num],
          },
        },
        order: index,
      })
    })

    createHandsMutation({
      variables: {
        object: {
          title: editingTitle,
          es: editingES,
          content: editingContent,
          // user_id: session?.user?.id,
          pots: {
            data: [
              { size: editingPot[0], street: 0 },
              { size: editingPot[1], street: 1 },
              { size: editingPot[2], street: 2 },
            ],
            on_conflict: {
              constraint: Pots_Constraint.PotsHandIdStreetKey,
              update_columns: [
                Pots_Update_Column.Size,
                Pots_Update_Column.Street,
              ],
            },
          },
          actions: {
            data: actionList,
          },
          hands_cards: {
            data: cardList,
            on_conflict: {
              constraint: Hands_Cards_Constraint.HandsCardsHandIdCardIdOrderKey,
              update_columns: [Hands_Cards_Update_Column.Order],
            },
          },
        },
        on_conflict: {
          constraint: Hands_Constraint.HandsPkey,
          update_columns: [
            Hands_Update_Column.Id,
            Hands_Update_Column.Es,
            Hands_Update_Column.Content,
            Hands_Update_Column.Title,
            Hands_Update_Column.UserId,
          ],
        },
      },
    }).then(() => {
      router.push('/hands')
    })
  }
  return (
    <Layout title="編集">
      <div className=" flex flex-col">
        <div>
          <div className="flex justify-between mx-3">
            <TextInput
              placeholder="タイトルを入力してください"
              value={editingTitle}
              className="w-[50%]"
              onChange={(e) => setEditingTitle(e.target.value)}
            />
            <Button onClick={onClickSave}>保存</Button>
          </div>
          <ActionTable canEdit={true} />
          <Space h="md" />
          <DraftJSEditor />
          {/* <p>{hand?.hands_by_pk?.content}</p> */}
        </div>
      </div>
    </Layout>
  )
}

export default NewEdit
