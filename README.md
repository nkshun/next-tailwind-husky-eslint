# ディレクトリ構成

```
src
├─ components
│ ├─ pages     : 1つのページを表すComponent
│ ├─ features  : 各機能に関心を持つComponent(例えばuser, article, category...のようなやつ)
│ ├─ ui        : featureに関心を持たない、見た目を伴うComponent(Buttonとか)
│ └─ layouts   : uiのうちページを横断するグローバル系のComponent(headerとか）
├─ hooks       : 複数のComponentで共有したいような汎用的な処理
├─ libs        : プロジェクトに依存しないライブラリ実装
└─ pages       : ルーティングのみの責務nextjsの機能でルーティングしてくれる。ディレクトリ構成がそのままパスになる。

```

# 依存ルール

```
    page
  ↑     ↑
layout feature
     ↑
     ui
```

-   自分の横か下にある分類軸の Component のみ import してよい。
-   page 以外は自分の所属する分類軸の参照も OK

# Component 構成

```
Hoge/
├─ Hoge.tsx
├─ Hoge.css.ts
├─ Hoge.hooks.ts … 複数のComponentで共有しないロジック(ロジックはできるだけコンポーネントに書かない)
└─ index.ts
```

# 命名規則
ソース
- https://github.com/kettanaito/naming-cheatsheet
ディレクトリ名・ファイル名
- pagesファイルがケバブ必須なので全てケバブケースとする（コンポーネントファイルはパスカルになってる主要PJも結構ある）

# CSS in TS

https://vanilla-extract.style/documentation/styling/

# 参考

-   ディレクトリ構成
    -   https://github.com/unicodeveloper/awesome-nextjs
    -   https://github.com/alan2207/bulletproof-react
    -   https://zenn.dev/yoshiko/articles/99f8047555f700
    -   https://zenn.dev/meijin/articles/bulletproof-react-is-best-architecture
-   各コンポーネントの設計
    -   https://github.com/vercel/commerce/tree/main/site/components
-   vanilla-extract の実装
    -   https://zenn.dev/kimuson/scraps/99d5a85b8db986
    -   https://www.thisdot.co/blog/introduction-to-vanilla-extract-for-css
    -   https://css-tricks.com/css-in-typescript-with-vanilla-extract/

# ライブラリ

-   [react-error-boundary](https://github.com/bvaughn/react-error-boundary)
    -   [公式ドキュメント](https://ja.reactjs.org/docs/error-boundaries.html)
    -   コンポーネント内で発生した JavaScript エラーをキャッチしフォールバック用の UI を表示
-   [next-seo](https://github.com/garmeeh/next-seo)
    -   Next.js のプロジェクトで SEO 管理を簡単にするためのプラグイン
-   [clsx](https://www.npmjs.com/package/clsx)
    -   html のクラス名を動的に設定する
