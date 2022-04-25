# pet_ni

流浪貓犬網頁設計，以 Vue 3 + Quasar + Google Sheet 做開發

- [up3_eim_frontend_antd](#up3_eim_frontend_antd)
  - [Project setup](#project-setup)
    - [Compiles and hot-reloads for development](#compiles-and-hot-reloads-for-development)
    - [Compiles and minifies for production](#compiles-and-minifies-for-production)
    - [Lints and fixes files](#lints-and-fixes-files)
  - [開發資源](#開發資源)
  - [核心技術](#核心技術)
  - [開發依賴](#開發依賴)
  - [使用套件](#使用套件)
  - [VSCode 套件](#vscode-套件)
  - [資料夾結構](#資料夾結構)
    - [api](#api)
    - [assets](#assets)
    - [components](#components)
    - [composable](#composable)
    - [styles](#styles)
    - [utils](#utils)
    - [views](#views)
  - [程式規範](#程式規範)
    - [Vue](#vue)
    - [Javascript](#javascript)
  - [Commit Message 結構](#commit-message-結構)
    - [結構組成](#結構組成)
    - [header 結構](#header-結構)
    - [參考](#參考)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

## 開發資源

- [設計稿](https://www.figma.com/file/1cJSFoon4L91A5TajkZTWk/PetNi-%E9%99%AA%E4%BD%A0_RWD)

## 核心技術

- Vue 3
- [Quasar](https://quasar.dev)
- Axios
- Scss

## 開發依賴

- [Prettier](https://prettier.io/) - 程式碼排版格式化工具
- [Eslint](https://eslint.org/) - 程式碼檢查, 撰寫風格規範
- [Stylelint](https://stylelint.io/) - 樣式檢查, 撰寫風格規範

## 使用套件

- [lottie-player](https://www.npmjs.com/package/@lottiefiles/lottie-player)

## VSCode 套件

- Eslint: 讓 Eslint 可實作的依賴
- StyleLint: 讓 StyleLint 可實作的依賴

## 資料夾結構

### api

所有 API 方法

- interceptors.js: 請求攔截器，利用 axios.interceptors 來設置
- setting.js: API 請求相關設定

### assets

圖片等靜態資源

- icon: svg icon 資料夾

### components

vue 元件庫

- global: 不隸屬特定範圍，可重複使用的元件
- (模組): 依照模組分類，該模組下的元件

### composable

可跨元件重複使用的 script

### styles

共用樣式管理

- css
  - `quasar.variables.scss`: 設計稿規範色碼
  - `spacing.scss`: margin、padding 的設定

### pages

各模組及功能頁面的進入窗口

## 程式規範

### Vue

- 採 `<script setup>` 方式，讓撰寫 composition api 更加方便，使用方法可參考 [此文章](https://www.thisdot.co/blog/vue-3-2-using-composition-api-with-script-setup)，若有引用的套件在支援上有困難，可改採基本的撰寫方法
- 單個 vue 檔, 程式碼**盡量**不要超過 300 行, 可以把此原則當作思考是否需將模組拆分的依據, 盡可能讓各模組的功能單一, 方便追查錯誤及維護
- component 使用 PascalCase 命名, 在 `<template>` 中使用 kebab-case 引用

```htmlmixed=
<template>
 <child-component :prop="prop" />
</template>

<script setup>
 import ChildComponent from '@/component/ChildComponent.vue'
</script>
```

### Javascript

- function 採 function expression(函式陳述式)

```javascript=
const refData = ref('Hello')
const refDataChange = (text) => {
 refData.value = text
}
```

## Commit Message 結構

### 結構組成

header(必要)-標題描述，參考下方 header 結構

```
feat:新增工作列表無限滾動
fix(行事曆):修正切換月份錯誤
```

body(非必要)-詳細描述更動內容，可多行，每行不超過 72 個字元，說明程式碼變動的項目與原因，還有與先前行為的對比

```
TpTask.vue: 新增<q-infinite-scroll>元件，onLoad 處理 API 行進
```

footer(非必要)-任務編號或相關標示

```
issue #1272
```

### header 結構

結構 : <'type'> (<'scope'>): <'subject'>

- type: (必要)代表 commit 的類別：feat, fix, docs, style, refactor, test, chore。
- scope (非必要)代表 commit 影響的範圍，例如功能、版型、元件等等。
- subject (必要)代表此 commit 的簡短描述，不要超過 50 個字元，結尾不要加句號。

type 類別：

- feat: 新增/修改功能 (feature)。
- fix: 修補 bug (bug fix)。
- docs: 文件 (documentation)。
- style: 格式 (不影響程式碼運行的變動 white-space, formatting, missing semi colons, etc)。
- refactor: 重構 (既不是新增功能，也不是修補 bug 的程式碼變動)。
- perf: 改善效能 (A code change that improves performance)。
- test: 增加測試 (when adding missing tests)。
- chore: 建構程序或輔助工具的變動 (maintain)。
- revert: 撤銷回覆先前的 commit 例如：revert: type(scope): subject (回覆版本：xxxx)。

### 參考

> [Git Commit Message 這樣寫會更好](https://wadehuanglearning.blogspot.com/2019/05/commit-commit-commit-why-what-commit.html)
