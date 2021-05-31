# Webpackまとめる

---
  - [Getting started](#getting-started)
  - [その他ハマったところ](#その他ハマったところ)
---

## Getting started

## その他ハマったところ

### nodenvのnpmでのglobalコマンド系

理由はわからないがnodenvのnpmのグローバルでinstallした時にパス通らない。  
`.anyenv/envs/nodenv/shims/`下にコマンド一覧が入っている様子で、そこになければ無いですね。  
`nodenv rehash`で読み込み直してダメだったらまた調べてほしい未来の自分  