import { useReactiveVar } from '@apollo/client'
import type { NextPage } from 'next'
import { Button, Text } from '@mantine/core'
import { Layout } from 'components/template/Layout'
import { NextLink } from '@mantine/next'

const Home: NextPage = () => {
  return (
    <Layout title="home">
      <div className="flex flex-col gap-4">
        <div className="text-5xl">ハンドレビュー研究所にようこそ</div>
        <div className="text-2xl">
          ハンドレビュー研究所(仮)はハンドレビューのときに感じる煩わしさを解消し、
          <span className="font-bold">「効率的に」「気持ちよく」</span>
          行うためのツールです。
          <br />
          普段のハンドレビューに使うも良し、投稿された他の人のハンドレビューを見て勉強するも良しです。
          実装予定の機能は以下の通りです。
        </div>
        <div className="text-2xl mt-4">実装中</div>
        <ul className="text-2xl mt-3">
          <li>カードやアクションへの色付け</li>
          <li>ユーザー認証＋ハンドレビューの公開範囲設定</li>
          <li>ハンドのラベリング＋検索機能</li>
        </ul>
        <div className="text-2xl">構想中</div>
        <ul className="text-2xl">
          <li>ハンドレンジへの色塗り</li>
          <li>ハンドヒストリーのコピー&ペーストでの登録</li>
          <li>WizardやPT4との連携</li>
        </ul>
        <Button
          component={NextLink}
          className="text-2xl mx-56 h-16 bg-blue-600 rounded-md shadow-md"
          href="/hands"
        >
          ハンド集へ
        </Button>
      </div>
    </Layout>
  )
}

export default Home
