# ディレクトリ構成

```
src
├─ components
│ ├─ pages     : 1つのページを表すComponent。page.tsxファイルをsrc/pagesでルーティングする
│ ├─ features  : 各機能に関心を持つComponent(例えばuser, article, category...のようなやつ)
│ ├─ ui        : featureに関心を持たない、見た目を伴うComponent(Buttonとか)
│ └─ layouts   : uiのうちページを横断するグローバル系のComponent(headerとか）
├─ configs
├─ hooks       : 複数のComponentで共有したいような汎用的な処理
├─ libs        : プロジェクトに依存しないライブラリ実装
└─ pages       : ルーティングのみの責務。nextjsの機能で配置するだけでルーティングしてくれる。ディレクトリ構成がそのままパスになる。
└─ styles      : globalなスタイリング定義

```

# コンポーネントの依存ルール

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
hoge/
├─ hoge.tsx
├─ hoge.css.ts
├─ hoge.hooks.ts … 複数のComponentで共有しないロジック(ロジックはできるだけコンポーネントに書かない)
└─ index.ts
※ components/pages配下のみ `hoge.page.tsx`がある
```

# 命名規則

ソース

-   https://github.com/kettanaito/naming-cheatsheet
    ディレクトリ名・ファイル名
-   pages ファイルがケバブ必須なので全てケバブケースとする（コンポーネントファイルはパスカルになってる主要 PJ も結構あるので迷ったけど統一する）

# Style

-   [tailwindcss](https://tailwindcss.com/)
    -   大量のクラス名が用意されていてcss網羅してる。用意されたクラス名だけで細かなスタイリングができる。
-   [headlessui/react](https://headlessui.com/)
    -   tailwind でスタイルされたコンポーネントを import して使用できる。複雑なコンポーネントで使用
-   [heroicon](https://zenn.dev/nino_cast/books/43c539eb47caab/viewer/807f3b)
    -   Taiwind ファミリーのアイコンフォント。通常の画像と違い、CSS ベースで色や大きさ、太さを調整することができる
-   [styled-jsx-plugin-postcss](https://www.npmjs.com/package/styled-jsx-plugin-postcss)
    -   jsx ファイルに直接スタイリングかける

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

# その他使用ライブラリの概要

-   [react-error-boundary](https://github.com/bvaughn/react-error-boundary)
    -   [公式ドキュメント](https://ja.reactjs.org/docs/error-boundaries.html)
    -   コンポーネント内で発生した JavaScript エラーをキャッチしフォールバック用の UI を表示
-   [next-seo](https://github.com/garmeeh/next-seo)
    -   Next.js のプロジェクトで SEO 管理を簡単にするためのプラグイン
-   [next/bundle-analyzer](https://fwywd.com/tech/next-bundle-analyzer)
    -   各バンドルサイズを可視化できる
