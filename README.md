
## ハンドレビュー研究所(仮)
https://hand-review-apollo-jaek2bojk-nebular-lab.vercel.app

No Limit Hold'em(ポーカーの一種)の復習のためのノートアプリ

<img width="500" alt="image" src="https://user-images.githubusercontent.com/78769350/191332765-3ff46654-403c-40d3-bbcc-7b74d9b6811e.png">


https://user-images.githubusercontent.com/78769350/191333974-4d7803d1-8cc0-468c-812d-7954c0ceecd9.mov

## コンセプト
- 4色のトランプやハンドレンジ表(「GTOwizard」より引用)など、ポーカー特有の機能が付いたエディターが欲しい。
- きれいなUIでハンドレビューを整理したい
- ハンドレビューをより

<img width="200" alt="image" src="https://user-images.githubusercontent.com/78769350/191332126-cf0a88d1-b8ce-4b21-a005-21d0970fc7a0.png">

<img width="200" alt="image" src="https://user-images.githubusercontent.com/78769350/191331820-c413c820-8c4e-4e64-81f9-947d06c2af2a.png">

## 実装中の機能
- カードやアクションへの色付け
- ユーザー認証＋ハンドレビューの公開範囲設定
- ハンドのラベリング＋検索機能

## 構想中の機能
- ハンドレンジへの色塗り
- ハンドヒストリーのコピー&ペーストでの登録
- WizardやPT4などの外部ツールとの連携

## 使用技術

フロントエンド
- React/Nextjs
- TypeScript
- tailwindCSS
- MantineUI 
- recoil

バックエンド
- HasuraCloud
- GraphQL

デプロイ
- Vercel
- Heroku

## 工夫した点
- 編集画面のUI
 ダブルクリックでの削除やアクションに色を付けた点は私のオリジナル。「使いやすいUI」はこれからもっと追求していきたいテーマ。
- ユーザーへのヒヤリング調査
 実装して欲しい機能や、現状の修正して欲しい点など、定期的に数名から意見をもらっている。
 
## 現時点では出来ていないが将来的に取り入れたい点
- 保守性の高いコード＋テストの実装 (AtomicDesgin、storybook、Jest,react-testing-library)
- 

