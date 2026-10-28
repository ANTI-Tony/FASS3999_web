# Beyond Stay or Leave

一个用于 FASS3999 课堂演示的 React 原型，包含经核实信息导航、脚本化 AI 信息导航，以及可审阅和确认的个案摘要流程。演示内容全部为虚构案例。

## 本地运行

需要 Node.js 22 或更新版本。

```sh
npm install
npm run dev
```

本原型不需要 API 密钥、后端、用户账户或真实 AI 接口。

## GitHub Pages

`.github/workflows/deploy.yml` 会在推送到 `main` 后构建 React 应用并部署 `dist`。首次部署前，在仓库设置中将 **Pages → Build and deployment → Source** 设为 **GitHub Actions**。Vite 已针对仓库路径 `/FASS3999_web/` 配置静态资源地址。

## 隐私与范围

这是研究原型，不是实际的家暴咨询或转介服务。它不会把输入发送给 AI 服务商、保存真实个案资料或联系任何机构。请勿输入可识别身份或敏感的个人信息。快速退出会离开页面，但无法清除浏览器历史或阻止他人监控设备。

正式使用前，页面来源与内容需要由法律、家暴、儿童安全、隐私和技术安全专业人员审核。
