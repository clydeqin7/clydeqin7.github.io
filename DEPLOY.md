# GitHub Pages 自动部署指南

## 功能说明
这个GitHub Actions工作流会在你推送代码到main分支时自动构建并部署项目到GitHub Pages。

## 设置步骤

### 1. 启用GitHub Pages
1. 进入你的GitHub仓库
2. 点击 Settings → Pages
3. 在 Source 下拉菜单中选择 "GitHub Actions"

### 2. 推送代码
将代码推送到main分支即可触发自动部署：
```bash
git add .
git commit -m "Add GitHub Actions deployment"
git push origin main
```

### 3. 首次部署
- 推送后，进入GitHub仓库的 Actions 标签页
- 等待 "Deploy to GitHub Pages" 工作流完成
- 成功后即可通过GitHub Pages链接访问

### 4. 查看部署状态
1. 进入GitHub仓库的 Actions 标签页
2. 查看 "Deploy to GitHub Pages" 工作流的运行状态
3. 部署完成后，你可以在仓库的 Pages 设置中找到访问链接

## 工作流程
- **触发条件**：推送到main分支或合并PR到main分支
- **构建过程**：安装依赖 → 构建项目 → 上传构建产物
- **部署过程**：自动部署到GitHub Pages

## 自定义配置

### 修改分支
如果你想部署其他分支，修改 `.github/workflows/deploy.yml` 中的：
```yaml
on:
  push:
    branches: [ your-branch-name ]
```

### 修改构建命令
如果需要自定义构建命令，修改工作流中的：
```yaml
- name: Build project
  run: pnpm run build
```

## 故障排除

### 构建失败
1. 检查package.json中的构建脚本是否正确
2. 确保所有依赖都在package.json中声明
3. 查看Actions日志获取详细错误信息

### 页面404
1. 确认仓库是公开的（私有仓库需要GitHub Pro）
2. 检查Vite配置中的 `base: './'` 是否正确
3. 等待几分钟让GitHub Pages生效

## 访问链接
部署完成后，你的站点将可通过以下链接访问：
`https://[你的用户名].github.io/[仓库名]/`