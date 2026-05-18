# 钱就是钱

钱就是钱是一个轻量网页应用，用来回答一个更尖的问题：

> 这笔钱，花在哪才是真的？

它不是记账工具，也不是省钱工具。它把同一笔钱放到一个更大的竖向金额尺上：左边是容易把注意力带走的消费，右边是同样的钱可能变成的真实东西，比如工具、健康、关系、作品、学习曲线、空间和未来余地。

## 当前方向

- 大竖向金额尺作为主交互，而不是普通价格进度条。
- 中国年轻人版消费目录，包含更真实的品牌和场景锚点：
  - 原神/崩铁 648、王者皮肤、Steam/Switch 游戏
  - 瑞幸、奈雪/喜茶、星巴克、饿了么、美团、抖音直播间、淘宝/拼多多
  - AirPods、MacBook Air、iPhone、小米/一加、索尼耳机、Kindle
  - Keep、洗牙、皮肤科、跑鞋、通勤穿搭、香水、护肤
  - 回家高铁、朋友饭局、父母体检、简历修改、AI 工具、域名服务器
- 奖励画像：做事的人、想体面出现、想要安全感、在乎关系、需要安静、认真玩。
- 消费敏感度：不太敏感、正常、很容易被带走。
- 每个项目都有一句话意义、展开解释、替代消费和反思问题。

## 运行

```powershell
npm start
```

打开命令输出里的本地地址，默认是：

```text
http://127.0.0.1:4173/
```

## GitHub Pages

推送到 `main` 后，`.github/workflows/pages.yml` 会把静态站部署到 GitHub Pages。线上地址：

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

- 重点不是“它多少钱”，而是“这笔钱最后会变成什么”。
- 真实消费不等于便宜；注意力消费也不等于禁止购买。
- 品牌和场景要具体，但不要变成实时比价或带货。
- 保留一点理财感：奖励画像、敏感度、愿望清单、真实感差值。
- 文案要像观察过生活，不要像泛泛的消费建议。

## 价格说明

价格是用于认知对照的近似日常价位，不是实时价格或购买建议。少数价格锚点参考公开资料，其余按常见城市消费区间做启发式估计。

参考锚点：

- 北京地铁乘客须知：<https://english.beijing.gov.cn/specials/beijinglifeonthesubway/noticeforpassengers/202504/t20250423_4072294.html>
- 百度网盘超级会员月卡价格资料：<https://www.lenovo.com.cn/wiki/product-1027136.html>
- Luckin Coffee App deals/vouchers 页面：<https://www.luckincoffee.com/my/app/download>
- Netflix plans and pricing help：<https://help.netflix.com/en/node/24926>
