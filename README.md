
## ポーカー研究ノート(仮)
https://hand-review-apollo-jaek2bojk-nebular-lab.vercel.app

No Limit Hold'em(ポーカーの一種)の研究のためのノートアプリ

Qiitaのように記事(ハンドレビュー)を書いて投稿して公開することが出来る

<img width="500" alt="image" src="https://user-images.githubusercontent.com/78769350/191332765-3ff46654-403c-40d3-bbcc-7b74d9b6811e.png">


https://user-images.githubusercontent.com/78769350/191333974-4d7803d1-8cc0-468c-812d-7954c0ceecd9.mov

## コンセプト
- きれいなUIでハンドレビューを整理したい
- ハンドレビューを隠さずオープンにして欲しい。
- 4色のトランプやハンドレンジ表(「GTOwizard」より引用)など、ポーカー特有の機能が付いたエディターが欲しい。

<img width="200" alt="image" src="https://user-images.githubusercontent.com/78769350/191332126-cf0a88d1-b8ce-4b21-a005-21d0970fc7a0.png">
<img width="200" alt="image" src="https://user-images.githubusercontent.com/78769350/191331820-c413c820-8c4e-4e64-81f9-947d06c2af2a.png">

## 実装中の機能
- カードやアクションへの色付け
- ユーザー認証(NextAuth)＋ハンドレビューの公開範囲設定
- ハンドのラベリング＋検索機能

## 構想中の機能
- ハンドレンジへの色塗り
- ハンドヒストリーのコピー&ペーストでの登録
- WizardやPT4などの外部ツールとの連携
- 有料記事投稿機能(決済機能)

## 使用技術

フロントエンド
- React/Nextjs
- TypeScript
- tailwindCSS
- MantineUI 
- recoil
- ApolloClient

バックエンド
- HasuraCloud
- GraphQL

デプロイ
- Vercel
- Heroku

## 工夫した点
- 編集画面のUI

 アクションタグのダブルクリックでの削除やアクションの種類によって色を変えた点は私のオリジナル。「使いやすいUI」はこれからもっと追求していきたいテーマである。
- ユーザーへのヒヤリング調査

 実装して欲しい機能や、現状の修正して欲しい点など、定期的に数名から意見をもとに開発の方針を決めている。自分には無い視点に気がつけるので、フロントエンド開発やデザイン設計において、ユーザーの意見は重要だと実感した。
 
 ## 苦労した点
 - Reactの状態管理ライブラリの技術選定
 
 候補として、recoil、ApolloClient、Redux、ReactQueryなどがある。最初はGraphQLと相性が良いためApolloClientを使っていたが、まだ解決されていないBugが見つかり、サーバーサイドの状態管理をApollo、クライアントサイドの状態管理をrecoilにすることに決めた。かなり開発が進んでいた段階でバグが見つかったので、バグを回避する方法を探すか、別のライブラリを使うかの判断が難しかった。
 - 保守性の高いコード
 
 開発を進める中で、デザインやDBの修正をすることが思っていたよりもたくさんあった。修正しやすいように、ロジックと見た目で関心を分離したり、設計方針を予め決めておいたりすることが必要だと感じた。また、バグが発生したときに早急に治せるようにテストの実装をすべきだと思った。(AtomicDesgin、storybook、Jest,react-testing-library)
 

