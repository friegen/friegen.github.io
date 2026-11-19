---
title: 片思いチェッカー for Bluesky（iOS 版）プライバシーポリシー / Follower Checker for Bluesky (iOS) Privacy Policy
---

# 片思いチェッカー for Bluesky（iOS 版）プライバシーポリシー

最終更新日: 2026年11月19日

本アプリの開発者（以下「私たち」）は、iOS アプリ「片思いチェッカー for Bluesky」（以下「本アプリ」）における利用者の情報の取り扱いについて、以下のとおり定めます。

本アプリは、Bluesky のフォロー・フォロワーの一覧を取得して見比べるアプリです。私たちはサーバーを持っておらず、利用者の情報を私たちが受け取ることはありません。本アプリの通信は、下に書いた Bluesky のサーバーなどと、広告（Google AdMob）のためのものだけです。

## 1. 本アプリが扱う情報
本アプリは、次の情報を扱います。

- Bluesky アカウントのログイン情報（ハンドルまたはメールアドレス、パスワード）と、ログイン後にサーバーから受け取る認証用のトークン
- ログインしたアカウントのプロフィール（表示名、アイコンの画像の URL）
- フォローしている人・フォロワーの一覧（ハンドル、表示名、自己紹介、アイコンの画像の URL など、Bluesky で公開されている情報）
- ログインするサーバー、データがあるサーバー（PDS）のアドレス
- アプリの設定（ダークモード、デイリーレポートのオン／オフなど）

パスワードには、Bluesky の設定で作成できる「アプリパスワード」を使うことをおすすめします。

## 2. 端末への保存
上記の情報は、利用者の端末の中（本アプリ専用の領域）に保存します。

- パスワードと認証用のトークンは、端末のキーチェーンに保存します。この端末だけで使える設定で保存するため、iCloud キーチェーンで同期されることも、バックアップから別の端末に移ることもありません
- フォロー・フォロワーの一覧は、次にアプリを開いたときにすぐ表示するため、またデイリーレポートで前回と比べるために保存します

アカウントをログアウトすると、そのアカウントについて保存した情報を消します。本アプリを削除すると、端末に保存した情報が消えます。ただし、iOS の仕組みにより、キーチェーンに保存したパスワードと認証用のトークンは本アプリを削除しても端末に残ることがあります。本アプリは、入れ直したあとの最初の起動でこれらを削除します。

## 3. 通信先と送る情報
本アプリは、次の相手と通信します。

- **Bluesky のサーバー**（bsky.social、または利用者のデータがあるサーバー（PDS）、利用者が指定したサーバー）: ログイン、フォロー・フォロワーの一覧とプロフィールの取得、利用者が操作したときのフォロー・フォロー解除のために、ログイン情報・トークン・操作の内容を送ります
- **ログインするサーバーを調べるための問い合わせ**: ログインのときに、入力されたハンドルを Bluesky の公開 API（public.api.bsky.app）に送ってアカウントの ID（DID）を調べ、その ID を PLC ディレクトリ（plc.directory）またはハンドルのドメインに送って、データがあるサーバーを調べます。パスワードは送りません
- **Google AdMob**: 広告の表示のため（「6. 広告」を参照）

Bluesky のサーバーに送った情報は、そのサーバーの運営者のポリシーに従って取り扱われます。Bluesky Social のサーバーについては [Bluesky のプライバシーポリシー](https://bsky.social/about/support/privacy-policy)をご覧ください。

一覧で人のアイコンをタップすると、ブラウザなどで Bluesky のウェブサイト（bsky.app）のプロフィールを開きます。

## 4. 通知（デイリーレポート・リマインド）
通知は、利用者が iOS の通知を許可した場合にだけ届きます。

- **デイリーレポート**: オンにしている間、バックグラウンドで Bluesky のサーバーと通信してフォロワーの一覧を取得し、前回と比べて、新しくフォローした人数とフォローを解除した人数を通知します（最大で1日に1回。実行するタイミングは iOS が決めるため、毎日届かないことがあります）。比べるために、前回のフォロワーの ID を端末に保存します。設定画面からいつでもオフにでき、オフにすると保存した前回のフォロワーを消します
- **リマインド**: しばらく本アプリを開いていないときに、フォロワーのチェックをおすすめする通知です。通信は行いません

どちらの通知も端末の中で作ります。通知の内容を私たちや第三者に送ることはありません。通知は iOS の「設定」アプリからオフにできます。

## 5. iCloud バックアップ・機種変更とパスワードの自動入力
- **iCloud バックアップ・機種変更**: iCloud バックアップや iPhone 同士のデータの移行を使うと、本アプリの設定とログインしているアカウントの一覧（ハンドル、ログインするサーバーとデータがあるサーバーのアドレス、表示名、アイコンの画像の URL）が新しい端末に移ります。パスワード、認証用のトークン、フォロー・フォロワーの一覧は移りません。新しい端末では、もう一度ログインしてください
- **パスワードの自動入力**: ログイン画面のパスワード欄は、iOS のパスワードの自動入力に対応しています。自動入力で入れたパスワードは、本アプリの中では手で入力したものと同じように扱います

これらは Apple が提供する機能で、[Apple のプライバシーポリシー](https://www.apple.com/legal/privacy/)に従って取り扱われます。

## 6. 広告（Google AdMob）
本アプリは、広告を表示するために Google が提供する広告配信サービス「Google AdMob」を利用しています。

AdMob は、広告の配信、広告の効果の測定、不正の防止などのために、次のような情報を収集・利用することがあります。

- 端末の識別子（広告 ID（IDFA）。利用者がトラッキングを許可した場合のみ）や、Google が使う端末の識別子
- IP アドレス（おおよその地域の推定に使われることがあります）
- 端末や OS の種類、言語などの端末の情報
- 広告の表示やタップなど、広告に対する操作の情報
- アプリの動作に関する診断情報

これらの情報は Google が収集し、Google のポリシーに従って取り扱います。Bluesky のログイン情報やフォロー・フォロワーの一覧を広告に使うことはありません。詳しくは以下をご覧ください。

- [Google のプライバシーポリシー](https://policies.google.com/privacy)
- [Google のパートナーのサイトやアプリを使用する際の Google によるデータ使用](https://policies.google.com/technologies/partner-sites)

**トラッキングの許可**: 本アプリは、最初の起動のときに、iOS の「App からのトラッキング要求」で、利用者に合わせた広告のために広告 ID を使ってよいかを確認します。許可しなくても、本アプリのすべての機能を使えます（その場合は、利用者に合わせない広告が表示されます）。選んだ内容は、iOS の「設定」＞「プライバシーとセキュリティ」＞「トラッキング」からいつでも変更できます。

欧州経済領域（EEA）、英国、スイスなど、法律で利用者の同意が必要な地域では、Google の User Messaging Platform を使って同意を確認し、同意の内容に従って広告を表示します。同意の内容は、本アプリの設定画面の「広告のプライバシー設定」からいつでも変更できます。

利用者は、次の方法で広告のパーソナライズを制限できます。

- iOS の「設定」＞「プライバシーとセキュリティ」＞「トラッキング」で、本アプリのトラッキングをオフにする
- [Google マイ アド センター](https://myadcenter.google.com/)で広告の設定を変更する

## 7. 第三者への提供
上記の Bluesky のサーバーなどとの通信、および広告配信のための Google による情報の収集を除き、利用者の情報を第三者に提供することはありません。

## 8. 情報の削除
- 本アプリで保存した情報は、アカウントのログアウトまたは本アプリの削除で削除できます（キーチェーンについては「2. 端末への保存」をご覧ください）
- iCloud バックアップは、iOS の「設定」の iCloud の項目から削除できます
- 本アプリで使ったアプリパスワードは、Bluesky の設定から取り消すことができます

## 9. 子どもの利用
本アプリは、13歳未満の子どもを対象としたものではありません。

## 10. 本ポリシーの変更
本ポリシーの内容は、必要に応じて変更することがあります。変更した場合は、このページでお知らせします。

## 11. お問い合わせ
本ポリシーに関するお問い合わせは、App Store の本アプリのページに記載している開発者の連絡先までご連絡ください。

---

# Follower Checker for Bluesky (iOS) Privacy Policy

Last updated: November 19, 2026

The developer of the iOS app "Follower Checker for Bluesky" (the "App", "we") explains below how the App handles user information.

The App retrieves and compares your Bluesky follows and followers. We do not operate any servers, and we never receive your information. The App communicates only with the Bluesky servers and other services listed below, and with Google AdMob for advertising.

## 1. Information the App handles
The App handles the following information:

- Your Bluesky sign-in information (handle or email address, and password) and the authentication tokens received from the server after you sign in
- The profile of the account you signed in with (display name and avatar image URL)
- The lists of people you follow and your followers (handles, display names, bios, avatar image URLs, and other information that is public on Bluesky)
- The addresses of the server you sign in to and the server that hosts your data (PDS)
- App settings (dark mode, whether the daily report is on, and so on)

We recommend using an "App Password", which you can create in Bluesky's settings, as your password.

## 2. Storage on your device
The information above is stored on your device, in storage that only the App can access.

- Your password and authentication tokens are stored in your device's Keychain with a setting that limits them to this device, so they are never synced with iCloud Keychain and are never moved to another device through a backup
- The lists of follows and followers are saved so that they can be shown immediately the next time you open the App, and so that the daily report can compare them with the previous ones

When you sign out of an account, the information saved for that account is deleted. When you delete the App, the information saved on your device is deleted. However, because of how iOS works, the password and authentication tokens saved in the Keychain may remain on your device after you delete the App. The App deletes them the first time it is opened after being reinstalled.

## 3. Where the App connects and what it sends
The App communicates with the following:

- **Bluesky servers** (bsky.social, the server that hosts your data (PDS), or a server you specify): to sign in, retrieve your follows, followers, and profile, and follow or unfollow people when you choose to, the App sends your sign-in information, tokens, and the details of your actions
- **Lookups to find your sign-in server**: when you sign in, the App sends the handle you entered to Bluesky's public API (public.api.bsky.app) to look up your account ID (DID), and sends that ID to the PLC directory (plc.directory) or to your handle's domain to find the server that hosts your data. Your password is not sent in these lookups
- **Google AdMob**: to show ads (see "6. Advertising")

Information sent to a Bluesky server is handled under the policies of that server's operator. For Bluesky Social's servers, see [Bluesky's Privacy Policy](https://bsky.social/about/support/privacy-policy).

Tapping a person's avatar in a list opens their profile on the Bluesky website (bsky.app) in your browser or another app.

## 4. Notifications (daily report and reminders)
Notifications are delivered only if you allow notifications in iOS.

- **Daily report**: while it is turned on, the App connects to Bluesky servers in the background to retrieve your followers, compares them with the previous ones, and notifies you how many people newly followed you and how many unfollowed you (at most once a day; because iOS decides when it runs, you may not receive it every day). To make the comparison, the App saves the IDs of your previous followers on your device. You can turn it off at any time in the App's settings; turning it off deletes the saved previous followers
- **Reminders**: a notification suggesting you check your followers when you haven't opened the App for a while. It does not involve any communication

Both notifications are created on your device. Their contents are never sent to us or to any third party. You can turn off notifications in the iOS Settings app.

## 5. iCloud Backup, moving to a new iPhone, and Password AutoFill
- **iCloud Backup and moving to a new iPhone**: if you use iCloud Backup or transfer data from one iPhone to another, the App's settings and the list of signed-in accounts (handles, the addresses of the sign-in server and the server that hosts your data, display names, and avatar image URLs) move to the new device. Your password, authentication tokens, and lists of follows and followers do not. Please sign in again on the new device
- **Password AutoFill**: the password field on the sign-in screen supports iOS Password AutoFill. A password filled in by AutoFill is handled in the App in the same way as one you type

These features are provided by Apple and are handled under [Apple's Privacy Policy](https://www.apple.com/legal/privacy/).

## 6. Advertising (Google AdMob)
The App uses Google AdMob, an advertising service provided by Google, to show ads.

AdMob may collect and use the following information to serve ads, measure ad performance, and prevent fraud:

- Device identifiers, such as the advertising identifier (IDFA, only if you allow tracking) and other device identifiers used by Google
- IP address (which may be used to estimate your approximate location)
- Device information such as device type, OS, and language
- Interactions with ads, such as ad views and taps
- Diagnostic information about how the App runs

This information is collected by Google and handled under Google's policies. Your Bluesky sign-in information and your lists of follows and followers are never used for advertising. For details, see:

- [Google Privacy Policy](https://policies.google.com/privacy)
- [How Google uses information from sites or apps that use our services](https://policies.google.com/technologies/partner-sites)

**Tracking permission**: the first time you open the App, it uses iOS's "Allow Apps to Request to Track" prompt to ask whether the advertising identifier may be used to show ads tailored to you. You can use all of the App's features even if you do not allow it (in that case, non-personalized ads are shown). You can change your choice at any time in iOS Settings > Privacy & Security > Tracking.

In regions where user consent is required by law, such as the European Economic Area (EEA), the United Kingdom, and Switzerland, we use Google's User Messaging Platform to ask for your consent and show ads according to your choices. You can change your choices at any time from "Ad Privacy Settings" in the App's settings.

You can limit ad personalization by:

- Turning off tracking for the App in iOS Settings > Privacy & Security > Tracking
- Changing your ad settings in [Google My Ad Center](https://myadcenter.google.com/)

## 7. Sharing with third parties
Except for the communication with Bluesky servers and the other services described above, and the collection of information by Google for advertising, we do not share your information with third parties.

## 8. Deleting your information
- You can delete the information saved by the App by signing out of an account or deleting the App (for the Keychain, see "2. Storage on your device")
- You can delete iCloud backups from the iCloud section of iOS Settings
- You can revoke the App Password you used with the App in Bluesky's settings

## 9. Children
The App is not directed at children under the age of 13.

## 10. Changes to this policy
We may update this policy when necessary. Any changes will be posted on this page.

## 11. Contact
If you have any questions about this policy, please contact us using the developer contact information shown on the App's App Store page.
