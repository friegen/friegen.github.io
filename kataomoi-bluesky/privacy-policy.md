---
title: 片思いチェッカー for Bluesky プライバシーポリシー / Follower Checker for Bluesky Privacy Policy
description: Android アプリ「片思いチェッカー for Bluesky」のプライバシーポリシー。開発者はサーバーを持たず、利用者の情報を受け取りません。Privacy Policy of Follower Checker for Bluesky for Android.
# SNS で共有したときの画像（tools/og-image/ で作る）
image: /assets/og/kataomoi-bluesky-privacy.jpg
---

# 片思いチェッカー for Bluesky プライバシーポリシー

最終更新日: 2026年11月19日

本アプリの開発者（以下「私たち」）は、Android アプリ「片思いチェッカー for Bluesky」（以下「本アプリ」）における利用者の情報の取り扱いについて、以下のとおり定めます。

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

- パスワードと認証用のトークンは、端末の Android キーストアの鍵で暗号化して保存します。この鍵は端末の外に出ないため、保存したパスワードを端末の外で読むことはできません
- フォロー・フォロワーの一覧は、次にアプリを開いたときにすぐ表示するため、またデイリーレポートで前回と比べるために保存します

アカウントをログアウトすると、そのアカウントについて保存した情報を消します。本アプリをアンインストールすると、端末に保存したすべての情報が消えます。

## 3. 通信先と送る情報
本アプリは、次の相手と通信します。

- **Bluesky のサーバー**（bsky.social、または利用者のデータがあるサーバー（PDS）、利用者が指定したサーバー）: ログイン、フォロー・フォロワーの一覧とプロフィールの取得、利用者が操作したときのフォロー・フォロー解除のために、ログイン情報・トークン・操作の内容を送ります
- **ログインするサーバーを調べるための問い合わせ**: ログインのときに、入力されたハンドルを Bluesky の公開 API（public.api.bsky.app）に送ってアカウントの ID（DID）を調べ、その ID を PLC ディレクトリ（plc.directory）またはハンドルのドメインに送って、データがあるサーバーを調べます。パスワードは送りません
- **Google AdMob**: 広告の表示のため（「6. 広告」を参照）

Bluesky のサーバーに送った情報は、そのサーバーの運営者のポリシーに従って取り扱われます。Bluesky Social のサーバーについては [Bluesky のプライバシーポリシー](https://bsky.social/about/support/privacy-policy)をご覧ください。

一覧で人のアイコンをタップすると、ブラウザなどで Bluesky のウェブサイト（bsky.app）のプロフィールを開きます。

## 4. 通知（デイリーレポート・リマインド）
- **デイリーレポート**: オンにしている間、1日に1回バックグラウンドで Bluesky のサーバーと通信してフォロワーの一覧を取得し、前回と比べて、新しくフォローした人数とフォローを解除した人数を通知します。比べるために、前回のフォロワーの ID を端末に保存します。設定画面からいつでもオフにでき、オフにすると保存した前回のフォロワーを消します
- **リマインド**: しばらく本アプリを開いていないときに、フォロワーのチェックをおすすめする通知です。通信は行いません

どちらの通知も端末の中で作ります。通知の内容を私たちや第三者に送ることはありません。通知は端末の設定から種類ごとにオフにできます。

## 5. Android の自動バックアップと Google パスワード マネージャー
- **自動バックアップ**: 端末の設定でバックアップが有効になっている場合、本アプリの設定とログインしているアカウントの一覧（ハンドル、ログインするサーバーとデータがあるサーバーのアドレス、表示名、アイコンの画像の URL）が、利用者の Google アカウント（Google ドライブ）にバックアップされ、機種変更のときなどに復元されます。パスワード、認証用のトークン、フォロー・フォロワーの一覧はバックアップしません
- **Google パスワード マネージャー**: ログインのあとに、パスワードを Google パスワード マネージャーに保存するかを確認します。保存した場合は、機種変更や再インストールのあとに、保存したパスワードを使ってログインし直すことができます。保存するかどうかは利用者が選べます

これらは Google が提供する機能で、[Google のプライバシーポリシー](https://policies.google.com/privacy)に従って取り扱われます。

## 6. 広告（Google AdMob）
本アプリは、広告を表示するために Google が提供する広告配信サービス「Google AdMob」を利用しています。

AdMob は、広告の配信、広告の効果の測定、不正の防止などのために、次のような情報を収集・利用することがあります。

- 端末の広告 ID（Android の広告 ID）などの端末の識別子
- IP アドレス（おおよその地域の推定に使われることがあります）
- 端末や OS の種類、言語などの端末の情報
- 広告の表示やタップなど、広告に対する操作の情報
- アプリの動作に関する診断情報

これらの情報は Google が収集し、Google のポリシーに従って取り扱います。Bluesky のログイン情報やフォロー・フォロワーの一覧を広告に使うことはありません。詳しくは以下をご覧ください。

- [Google のプライバシーポリシー](https://policies.google.com/privacy)
- [Google のパートナーのサイトやアプリを使用する際の Google によるデータ使用](https://policies.google.com/technologies/partner-sites)

欧州経済領域（EEA）、英国、スイスなど、法律で利用者の同意が必要な地域では、Google の User Messaging Platform を使って同意を確認し、同意の内容に従って広告を表示します。同意の内容は、本アプリの設定画面の「広告のプライバシー設定」からいつでも変更できます。

利用者は、次の方法で広告のパーソナライズを制限できます。

- 端末の設定から広告 ID を削除またはリセットする（例: 設定 ＞ セキュリティとプライバシー ＞ その他のプライバシー設定 ＞ 広告。項目の名前は端末によって異なります）
- [Google マイ アド センター](https://myadcenter.google.com/)で広告の設定を変更する

## 7. 第三者への提供
上記の Bluesky のサーバーなどとの通信、および広告配信のための Google による情報の収集を除き、利用者の情報を第三者に提供することはありません。

## 8. 情報の削除
- 本アプリで保存した情報は、アカウントのログアウトまたは本アプリのアンインストールで削除できます
- Google ドライブのバックアップと Google パスワード マネージャーに保存したパスワードは、Google アカウントの設定から削除できます
- 本アプリで使ったアプリパスワードは、Bluesky の設定から取り消すことができます

## 9. 子どもの利用
本アプリは、13歳未満の子どもを対象としたものではありません。

## 10. 本ポリシーの変更
本ポリシーの内容は、必要に応じて変更することがあります。変更した場合は、このページでお知らせします。

## 11. お問い合わせ
本ポリシーに関するお問い合わせは、Google Play の本アプリのページに記載している開発者の連絡先までご連絡ください。

---

# Follower Checker for Bluesky Privacy Policy

Last updated: November 19, 2026

The developer of the Android app "Follower Checker for Bluesky" (the "App", "we") explains below how the App handles user information.

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

- Your password and authentication tokens are encrypted with a key in your device's Android Keystore. This key never leaves your device, so the saved password cannot be read outside your device
- The lists of follows and followers are saved so that they can be shown immediately the next time you open the App, and so that the daily report can compare them with the previous ones

When you sign out of an account, the information saved for that account is deleted. When you uninstall the App, all information saved on your device is deleted.

## 3. Where the App connects and what it sends
The App communicates with the following:

- **Bluesky servers** (bsky.social, the server that hosts your data (PDS), or a server you specify): to sign in, retrieve your follows, followers, and profile, and follow or unfollow people when you choose to, the App sends your sign-in information, tokens, and the details of your actions
- **Lookups to find your sign-in server**: when you sign in, the App sends the handle you entered to Bluesky's public API (public.api.bsky.app) to look up your account ID (DID), and sends that ID to the PLC directory (plc.directory) or to your handle's domain to find the server that hosts your data. Your password is not sent in these lookups
- **Google AdMob**: to show ads (see "6. Advertising")

Information sent to a Bluesky server is handled under the policies of that server's operator. For Bluesky Social's servers, see [Bluesky's Privacy Policy](https://bsky.social/about/support/privacy-policy).

Tapping a person's avatar in a list opens their profile on the Bluesky website (bsky.app) in your browser or another app.

## 4. Notifications (daily report and reminders)
- **Daily report**: while it is turned on, the App connects to Bluesky servers once a day in the background to retrieve your followers, compares them with the previous ones, and notifies you how many people newly followed you and how many unfollowed you. To make the comparison, the App saves the IDs of your previous followers on your device. You can turn it off at any time in the App's settings; turning it off deletes the saved previous followers
- **Reminders**: a notification suggesting you check your followers when you haven't opened the App for a while. It does not involve any communication

Both notifications are created on your device. Their contents are never sent to us or to any third party. You can turn off each type of notification in your device settings.

## 5. Android automatic backup and Google Password Manager
- **Automatic backup**: if backup is turned on in your device settings, the App's settings and the list of signed-in accounts (handles, the addresses of the sign-in server and the server that hosts your data, display names, and avatar image URLs) are backed up to your Google Account (Google Drive) and can be restored, for example when you set up a new device. Your password, authentication tokens, and lists of follows and followers are not backed up
- **Google Password Manager**: after you sign in, the App asks whether you want to save your password to Google Password Manager. If you save it, you can sign in again with the saved password after switching devices or reinstalling the App. Saving is up to you

These features are provided by Google and are handled under [Google's Privacy Policy](https://policies.google.com/privacy).

## 6. Advertising (Google AdMob)
The App uses Google AdMob, an advertising service provided by Google, to show ads.

AdMob may collect and use the following information to serve ads, measure ad performance, and prevent fraud:

- Device identifiers such as your device's advertising ID (Android Advertising ID)
- IP address (which may be used to estimate your approximate location)
- Device information such as device type, OS, and language
- Interactions with ads, such as ad views and taps
- Diagnostic information about how the App runs

This information is collected by Google and handled under Google's policies. Your Bluesky sign-in information and your lists of follows and followers are never used for advertising. For details, see:

- [Google Privacy Policy](https://policies.google.com/privacy)
- [How Google uses information from sites or apps that use our services](https://policies.google.com/technologies/partner-sites)

In regions where user consent is required by law, such as the European Economic Area (EEA), the United Kingdom, and Switzerland, we use Google's User Messaging Platform to ask for your consent and show ads according to your choices. You can change your choices at any time from "Ad Privacy Settings" in the App's settings.

You can limit ad personalization by:

- Deleting or resetting your advertising ID in your device settings (for example, Settings > Security & privacy > More privacy settings > Ads; the names vary by device)
- Changing your ad settings in [Google My Ad Center](https://myadcenter.google.com/)

## 7. Sharing with third parties
Except for the communication with Bluesky servers and the other services described above, and the collection of information by Google for advertising, we do not share your information with third parties.

## 8. Deleting your information
- You can delete the information saved by the App by signing out of an account or uninstalling the App
- You can delete backups in Google Drive and passwords saved in Google Password Manager from your Google Account settings
- You can revoke the App Password you used with the App in Bluesky's settings

## 9. Children
The App is not directed at children under the age of 13.

## 10. Changes to this policy
We may update this policy when necessary. Any changes will be posted on this page.

## 11. Contact
If you have any questions about this policy, please contact us using the developer contact information shown on the App's Google Play page.
