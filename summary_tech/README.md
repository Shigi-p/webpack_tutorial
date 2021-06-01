# Webpackまとめるついでにpugもやる

---
- [Webpackまとめるついでにpugもやる](#webpackまとめるついでにpugもやる)
  - [Getting started](#getting-started)
  - [その他ハマったところ](#その他ハマったところ)
    - [nodenvのnpmでのglobalコマンド系](#nodenvのnpmでのglobalコマンド系)
    - [webpack5系のloaderとwebpack4系のloaderとかそのへん](#webpack5系のloaderとwebpack4系のloaderとかそのへん)
---

## Getting started

## その他ハマったところ

### nodenvのnpmでのglobalコマンド系

理由はわからないがnodenvのnpmのグローバルでinstallした時にパス通らない。  
`.anyenv/envs/nodenv/shims/`下にコマンド一覧が入っている様子で、そこになければ無いですね。  
`nodenv rehash`で読み込み直してダメだったらまた調べてほしい未来の自分  

### webpack5系のloaderとwebpack4系のloaderとかそのへん

1. pugをぶちこんだ
2. pug-loaderを入れて単一のファイルは変換できた
3. 大量のpugファイルをhtmlに変換したくなった
4. webpack-route-data-mapperをぶちこんだ
5. webpack5系では動かない←！？
6. バージョン関係をいじくりまわす
7. webpack4系ではassets-moduleじゃなくてfile-loaderが必要なことを思い出す
8. 仕方なく4系に戻す←今ここ
