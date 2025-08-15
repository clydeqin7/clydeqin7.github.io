# 个人主页

一个简洁的个人主页，用于展示博客链接和项目链接，并部署在 GitHub Pages 上。

## 功能特性

- 原生 HTML 实现，不依赖框架
- 响应式设计，适配移动端和桌面端
- 深色/浅色模式切换
- GitHub Actions 自动部署

## 部署说明

1. 将此仓库 Fork 到你的 GitHub 账号
2. 修改 `index.html` 中的个人信息和链接
3. 推送到 GitHub 后会自动部署到 `https://<你的用户名>.github.io/<仓库名>/`

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```