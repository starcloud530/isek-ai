# Isek.ai

面向男性读者的互动网文网站。读者在章节里做出选择，下一章会因此不同。同一批故事以后可以做成漫画和短剧，当前仓库只做网站骨架，不实现漫画或短剧。

## 愿景

成为全网最大的沉浸式体验文娱作品网站。

## 使命

让人人能体验彼此不一样的故事。

## 内容方向

钩子标题向的男性网文。第一批上架是系统流、杀伐升级的爽文，不是恋爱向。

下面这些作品只作为风格参照，不是授权文本，不要抄写原文：

- 《辉夜大小姐想让我告白》
- 《天才恋爱脑大战》
- 《全民觉醒：亡灵法师！我即是天灾》
- 《我的垃圾桶能联通神圣罗马帝国》
- 《生化危机：我斩杀丧尸就变强》

## 仓库结构

一个仓库同时放前端和后端。应用源码只在 `app/web` 和 `app/api`，根目录用 npm workspaces 管理，没有单独的 `packages/` 目录。

- `app/web`：React 19 + Vite + Tailwind CSS 4（`@tailwindcss/vite`）
- `app/api`：Node + Hono 的小型 TypeScript API。目前只有 `GET /health`，返回 `{ "ok": true }`。没有数据库、没有登录、没有密钥，也不使用 `.env`。

## 安装与运行

在仓库根目录执行：

```bash
npm install
```

启动网页（默认 Vite 开发地址，通常是 http://localhost:5173）：

```bash
npm run dev:web
```

启动 API（http://localhost:3001）：

```bash
npm run dev:api
```

构建网页：

```bash
npm run build:web
```

健康检查：

```bash
curl http://localhost:3001/health
```

预期响应：`{"ok":true}`。
