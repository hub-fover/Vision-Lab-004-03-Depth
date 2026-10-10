# 实拍照片单目深度

独立课程实验 004/03。

- 网站：[运行真实示例](https://hub-fover.github.io/Vision-Lab-004-03-Depth/)
- 源码：[GitHub](https://github.com/hub-fover/Vision-Lab-004-03-Depth)
- 课件关联：第 47–66 页。检查镜面、玻璃和遮挡边缘的预测失误；未标定深度不表示米制距离。

本仓库包含本实验网页、真实样例、运行时及资源来源说明，可部署到任意静态服务器。无需其他课程仓库；相机要求 HTTPS。首次示例推理会从固定版本 Hugging Face 下载约 27 MB Depth Anything V2 Small 模型，输出为相对深度。运行时与实拍照片随仓库提供。

本地运行：

```sh
python -m http.server 8000
```

浏览器打开 http://localhost:8000/。请通过 HTTP/HTTPS 运行，不使用 file://。

验证：`npm test` 检查随附资源 SHA-256。许可证及素材来源见 LICENSES.md、THIRD_PARTY_NOTICES.md（如适用）及各 assets 下 metadata/来源台账。
