Hexo theme: Apollo
=================

自分のサイト向けに調整した [AthenaYin/hexo-theme-apollo](https://github.com/AthenaYin/hexo-theme-apollo) のフォークです。

## Install

Hexo プロジェクトの `themes/` 配下に配置します。

```bash
git clone https://github.com/Jpsern/hexo-theme-apollo.git themes/apollo
```

Git 管理下のプロジェクトでは、サブモジュールとして追加できます。

```bash
git submodule add https://github.com/Jpsern/hexo-theme-apollo.git themes/apollo
```

## 更新

サブモジュール運用の場合は、プロジェクトルートで更新します。

```bash
git submodule update
```

テーマを単体で clone している場合は、`themes/apollo` で `git pull` を実行します。

## 設定

`themes/apollo/_config.yml` で主に次を設定します。

```yml
# Header
menu:
  Home: /
  About: /about/
  Archives: /archives/
  Music: /music/
  Privacy: /privacy/
rss: /atom.xml

# Content
excerpt_link: もっと見る

# Miscellaneous
google_analytics:
  tracking_id: UA-xxxxxxx
  measurement_id: G-xxxxxxxx

toc:
  maxdepth: 3
  class: toc
  slugify: uslug
  decodeEntities: false
  anchor:
    position: after
    symbol: '#'
    style: header-anchor
```

- `menu` - ヘッダーナビゲーション
- `rss` - RSS/Atom のリンク
- `excerpt_link` - 抜粋表示の「続きを読む」リンク
- `google_analytics.measurement_id` - Google Analytics の計測 ID
- `toc` - 目次の出力設定

## 補足

- `fancybox` と `favicon` の設定は現在のテーマでは使っていません
- `google_analytics.tracking_id` は互換用に残していますが、テンプレートでは `measurement_id` を参照しています
