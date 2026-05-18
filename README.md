# 钱就是钱

钱就是钱是一个轻量网页应用，用一条对数价格尺把不同领域的消费放到一起看：一杯咖啡、一个云盘会员、一段打车、一次体检、一台电脑和一段生活缓冲，本质上都在占用同一种钱。

核心目标不是记账，而是重建金钱观：让用户直观看到“同样的钱在不同场景里为什么体感不同”，并通过一句话意义和展开后的替代消费追问，把消费从自动反应拉回可选择状态。

## 当前范围

- 中国版和 US 版两套消费目录。
- 从零钱到大额生活选择的对数价格地图。
- 预算滑杆、地区切换、分类筛选和关键词搜索。
- 每个消费项默认只显示价格、品类和一句话意义。
- 展开后显示它真正购买的东西、可替代消费和一个反思问题。
- 同价选择面板会把跨领域但价格相近的项目放在一起。

价格是用于认知对照的近似日常价位，不是实时比价或购买建议。目录里少数项目参考了公开价格锚点，例如北京地铁票价、百度网盘会员、连锁咖啡和 Netflix 套餐；其余内容按常见城市消费区间做启发式估计。

参考锚点：

- 北京地铁乘客须知：<https://english.beijing.gov.cn/specials/beijinglifeonthesubway/noticeforpassengers/202504/t20250423_4072294.html>
- 百度网盘超级会员月卡价格资料：<https://www.lenovo.com.cn/wiki/product-1027136.html>
- Luckin Coffee App deals/vouchers 页面：<https://www.luckincoffee.com/my/app/download>
- Netflix plans and pricing help：<https://help.netflix.com/en/node/24926>

## 运行

```powershell
npm start
```

打开命令输出里的本地地址，默认是：

```text
http://127.0.0.1:4173/
```

## GitHub Pages

推送到 `main` 后，`.github/workflows/pages.yml` 会把静态站部署到 GitHub Pages。预期项目页地址：

```text
https://wychuang.github.io/qian-jiu-shi-qian/
```

## 验证

```powershell
npm test
```

或运行完整检查：

```powershell
.\scripts\check.ps1
```

完整检查会做 JavaScript 语法检查、目录逻辑测试，并在可用时用 Chrome 或 Edge 做一次无头浏览器烟测。

## 项目结构

```text
qian-jiu-shi-qian\
  index.html
  styles.css
  src\
    app.mjs
    catalog.mjs
  tests\
    catalog.test.mjs
  scripts\
    dev-server.mjs
    check.ps1
```

## 内容原则

- 价格跨度要大，优先一目了然。
- 同价项目要尽量跨界，但保留一点替代消费的内在联系。
- 一句话意义要锋利，展开内容才承载解释。
- 不把应用做重，不做登录、账本、复杂配置或实时抓价。
