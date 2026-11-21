# friegen.github.io

個人で作っているスマホアプリのサイト（GitHub Pages）。https://friegen.github.io/
`main` に push すると、数分で公開される（GitHub Pages の Jekyll でビルド）。このファイルは `_config.yml` の `exclude` で公開しないようにしている。

## 作業の決まり
- ブランチは `main`。PR は作らない（ユーザーが頼んだときだけ）
- コミットメッセージは日本語
- 開発者の名前（ハンドルネーム）は、日本語は「**すとれん**」、英語などそれ以外は「**stren**」。本名は書かない
- **メールアドレスはトップページ・紹介ページに載せない**（ユーザーの指示）
- ユーザーのスクリーンショットに写った個人情報（番号・住所など）を書かない
- 公開されていないアプリ・機能へのリンクは載せない（iOS 版は未公開。下の「片思いチェッカー」）
- 直したら、スマホの幅（390px）で横にはみ出さないこと、ライト・ダークの両方で読めることを確かめる（Playwright で表示してスクリーンショットを撮る）
  - 紹介ページの画像は `loading="lazy"`（見える所まで来たら読み込む）なので、全体のスクリーンショットはスクロールしてから撮る（撮らないと白く写る）
  - ローカルで Jekyll を動かすときは `gem install --install-dir <作業用のフォルダ> jekyll jekyll-sitemap` で入れて `jekyll build -d <出力先>`（`_site/`・`.jekyll-cache/` はコミットしない）

## ファイルの構成
| パス | 内容 |
|---|---|
| `index.html` | トップページ。Jekyll の枠を使わず、このファイルだけで完結（CSS・JavaScript も中に書いてある）。アプリを足すときは `<div class="apps">` の中に `<article class="app">` を1つ足す |
| `_layouts/default.html` | Markdown のページ（プライバシーポリシーなど）の枠。CSS も中に書いた自前の枠（ライト・ダーク対応、上にトップページへのリンク）。標準の枠（Primer）は GitHub のプロフィールの名前を出し、ダークにも対応していないので使わない。`_config.yml` の `defaults` で全部の Markdown のページに使う |
| `_config.yml` | サイトの題名・URL・jekyll-sitemap・公開しないファイル |
| `robots.txt` | すべて許可＋サイトマップの場所。**消さない**（ないと AdMob が app-ads.txt を読めず「robots.txt が原因でクロールできない」になった） |
| `app-ads.txt` | AdMob の確認用（`google.com, pub-6010304246508855, DIRECT, f08c47fec0942fa0`）。**変えない・消さない** |
| `assets/og.jpg` | トップページの og:image（SNS で共有したときに出る画像、1200×630）。元は `tools/og-image/og.html`。作り直すときは `node tools/og-image/render.js top`（Playwright で撮る）。アプリを足したら画像の中のアプリも足す |
| `assets/og/` | プライバシーポリシーのページの og:image。元は `tools/og-image/policy.html`（`?app=` でアプリを選ぶ）、作り直しは `node tools/og-image/render.js`（`render.js` の `JOBS` に一覧がある）。ページの先頭の設定の `image:` で指定し、`_layouts/default.html` が og のタグを出す。iOS 版のページは未公開なので付けていない |
| `tools/` | 公開しない作業用のもの（`_config.yml` の `exclude`） |
| `assets/apps/` | トップページに出すアプリのアイコン（192×192） |
| `irodori-notes/` | いろどりメモの紹介ページ（9言語）とプライバシーポリシー |
| `kataomoi-bluesky/` | 片思いチェッカー for Bluesky のプライバシーポリシー（Android・iOS）と iOS 版のサポート |

### 言語
- トップページ: 日本語と英語の両方を `lang="ja"` / `lang="en"` の要素で書き、表示する方だけ出す。ブラウザの言語が日本語なら日本語、それ以外は英語。右上で切り替えると `localStorage`（`friegen-lang`）に覚える
- いろどりメモの紹介ページ: 言語ごとに別の URL（英語が `/irodori-notes/`、ほかは `ja/`・`es/`・`pt/`・`fr/`・`de/`・`ko/`・`zh-hant/`・`id/`）。英語のページだけ、ブラウザの言語に合うページへ自動で移る（言語を選んだら `irodori-lang` に覚えて移らない）。簡体字中国語は英語のまま

## いろどりメモ（Irodori Notes）の紹介ページ
- **手で直さない**。リポジトリ `friegen/memo_android` の `tools/lp/build.py` が、ストアの説明文（`store/listing/`）とスクリーンショット（`store/screens/`・`store/<lang>/`）から作る。見た目は `tools/lp/style.css`・`main.js`、ボタンなどの決まった文言は `build.py` の `UI`（9言語）
- 作り直し方（memo_android の一番上のフォルダで）: `python3 tools/lp/build.py ../friegen.github.io` → このリポジトリでコミット・push。memo_android の方の変更も memo_android でコミットする
- SNS で共有したときの画像（`irodori-notes/assets/<lang>/og.jpg`、1200×630）の元は、memo_android の `store/<lang>/og_image.png`。`tools/store/compose.py` の `og_image()` が作る（`python3 tools/store/compose.py og` でこの画像だけ作り直せる。フォントは Noto Sans CJK で、場所は環境変数 `NOTO_CJK_DIR` でも指定できる）
- `irodori-notes/privacy-policy.md` は手書き（日本語と英語。英語は `#irodori-notes-privacy-policy`）
- Google Play: https://play.google.com/store/apps/details?id=xyz.friegen.memo
- Google Play のボタンは文字だけ（公式のバッジ画像は使っていない。使うならユーザーに画像をもらって置く）

## 片思いチェッカー for Bluesky（Follower Checker for Bluesky）
- Android 版は公開済み: https://play.google.com/store/apps/details?id=xyz.frigen.bsky.kataomoi （アプリ ID は `frigen`。つづりはこれで正しい）
- **iOS 版は未公開**。`privacy-policy-ios.md`・`support-ios.md` は App Store の審査で使うので置いてあるが、トップページからリンクせず、`sitemap: false` で検索に出していない
  - iOS 版が公開されたら: トップページのカードに「iOS」のタグ・App Store のボタン・iOS 版のサポートとプライバシーポリシーへのリンクを足し、2つのページの `sitemap: false` を外す
  - `support-ios.md` にはメールアドレスが書いてある（App Store のサポート先として別の作業で入れたもの）。外すなら問い合わせフォームなどに置き換える

## 検索（SEO）
- Google Search Console に `https://friegen.github.io/`（URL プレフィックス）を登録済み。確認は HTML タグで、**`index.html` と `_layouts/default.html` の両方の `google-site-verification` の行を消さない**（消すと確認が外れる）
- `sitemap.xml` は jekyll-sitemap がビルドのたびに自動で作る（Search Console に送信済み。送り直しは不要）。検索に出したくないページは、先頭の設定に `sitemap: false`
- 紹介ページには hreflang・canonical・meta description・OGP・構造化データ（SoftwareApplication）が入っている

## 広告・ストアとの関係
- Play Console の「ウェブサイト」はどちらのアプリも `https://friegen.github.io`。AdMob はこのドメインの `app-ads.txt` で確認している（確認済み）。ドメインを変える（独自ドメインにする）ときは、Play Console のウェブサイトと app-ads.txt の置き場所も合わせて変える必要がある
- AdSense をこのサイトに載せることは技術的にはできるが、github.io は審査に通りにくいことがある（ユーザーがブログ化を検討中。本気でやるなら独自ドメインがおすすめと伝えてある）

## デザインの決まり
- 色: いろどりメモのアイコンに合わせた青（`#0A6CD6`）と虹色のグラデーション（`#4F8DF5 → #C86FD0 → #F39A6B → #F6D365 → #7BD88F`）
- ライト・ダークは端末の設定に合わせて自動（`prefers-color-scheme`）
- 動きは `prefers-reduced-motion` で止める。JavaScript が動かなくても中身が見えるようにする（`.js` クラスがあるときだけ表示のアニメーション）
- 画像は `width`・`height` を書き、CSS で `height: auto`（書かないと縦に伸びた不具合があった）
