# 洛奇的邪惡組織手札專案開源說明

此專案為個人技術筆記 Blog，任何人都能透過 Github 開源分享方式自行 fork 保存，並提出 PR 協助錯誤資訊修正。一起共同參與維護提升此文件筆記的品質和完整性。

請勿將此專案 fork 後僅更改作者名稱即部署到網站上，這樣的行為屬於冒名使用，違反了開源精神。若要使用此專案，請保留原作者資訊，並在適當位置註明修改者資訊。感謝您的理解與合作。

## 安裝
首先，請確保你已經安裝了 Node.js 和 npm。然後在專案目錄中執行以下命令來安裝依賴：

```bash
npm install
```

## 指令

以下是一些常用的指令：

- 啟動本地伺服器：
  ```bash
  npm start
  ```

- 重新生成靜態文件：
  ```bash
  npm restart
  ```

- 生成靜態文件：
  ```bash
  npm run build
  ```

- 清理生成的文件：
  ```bash
  npm run clean
  ```

- 部署網站：
  ```bash
  npm run deploy
  ```

## 依賴

此專案使用了以下主要依賴：

- [Hexo](https://hexo.io/) ^7.3.0
- [Hexo CLI](https://github.com/hexojs/hexo-cli) ^4.3.2
- [Hexo CodePen](https://github.com/next-theme/hexo-codepen) ^0.1.1
- [Hexo Deployer Git](https://github.com/hexojs/hexo-deployer-git) ^4.0.0
- [Hexo Generator Archive](https://github.com/hexojs/hexo-generator-archive) ^2.0.0
- [Hexo Generator Category](https://github.com/hexojs/hexo-generator-category) ^2.0.0
- [Hexo Generator Index](https://github.com/hexojs/hexo-generator-index) ^4.0.0
- [Hexo Generator SearchDB](https://github.com/theme-next/hexo-generator-searchdb) ^1.4.1
- [Hexo Generator Tag](https://github.com/hexojs/hexo-generator-tag) ^2.0.0
- [Hexo Hide Posts](https://github.com/next-theme/hexo-hide-posts) ^0.4.3
- [Hexo Renderer EJS](https://github.com/hexojs/hexo-renderer-ejs) ^2.0.0
- [Hexo Renderer Marked](https://github.com/hexojs/hexo-renderer-marked) ^6.3.0
- [Hexo Renderer Stylus](https://github.com/hexojs/hexo-renderer-stylus) ^3.0.1
- [Hexo Server](https://github.com/hexojs/hexo-server) ^3.0.0
- [Hexo Tag Embed](https://github.com/hexojs/hexo-tag-embed) ^1.0.0
- [Hexo Word Counter](https://github.com/willin/hexo-word-counter) ^0.2.0
- [Patch Package](https://github.com/ds300/patch-package) ^8.0.0
- [Browserify](https://github.com/browserify/browserify) ^17.0.0
- [Range Parser](https://github.com/jshttp/range-parser) ^1.2.1
- [npm-upgrade](https://github.com/pgilad/npm-upgrade) ^3.1.0

## 配置

在 `_config.yml` 文件中可以進行站點配置。以下是一些主要配置項：

```yaml:_config.yml
startLine: 1
endLine: 120
```

## Next 主題

此專案使用了 Next 主題。以下是一些主要的配置與修改事項：

### 安裝 Next 主題

在 Hexo 根目錄中執行以下命令來克隆 Next 主題：

```bash
git clone https://github.com/theme-next/hexo-theme-next themes/next
```

### 配置 Next 主題

在 Hexo 根目錄的 `_config.yml` 文件中，將 `theme` 設置為 `next`：

```yaml:_config.yml
theme: next
```

### 修改 Next 主題配置

Next 主題的配置文件位於 `themes/next/_config.yml`。你可以在此文件中進行主題相關的配置。例如：

## 版本

Hexo 版本：7.3.0

## 貢獻

歡迎提交問題和合併請求。請確保在提交之前先閱讀 [貢獻指南](CONTRIBUTING.md)。希望大家能夠共同參與，提升這個專案的品質和功能。

## 授權

此專案採用 [MIT 授權](LICENSE)。