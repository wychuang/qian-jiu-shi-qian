export const categoryLabels = {
  body: "身体",
  care: "照护",
  digital: "数字",
  durable: "耐用品",
  experience: "体验",
  food: "吃喝",
  future: "未来",
  home: "居住",
  mind: "知识",
  mobility: "移动",
  relationship: "关系",
  time: "时间"
};

export const categoryHints = {
  body: "把钱换成低噪声的身体。",
  care: "把钱换成有人接住的时刻。",
  digital: "把钱换成看不见的容量、速度和默认权利。",
  durable: "把钱换成未来每天会碰到的物件。",
  experience: "把钱换成一段之后会被记住的时间。",
  food: "把钱换成当下、温度和口腔里的确定性。",
  future: "把钱换成选择余地。",
  home: "把钱换成可退回去的地方。",
  mind: "把钱换成解释世界的工具。",
  mobility: "把钱换成距离缩短。",
  relationship: "把钱换成被看见和一起在场。",
  time: "把钱换成不用亲手处理的小时。"
};

export const priceBands = {
  cn: [
    { id: "loose-change", label: "零钱", min: 0, max: 9 },
    { id: "small-ritual", label: "小仪式", min: 9, max: 39 },
    { id: "one-evening", label: "一晚", min: 39, max: 149 },
    { id: "one-day", label: "一天", min: 149, max: 599 },
    { id: "one-weekend", label: "周末", min: 599, max: 2999 },
    { id: "one-tool", label: "工具", min: 2999, max: 9999 },
    { id: "life-room", label: "余地", min: 9999, max: Number.POSITIVE_INFINITY }
  ],
  us: [
    { id: "loose-change", label: "Loose Change", min: 0, max: 6 },
    { id: "small-ritual", label: "Small Ritual", min: 6, max: 35 },
    { id: "one-evening", label: "One Evening", min: 35, max: 150 },
    { id: "one-day", label: "One Day", min: 150, max: 650 },
    { id: "one-weekend", label: "One Weekend", min: 650, max: 2500 },
    { id: "one-tool", label: "One Tool", min: 2500, max: 9000 },
    { id: "life-room", label: "Room To Move", min: 9000, max: Number.POSITIVE_INFINITY }
  ]
};

const cn = [
  item("cn-copy-page", "cn", "CNY", 1, "A4 黑白打印一页", "mind", "一块钱买到的是把一个想法从屏幕拉到桌面。", {
    buys: "很小，但它把抽象内容变成可以圈画、折角、递给别人的东西。",
    swap: "也可以是一颗糖、一次短信验证码、或网盘会员的半小时。",
    question: "你是真的需要纸，还是需要这个想法被认真对待？"
  }),
  item("cn-water-bottle", "cn", "CNY", 2, "便利店矿泉水", "body", "两块钱买到的是身体不再分心。", {
    buys: "它几乎没有叙事，但能迅速修掉口渴这个后台进程。",
    swap: "也可以是城市公交的一小段、几张照片的云端容量、或一页半打印。",
    question: "如果一个小不适只要两块钱就能停下，为什么要忍？"
  }),
  item("cn-subway-start", "cn", "CNY", 3, "城市地铁起步价", "mobility", "三块钱买到的是城市把一段距离替你折叠。", {
    buys: "你不是只买交通，你买的是不必向天气、拥堵和停车解释自己。",
    swap: "也可以是一瓶水加一页打印、或一小段共享单车时间。",
    question: "这段移动是在扩大生活半径，还是只是把疲惫搬到另一个地方？"
  }),
  item("cn-shared-bike", "cn", "CNY", 4, "共享单车半小时", "mobility", "四块钱买到的是微小的自主路线。", {
    buys: "它让你绕开等车和换乘，把城市重新变成身体可以协商的尺度。",
    swap: "也可以是两瓶水、一次文件打印、或外卖配送费的一半。",
    question: "你是在省钱，还是在给今天留一点掌控感？"
  }),
  item("cn-delivery-coupon", "cn", "CNY", 5, "外卖红包差价", "digital", "五块钱买到的是算法把某个选择推到你面前。", {
    buys: "它不改变食物本身，却改变你觉得哪顿饭划算。",
    swap: "也可以是一份青菜、一次共享单车、或五页打印。",
    question: "这五块钱是在帮你决定，还是替平台决定？"
  }),
  item("cn-vegetable-bunch", "cn", "CNY", 6, "一把青菜", "food", "六块钱买到的是晚饭里一点真实的绿色。", {
    buys: "它没有咖啡的仪式感，但会安静地改善一餐的质地。",
    swap: "也可以是两次地铁起步价、一个小红包差价、或几分钟云服务。",
    question: "你愿意为身体的普通维护付费，还是只为情绪的即时变化付费？"
  }),
  item("cn-rice-ball", "cn", "CNY", 8, "便利店饭团", "food", "八块钱买到的是不用做决定的一口碳水。", {
    buys: "它把饥饿、赶路和选择疲劳压成一个塑料包装。",
    swap: "也可以是两次共享单车、一个小工具月费的一天、或一份小水果。",
    question: "你买的是食物，还是买一个不需要想吃什么的中断？"
  }),
  item("cn-breakfast", "cn", "CNY", 10, "豆浆包子早餐", "food", "十块钱买到的是一天开始时的低成本稳定。", {
    buys: "它不惊艳，但能让上午不被血糖和烦躁牵着走。",
    swap: "也可以是三站地铁、一份电子书折扣、或网盘会员的十天折算。",
    question: "便宜的稳定感，为什么常常被我们低估？"
  }),
  item("cn-ai-small-quota", "cn", "CNY", 12, "一次 AI 工具小额额度", "digital", "十二块钱买到的是把半小时卡壳换成一次推进。", {
    buys: "它适合用于草稿、摘要、命名和把混乱变成下一步。",
    swap: "也可以是一份早餐加水、两把青菜、或几页认真打印。",
    question: "你需要答案，还是需要一个能帮你继续想的人造回声？"
  }),
  item("cn-express-pickup", "cn", "CNY", 15, "快递上门取件加价", "time", "十五块钱买到的是不用专门下楼和排队。", {
    buys: "它把一件小杂事从你的日程里拿走，价值常常藏在没有被打断的那半小时。",
    swap: "也可以是一次 AI 小额额度、一顿早餐加水、或几天网盘会员。",
    question: "小额便利到底是在偷懒，还是在保护注意力的连续性？"
  }),
  item("cn-budget-lunch", "cn", "CNY", 18, "工作日快餐午饭", "food", "十八块钱买到的是午间不要崩盘。", {
    buys: "它的价值常常不是好吃，而是让下午还有电。",
    swap: "也可以是一本特价电子书、半张电影票、或一次远一点的地铁来回。",
    question: "这顿饭是在补充能量，还是在奖励上午活下来了？"
  }),
  item("cn-ebook-deal", "cn", "CNY", 19, "一本特价电子书", "mind", "十九块钱买到的是一个陌生人的完整思路。", {
    buys: "如果读完，它可能比一顿午饭留得久；如果不读，它只是更体面的囤积。",
    swap: "也可以是一顿快餐、半杯好咖啡、或几天网盘会员。",
    question: "你买的是知识，还是买自己未来会读的幻想？"
  }),
  item("cn-baidu-netdisk-month", "cn", "CNY", 25, "百度网盘会员月卡", "digital", "二十五块钱买到的是等待时间被压扁。", {
    buys: "它不像咖啡那样有味道，但会在下载、备份和找文件时减少摩擦。",
    swap: "也可以是一杯连锁咖啡的八成、一顿简单午饭、或一束小花。",
    question: "你讨厌的是付费，还是讨厌为本该顺畅的东西付费？"
  }, ["cn-chain-coffee", "cn-after-work-flowers", "cn-ai-small-quota"]),
  item("cn-chain-coffee", "cn", "CNY", 30, "连锁咖啡一杯", "food", "三十块钱买到的是一个可以被命名的暂停。", {
    buys: "它可能不是咖啡因本身，而是杯子、店面、手感和一段像属于自己的时间。",
    swap: "也可以是一个月网盘会员、两顿早餐、或一次小额 AI 工具额度。",
    question: "如果这三十块钱没有杯子和香气，你还会觉得它值得吗？"
  }, ["cn-baidu-netdisk-month", "cn-ai-small-quota", "cn-after-work-flowers"]),
  item("cn-after-work-flowers", "cn", "CNY", 30, "下班路上的小束花", "relationship", "三十块钱买到的是家里有人注意到今天不一样。", {
    buys: "它没有功能，却能改变一张桌子的情绪，也改变你回家的姿态。",
    swap: "也可以是一杯咖啡、一个月云盘、或两份普通早餐。",
    question: "没有功能的东西，为什么有时更像真的在生活？"
  }),
  item("cn-light-bulb", "cn", "CNY", 35, "一只好灯泡", "home", "三十五块钱买到的是夜晚的疲劳下降一点。", {
    buys: "照明常常被忽略，但它每天都在影响心情、眼睛和效率。",
    swap: "也可以是一张折扣电影票、一杯咖啡加水、或一周早餐的差价。",
    question: "你是在买一个物件，还是在修复每天都会发生的环境？"
  }),
  item("cn-cinema-morning", "cn", "CNY", 39, "工作日电影票", "experience", "三十九块钱买到的是两个小时把手机交出去。", {
    buys: "影院的价值不只在片子，而在黑暗、音响和不可暂停。",
    swap: "也可以是一只灯泡、一次打车差价、或一本纸质书的半本。",
    question: "你想看电影，还是想获得一个无法被工作打断的房间？"
  }),
  item("cn-used-book", "cn", "CNY", 45, "一本二手纸书", "mind", "四十五块钱买到的是别人用过但还锋利的思想工具。", {
    buys: "二手书把价格降下来，也让知识带着一点前任读者的痕迹。",
    swap: "也可以是一张电影票、一顿加料午饭、或一次短距离打车。",
    question: "你需要全新，还是需要这个想法进入你的生活？"
  }),
  item("cn-ride-hailing", "cn", "CNY", 50, "一次短途打车", "time", "五十块钱买到的是不把力气花在路上。", {
    buys: "它可能比地铁贵很多，但在雨夜、行李和疲惫面前意义变了。",
    swap: "也可以是两个月云盘、一本二手书、或两杯普通咖啡。",
    question: "你是在买舒适，还是在赎回到达后的状态？"
  }),
  item("cn-fruit-box", "cn", "CNY", 58, "一盒好水果", "body", "五十八块钱买到的是把甜味和健康暂时握手言和。", {
    buys: "它比零食贵，却比很多情绪消费更直接照顾身体。",
    swap: "也可以是一次短途打车、两杯咖啡、或两个月网盘。",
    question: "当健康也能有愉悦感时，你还会把它归为苦差吗？"
  }),
  item("cn-phone-data-month", "cn", "CNY", 59, "手机流量月包", "digital", "五十九块钱买到的是不再心算还剩多少 G。", {
    buys: "它的作用是让网络从显性稀缺变成背景基础设施。",
    swap: "也可以是一盒水果、一次打车、或一本二手书加早餐。",
    question: "你需要更多流量，还是需要少一点被流量绑架的场景？"
  }),
  item("cn-meal-for-two", "cn", "CNY", 68, "两个人的简单晚饭", "relationship", "六十八块钱买到的是把关系从聊天框搬到桌边。", {
    buys: "食物只是介质，真正付费的是同步时间和共同注意力。",
    swap: "也可以是流量月包、一节入门课、或一张展览票。",
    question: "这笔钱是在买吃的，还是买彼此不用赶时间？"
  }),
  item("cn-one-hour-cleaning", "cn", "CNY", 80, "一小时上门保洁", "time", "八十块钱买到的是一个房间和一段不必亲手整理的时间。", {
    buys: "它常被认为奢侈，但本质是把体力活从你的周末里移出去。",
    swap: "也可以是展览门票、一次瑜伽课的折扣价、或三个月云盘。",
    question: "你愿意花钱买物品，为什么不愿意花钱买回周末？"
  }),
  item("cn-museum-ticket", "cn", "CNY", 88, "一次展览门票", "experience", "八十八块钱买到的是把一个下午交给陌生作品。", {
    buys: "它不保证开心，却会给大脑换一种光线和比例尺。",
    swap: "也可以是一小时保洁、一顿像样晚饭、或几本特价电子书。",
    question: "你是在消费内容，还是在给自己换一种注意力？"
  }),
  item("cn-notes-app-year", "cn", "CNY", 98, "笔记 App 年费", "digital", "九十八块钱买到的是一年里想法少丢一点。", {
    buys: "它没有实体，但会在灵感、清单和复盘之间降低保存成本。",
    swap: "也可以是一次展览、十顿早餐、或两本二手书。",
    question: "你买的是软件，还是买一种不再相信自己记忆的诚实？"
  }),
  item("cn-basic-lab-test", "cn", "CNY", 120, "一次基础化验", "body", "一百二十块钱买到的是对身体的一个低清晰度截图。", {
    buys: "它不如新衣服让人兴奋，但能把模糊担心变成可讨论的数字。",
    swap: "也可以是一年笔记 App、一次瑜伽课、或四杯咖啡。",
    question: "你愿意为未知焦虑付出多少隐形成本？"
  }),
  item("cn-yoga-dropin", "cn", "CNY", 128, "一次瑜伽/普拉提体验课", "body", "一百二十八块钱买到的是身体被重新校准一小时。", {
    buys: "它的价值不是朋友圈打卡，而是发现哪里紧、哪里塌、哪里太久没被照顾。",
    swap: "也可以是基础化验、一张展览票加咖啡、或一年的笔记 App。",
    question: "你把身体当交通工具，还是当需要维护的住处？"
  }),
  item("cn-online-course", "cn", "CNY", 149, "一门入门线上课", "mind", "一百四十九块钱买到的是把陌生领域打开一道门缝。", {
    buys: "课程的风险是买了不学；它的价值是把第一步的阻力降下来。",
    swap: "也可以是体验课、几次保洁、或五杯咖啡。",
    question: "你买的是学习，还是买一种准备开始的感觉？"
  }),
  item("cn-family-hotpot-gap", "cn", "CNY", 168, "家庭火锅升级差价", "relationship", "一百六十八块钱买到的是一顿饭从凑合变成有记忆点。", {
    buys: "这不是必要开支，却可能让同样的人和桌子变得更愿意停留。",
    swap: "也可以是一门课、一次体检项目、或半年的云盘。",
    question: "什么时候升级食材，其实是在升级一次相处？"
  }),
  item("cn-electric-toothbrush", "cn", "CNY", 199, "入门电动牙刷", "durable", "一百九十九块钱买到的是每天两分钟的自动提醒。", {
    buys: "它是小耐用品，价值来自高频、重复和少一点懒惰余地。",
    swap: "也可以是一顿家庭火锅差价、一门线上课、或六杯咖啡。",
    question: "如果一个物件每天用两次，它还算贵吗？"
  }),
  item("cn-city-day-trip", "cn", "CNY", 258, "周边城市一日游", "experience", "二百五十八块钱买到的是把同一天放进另一个城市。", {
    buys: "这笔钱里有车票、走路、陌生店面和回程时的轻微疲惫。",
    swap: "也可以是一把牙刷加电影、一年云盘、或两次运动体验。",
    question: "你需要远方，还是需要把惯性打断一天？"
  }),
  item("cn-baidu-svip-year", "cn", "CNY", 298, "云盘高级会员年费", "digital", "二百九十八块钱买到的是一年里更少等待下载条。", {
    buys: "它把一个月的犹豫变成全年默认，舒服但也更不容易被重新审视。",
    swap: "也可以是一次一日游、一个小家电、或十杯咖啡。",
    question: "年费让你省心，还是让你忘了自己仍在付钱？"
  }),
  item("cn-small-appliance", "cn", "CNY", 329, "一个小厨房电器", "home", "三百二十九块钱买到的是厨房里一个新流程。", {
    buys: "如果高频使用，它会改变早餐；如果闲置，它会占用台面来提醒你冲动。",
    swap: "也可以是一年云盘、一日游、或两次家庭餐升级。",
    question: "这个电器会进入日常，还是只进入想象中的自律生活？"
  }),
  item("cn-noise-earbuds", "cn", "CNY", 399, "入门降噪耳机", "durable", "三百九十九块钱买到的是在公共空间里临时关门。", {
    buys: "它真正买的是通勤、办公室和街道里的边界感。",
    swap: "也可以是一年云盘加咖啡、一件小家电、或几次保洁。",
    question: "你是在买声音，还是买不被环境随便占用？"
  }),
  item("cn-basic-checkup", "cn", "CNY", 499, "一次基础体检套餐", "body", "四百九十九块钱买到的是把健康从感觉改成清单。", {
    buys: "体检不能替你健康生活，但能让一些担心停止凭空发散。",
    swap: "也可以是一副耳机、一次周边游加晚饭、或一季度咖啡。",
    question: "你愿意为确定性付钱，还是继续用焦虑分期付款？"
  }),
  item("cn-train-ticket-near", "cn", "CNY", 560, "一张近程高铁票", "mobility", "五百六十块钱买到的是把远处的人变成当天可见。", {
    buys: "车票的价格不是距离本身，而是关系、机会和地理限制的折扣。",
    swap: "也可以是一次体检、一副耳机、或半天家政。",
    question: "这段距离值得去，还是只是因为可以去才想去？"
  }),
  item("cn-office-chair", "cn", "CNY", 699, "一把入门人体工学椅", "home", "六百九十九块钱买到的是腰背少替电脑工作买单。", {
    buys: "它不是酷装备，而是把长期坐着这件事变得少一点惩罚。",
    swap: "也可以是一张高铁票、一次心理咨询、或一年的几个小工具。",
    question: "你会为电脑升级，为什么不为坐在电脑前的人升级？"
  }),
  item("cn-therapy-session", "cn", "CNY", 800, "一次心理咨询", "care", "八百块钱买到的是有边界地把混乱说完。", {
    buys: "它不保证立刻好，但提供一个不会急着反驳你的结构化小时。",
    swap: "也可以是一把椅子、一次周末酒店、或二十多杯咖啡。",
    question: "当情绪需要专业时间时，你还会把它当作不该花的钱吗？"
  }),
  item("cn-exam-fee", "cn", "CNY", 900, "一次语言考试报名费", "mind", "九百块钱买到的是把一个未来选项正式放进日程。", {
    buys: "考试费常让学习从愿望变成倒计时，也让逃避更贵。",
    swap: "也可以是一次咨询、一晚酒店、或近两次体检。",
    question: "报名费是在买机会，还是买逼自己开始的压力？"
  }),
  item("cn-weekend-hotel", "cn", "CNY", 1000, "周末酒店一晚", "experience", "一千块钱买到的是把熟悉城市临时陌生化。", {
    buys: "不一定要远行，空间变化本身就能让关系和休息换一种脚本。",
    swap: "也可以是一次语言考试、一把椅子、或一整年云服务组合。",
    question: "你需要旅行，还是需要从原来的房间里离开一晚？"
  }),
  item("cn-mechanical-keyboard", "cn", "CNY", 1200, "一把高配键盘", "durable", "一千二百块钱买到的是每天输入时的手感仪式。", {
    buys: "如果你每天写很多字，它是工具；如果只为开箱，它是声音很好听的冲动。",
    swap: "也可以是一晚酒店、一次咨询加咖啡、或四年笔记 App。",
    question: "这个物件会增加产出，还是只增加桌面的自我想象？"
  }),
  item("cn-glasses", "cn", "CNY", 1500, "一副好眼镜", "body", "一千五百块钱买到的是醒着的大部分时间更清楚。", {
    buys: "它几乎贴在脸上工作，价格应该按每天使用次数重新计算。",
    swap: "也可以是一把键盘、两次咨询、或一个短途周末。",
    question: "离身体最近的工具，为什么常常最后才被升级？"
  }),
  item("cn-short-trip-couple", "cn", "CNY", 1800, "两个人短途周末", "relationship", "一千八百块钱买到的是两个人共同拥有一段新素材。", {
    buys: "它不只是旅游，而是给关系增加以后可以反复引用的片段。",
    swap: "也可以是一副眼镜、一把键盘加晚餐、或两次心理咨询。",
    question: "你们缺的是目的地，还是缺一段不会被日常打断的共同时间？"
  }),
  item("cn-midrange-phone", "cn", "CNY", 2500, "一部中端手机", "durable", "两千五百块钱买到的是每天被触摸最多的入口。", {
    buys: "它连接支付、地图、相机、社交和工作，真正价格要除以使用频率。",
    swap: "也可以是一次短途周末、一年很多小订阅、或三次咨询。",
    question: "手机升级是效率升级，还是焦虑换壳？"
  }),
  item("cn-laser-printer", "cn", "CNY", 3000, "一台家用激光打印机", "durable", "三千块钱买到的是把纸质输出权搬回家。", {
    buys: "它适合高频学习、合同、资料和家庭作业，让打印不再是一件出门的事。",
    swap: "也可以是一部手机的大半、一次家庭周末游、或一百杯咖啡。",
    question: "这台机器会减少摩擦，还是只是让家里多一个沉默的大盒子？"
  }),
  item("cn-used-camera", "cn", "CNY", 3500, "一台二手相机", "experience", "三千五百块钱买到的是用更慢的方式看东西。", {
    buys: "相机不是只买画质，也买按下快门之前的观察和选择。",
    swap: "也可以是一台打印机、一部中端手机、或几次短途旅行的预算。",
    question: "你要记录生活，还是要一个理由更认真地看生活？"
  }),
  item("cn-rent-room-month", "cn", "CNY", 4000, "二线城市单间月租", "home", "四千块钱买到的是一个月可关门的空间。", {
    buys: "租金是最日常的巨额消费，它购买隐私、通勤半径和每天醒来的背景。",
    swap: "也可以是一台相机、一百多杯咖啡、或一年很多服务会员。",
    question: "这间房是在支持你的生活，还是吞掉你的选择？"
  }),
  item("cn-laptop", "cn", "CNY", 5500, "一台主力笔记本电脑", "durable", "五千五百块钱买到的是一个可携带的工作台。", {
    buys: "对很多人来说，它不是电子产品，而是收入、学习和表达的接口。",
    swap: "也可以是一个多月房租、两部手机、或很多次跨城见面。",
    question: "这台电脑会扩大你的能力，还是只是让等待开机变少？"
  }),
  item("cn-domestic-vacation", "cn", "CNY", 8000, "国内旅行一周", "experience", "八千块钱买到的是让一周从日历里凸出来。", {
    buys: "旅行会消耗钱，也会重新校准你对日常的忍耐阈值。",
    swap: "也可以是一台电脑、两个月房租、或近三百杯咖啡。",
    question: "这趟旅行结束后，会留下什么改变你的日常？"
  }),
  item("cn-bootcamp", "cn", "CNY", 12000, "一个技能训练营", "mind", "一万二买到的是一段被外部结构包住的学习压力。", {
    buys: "高价课程的核心不是视频，而是节奏、同伴、作业和无法轻易退出。",
    swap: "也可以是一周旅行、三个月房租、或一台电脑加许多书。",
    question: "你需要内容，还是需要一个让你完成内容的系统？"
  }),
  item("cn-three-month-buffer", "cn", "CNY", 15000, "三个月基础生活缓冲", "future", "一万五买到的是拒绝坏选择的余地。", {
    buys: "这笔钱不产生照片，却能让你在换工作、生病或低谷时不立刻失去主动权。",
    swap: "也可以是一个训练营、两次旅行、或五百杯咖啡。",
    question: "没有被花掉的钱，为什么有时是最有力量的消费？"
  }),
  item("cn-home-appliance-set", "cn", "CNY", 18000, "一套关键家电", "home", "一万八买到的是家务系统的底盘。", {
    buys: "冰箱、洗衣机、空调这些东西不性感，但每天决定生活阻力。",
    swap: "也可以是三个月缓冲、一年房租的一部分、或一个训练营加电脑。",
    question: "你是在买家电，还是买一个更少被家务拖住的家？"
  }),
  item("cn-electric-scooter", "cn", "CNY", 25000, "一辆城市电动车", "mobility", "两万五买到的是日常半径的私人化。", {
    buys: "它把出行从公共时刻表里拿出来，但也带来停车、保养和安全责任。",
    swap: "也可以是一套家电、一年多很多小消费、或一段很厚的现金缓冲。",
    question: "这辆车会打开城市，还是只让你更快抵达同样的地方？"
  }),
  item("cn-family-health-year", "cn", "CNY", 30000, "一家人的年度健康预算", "care", "三万块买到的是把照护从临时反应改成系统安排。", {
    buys: "它可能包括检查、牙科、运动、咨询和给长辈的医疗预备金。",
    swap: "也可以是一辆电动车、两次训练营、或一千杯咖啡。",
    question: "当钱花在预防上看不见效果，你还愿意承认它有效吗？"
  }),
  item("cn-used-car-downpayment", "cn", "CNY", 50000, "一辆代步车首付", "mobility", "五万块买到的是把许多地点变成随时可达。", {
    buys: "车的首付只是入口，后面还有保险、停车、保养和对生活半径的新期待。",
    swap: "也可以是一年健康预算、三个月以上生活缓冲、或一次很大的学习转向。",
    question: "你买的是移动自由，还是买一串新的固定成本？"
  }),
  item("cn-gap-year-simple", "cn", "CNY", 80000, "一段低成本空档年", "future", "八万块买到的是暂时不被下一份安排追着跑。", {
    buys: "它不是逃避，而是给重选方向、学习、照护和恢复留出真实空间。",
    swap: "也可以是一辆车的首付加维护、一家人两年健康预算、或很多次旅行。",
    question: "当时间本身被买下来，你会拿它做什么？"
  }),
  item("cn-small-city-downpayment", "cn", "CNY", 150000, "小城市住房首付的一部分", "home", "十五万买到的是把居住从漂浮感推向长期承诺。", {
    buys: "它不是完整的家，却会开始绑定地点、工作、家庭预期和未来现金流。",
    swap: "也可以是近两段空档年、很多年的订阅和咖啡、或一套重启生活的缓冲。",
    question: "这笔钱是在买稳定，还是在提前支付一种人生叙事？"
  })
];

const us = [
  item("us-print-page", "us", "USD", 0.25, "Library print page", "mind", "A quarter buys a thought a physical edge.", {
    buys: "It turns a file into something you can mark, fold, hand over, or lose in a bag.",
    swap: "It could also be a few megabytes of cloud storage, a tiny fee, or part of a bus ride.",
    question: "Do you need the paper, or do you need the idea to become harder to ignore?"
  }),
  item("us-banana", "us", "USD", 0.75, "One banana", "food", "Seventy-five cents buys the most boring useful snack.", {
    buys: "No brand story, no app, just portable energy that solves a small body problem.",
    swap: "It could also be three printed pages, part of a transit fare, or a vending-machine discount.",
    question: "Why does useful food feel less exciting than useful software?"
  }),
  item("us-water", "us", "USD", 1.5, "Bottled water", "body", "A dollar fifty buys the end of a background complaint.", {
    buys: "The value is not the bottle; it is removing thirst from the list of things asking for attention.",
    swap: "It could also be two bananas, a stack of printed pages, or half a month of basic cloud storage.",
    question: "When a small physical problem is cheap to fix, why keep negotiating with it?"
  }),
  item("us-bus-ride", "us", "USD", 2.75, "City bus ride", "mobility", "Two seventy-five buys the city agreeing to move with you.", {
    buys: "It is distance without parking, gas, or a private machine attached to the decision.",
    swap: "It could also be a basic cloud month, two bottles of water, or a cheap diner coffee.",
    question: "Is this ride expanding your day, or just moving fatigue somewhere else?"
  }),
  item("us-cloud-storage-month", "us", "USD", 2.99, "Basic cloud storage month", "digital", "Three dollars buys quiet confidence that a few files will still be there.", {
    buys: "It is invisible until something breaks, which is why it feels stranger than coffee.",
    swap: "It could also be a bus ride, a diner coffee, or four bananas.",
    question: "Do you dislike paying for storage, or paying for anxiety to disappear?"
  }, ["us-specialty-coffee", "us-bus-ride", "us-diner-coffee"]),
  item("us-diner-coffee", "us", "USD", 3.5, "Diner coffee", "food", "Three fifty buys warmth, caffeine, and permission to sit.", {
    buys: "The mug is ordinary, but the table and refill make it a small public room.",
    swap: "It could also be a cloud month, a bus ride plus a print page, or several bananas.",
    question: "Are you buying coffee, or renting a gentle pause?"
  }),
  item("us-specialty-coffee", "us", "USD", 5.5, "Specialty coffee", "food", "Five fifty buys a small ceremony around alertness.", {
    buys: "A better cup can be taste, identity, neighborhood habit, or a portable mood shift.",
    swap: "It could also be nearly two cloud months, a cheap streaming day, or a grocery staple.",
    question: "If the same dollars bought invisible convenience, would they feel less real?"
  }, ["us-cloud-storage-month", "us-streaming-ads", "us-bus-ride"]),
  item("us-library-hold", "us", "USD", 6, "Library late fee cleared", "mind", "Six dollars buys your way back into a public resource.", {
    buys: "The payment is less about punishment than reopening access to books, rooms, and quiet.",
    swap: "It could also be a specialty coffee, two bus rides, or a week of cloud storage.",
    question: "Is this a fee, or a tiny repair to a relationship with a shared institution?"
  }),
  item("us-fast-breakfast", "us", "USD", 7, "Fast breakfast", "food", "Seven dollars buys a morning that does not start from zero.", {
    buys: "It is practical energy dressed as convenience, especially when time is already thin.",
    swap: "It could also be a streaming month with ads, a library fee, or two diner coffees.",
    question: "Are you feeding yourself, or outsourcing the first decision of the day?"
  }),
  item("us-streaming-ads", "us", "USD", 8.99, "Ad-supported streaming month", "digital", "Nine dollars buys a month of default evening options.", {
    buys: "It looks cheap because the units are episodes, not hours of attention.",
    swap: "It could also be breakfast, two coffees, or several bus rides.",
    question: "When entertainment becomes the default, is it still a choice?"
  }),
  item("us-urban-lunch", "us", "USD", 14, "Urban weekday lunch", "food", "Fourteen dollars buys not crashing between meetings.", {
    buys: "Lunch often purchases enough steadiness to finish the day more than it purchases pleasure.",
    swap: "It could also be a paperback, a week of transit, or a month of basic storage plus coffee.",
    question: "Would you judge this differently if it were called a productivity expense?"
  }),
  item("us-used-paperback", "us", "USD", 15, "Used paperback", "mind", "Fifteen dollars buys a stranger's organized attention.", {
    buys: "The value depends on whether the book enters your thinking or just your shelf.",
    swap: "It could also be lunch, a streaming month, or three specialty coffees.",
    question: "Are you buying a book, or buying the hope that you will become the kind of person who reads it?"
  }),
  item("us-gym-day-pass", "us", "USD", 20, "Gym day pass", "body", "Twenty dollars buys access to a room built for effort.", {
    buys: "It can be a workout, a shower, a mood reset, or proof that your body is still negotiable.",
    swap: "It could also be a book, lunch, or two streaming months.",
    question: "Do you need equipment, or do you need a place where effort is socially normal?"
  }),
  item("us-budget-haircut", "us", "USD", 28, "Budget haircut", "body", "Twenty-eight dollars buys a face that feels reset.", {
    buys: "It changes how mirrors, photos, and first impressions talk back to you.",
    swap: "It could also be a gym pass plus coffee, two lunches, or three streaming months.",
    question: "Why does maintenance feel vain when it changes how you move through the day?"
  }),
  item("us-meal-kit", "us", "USD", 35, "Two-serving meal kit", "time", "Thirty-five dollars buys dinner with the planning removed.", {
    buys: "You still cook, but the shopping, portion math, and recipe search are gone.",
    swap: "It could also be a haircut, several coffees, or a week of bus rides.",
    question: "Are you buying food, or buying relief from deciding what food should become?"
  }),
  item("us-ride-share", "us", "USD", 40, "Short ride-share trip", "time", "Forty dollars buys arrival without the small battles around it.", {
    buys: "In bad weather, late nights, luggage, or exhaustion, the same miles become a different product.",
    swap: "It could also be a meal kit, a haircut, or many bus rides.",
    question: "Are you paying for comfort, safety, speed, or the person you will be when you arrive?"
  }),
  item("us-flowers", "us", "USD", 45, "Small bouquet", "relationship", "Forty-five dollars buys a room noticing that someone cared.", {
    buys: "No utility, and that is part of the point; it is attention made visible.",
    swap: "It could also be a ride-share, a meal kit, or half a therapy copay.",
    question: "Why does useless beauty sometimes feel more truthful than useful stuff?"
  }),
  item("us-gas-tank", "us", "USD", 55, "Partial gas tank", "mobility", "Fifty-five dollars buys a private radius for the week.", {
    buys: "Fuel is not glamorous, but it turns errands, visits, and obligations into reachable things.",
    swap: "It could also be flowers, a ride-share, or several streaming months.",
    question: "Is this fuel buying freedom, or maintaining a system you cannot easily leave?"
  }),
  item("us-therapy-copay", "us", "USD", 80, "Therapy copay", "care", "Eighty dollars buys a protected hour for the unsorted parts.", {
    buys: "The price is for structure, privacy, and someone trained not to rush your conclusion.",
    swap: "It could also be a gas tank plus coffee, two bouquets, or a nice dinner's base cost.",
    question: "When attention is professional, why does paying for it feel morally different?"
  }),
  item("us-dinner-two", "us", "USD", 100, "Dinner for two", "relationship", "One hundred dollars buys shared time with dishes as the excuse.", {
    buys: "The food matters, but the real product is synchronized attention and a memory anchor.",
    swap: "It could also be a therapy copay, a gas tank, or many small subscriptions.",
    question: "Would this feel cheaper if it produced an object instead of a better evening?"
  }),
  item("us-note-app-year", "us", "USD", 120, "Annual notes app", "digital", "One twenty buys a year of fewer lost thoughts.", {
    buys: "It is not just software; it is a promise that the fragments have somewhere to land.",
    swap: "It could also be dinner for two, therapy plus coffee, or eight paperbacks.",
    question: "Are you buying organization, or admitting memory is not a storage strategy?"
  }),
  item("us-noise-earbuds", "us", "USD", 180, "Noise-canceling earbuds", "durable", "One eighty buys a door you can close in public.", {
    buys: "The product is sound control, but the deeper purchase is boundaries on trains, sidewalks, and offices.",
    swap: "It could also be a notes app plus dinner, two therapy copays, or many coffees.",
    question: "Are you buying audio quality, or buying back your attention?"
  }),
  item("us-online-course", "us", "USD", 250, "Online course", "mind", "Two fifty buys a structured first step into a new skill.", {
    buys: "The videos are not the hard part; the hard part is borrowing enough structure to continue.",
    swap: "It could also be earbuds, two annual apps, or several dinners.",
    question: "Do you need information, or a path that makes quitting feel less natural?"
  }),
  item("us-used-bike", "us", "USD", 300, "Used bike", "mobility", "Three hundred buys local distance without a gas tank.", {
    buys: "A bike changes the shape of errands and gives the body a say in transportation.",
    swap: "It could also be a course, earbuds plus books, or several ride-shares.",
    question: "Does this buy movement, exercise, identity, or a new map of nearby places?"
  }),
  item("us-basic-checkup", "us", "USD", 350, "Basic health check", "body", "Three fifty buys a rough map of what your body will not say clearly.", {
    buys: "It can turn vague worry into numbers, follow-ups, and fewer invented explanations.",
    swap: "It could also be a used bike, a course, or three dinners.",
    question: "How much are you already paying in anxiety for not checking?"
  }),
  item("us-domestic-flight", "us", "USD", 450, "Domestic round-trip flight", "mobility", "Four fifty buys a relationship with distance temporarily suspended.", {
    buys: "Flights are not just travel; they make faraway people and opportunities feel current again.",
    swap: "It could also be a checkup, a bike plus coffee, or several therapy copays.",
    question: "Is this trip about the destination, or about refusing to let distance decide?"
  }),
  item("us-weekend-hotel", "us", "USD", 500, "Weekend hotel night", "experience", "Five hundred buys a room where routine cannot find you immediately.", {
    buys: "The bed, lobby, and unfamiliar light can change how rest and relationships behave.",
    swap: "It could also be a flight, a health check plus dinner, or months of small subscriptions.",
    question: "Do you need a vacation, or one night outside the script?"
  }),
  item("us-mattress", "us", "USD", 700, "Decent mattress", "home", "Seven hundred buys a daily negotiation with sleep.", {
    buys: "Few purchases touch as many hours without being visible in public.",
    swap: "It could also be a hotel weekend, two checkups, or several online courses.",
    question: "If you use it one third of your life, how should that change the price?"
  }),
  item("us-phone", "us", "USD", 1000, "Main smartphone", "durable", "One thousand buys the remote control for modern life.", {
    buys: "Payment, camera, maps, work, love, and boredom all pass through the same rectangle.",
    swap: "It could also be a mattress plus dinner, two hotel nights, or a year of many services.",
    question: "Is the upgrade buying capability, or just making your dependency shinier?"
  }),
  item("us-laptop", "us", "USD", 1400, "Primary laptop", "durable", "Fourteen hundred buys a portable place to think and earn.", {
    buys: "For many people, it is not electronics; it is the interface to work, study, and making things.",
    swap: "It could also be a phone, two mattresses, or a meaningful travel fund.",
    question: "Will this machine expand what you can do, or only reduce small annoyances?"
  }),
  item("us-room-rent", "us", "USD", 1600, "One month room rent", "home", "Sixteen hundred buys a door, an address, and a default place to return.", {
    buys: "Rent silently buys commute, privacy, safety, and the emotional weather of every morning.",
    swap: "It could also be a laptop, a phone plus therapy, or a full stack of smaller comforts.",
    question: "Is this room supporting your life, or eating the choices your life needs?"
  }),
  item("us-dental-crown", "us", "USD", 1800, "Dental crown", "body", "Eighteen hundred buys one tooth leaving the crisis category.", {
    buys: "It is expensive because deferred maintenance eventually stops being optional.",
    swap: "It could also be rent, a laptop, or many dinners and coffees.",
    question: "When prevention fails, why does repair suddenly feel like the real price?"
  }),
  item("us-family-vacation", "us", "USD", 3500, "Family vacation week", "experience", "Thirty-five hundred buys a week that can become family mythology.", {
    buys: "The value is not only where you go, but the shared story everyone can reuse later.",
    swap: "It could also be two months rent, two laptops, or years of small memberships.",
    question: "What part of this trip will still exist after the photos are ignored?"
  }),
  item("us-used-car-downpayment", "us", "USD", 5000, "Used car down payment", "mobility", "Five thousand buys entry into a private transportation system.", {
    buys: "It opens distance, but also starts insurance, maintenance, fuel, and a new set of defaults.",
    swap: "It could also be a family vacation, several months rent, or a serious emergency buffer.",
    question: "Is this freedom, or a subscription with wheels?"
  }),
  item("us-college-semester", "us", "USD", 7000, "Community college semester", "mind", "Seven thousand buys a formal attempt to change your options.", {
    buys: "Tuition purchases structure, credential signals, deadlines, and access to people who grade the work.",
    swap: "It could also be a car down payment, months of rent, or a long travel reset.",
    question: "Are you paying for knowledge, permission, network, or a new identity?"
  }),
  item("us-emergency-buffer", "us", "USD", 10000, "Emergency buffer", "future", "Ten thousand buys the ability to say no before panic says yes.", {
    buys: "It has no photo, but it changes jobs, health scares, repairs, and family obligations.",
    swap: "It could also be a semester, two car down payments, or many months of small joys.",
    question: "Why does unspent money sometimes buy more freedom than any object?"
  }),
  item("us-used-car", "us", "USD", 18000, "Reliable used car", "mobility", "Eighteen thousand buys a geography that follows your schedule.", {
    buys: "The car is a tool, status signal, obligation, and monthly risk all at once.",
    swap: "It could also be an emergency buffer plus tuition, many months of rent, or several vacations.",
    question: "Which destinations become possible, and which fixed costs become unavoidable?"
  }),
  item("us-small-wedding", "us", "USD", 25000, "Small wedding", "relationship", "Twenty-five thousand buys a public ritual around private commitment.", {
    buys: "It is food, venue, clothes, photos, family diplomacy, and a story about what the day means.",
    swap: "It could also be a used car, a large emergency buffer, or years of travel and therapy.",
    question: "What part of the ritual strengthens the relationship, and what part performs it?"
  }),
  item("us-grad-semester", "us", "USD", 35000, "Graduate school semester", "mind", "Thirty-five thousand buys a high-stakes bet on future leverage.", {
    buys: "It can be credential, network, time to specialize, or an expensive way to delay a decision.",
    swap: "It could also be a wedding, a car plus buffer, or a year of lower-cost experiments.",
    question: "Is this tuition buying a path, or buying the feeling that a path exists?"
  }),
  item("us-house-downpayment", "us", "USD", 80000, "Home down payment slice", "home", "Eighty thousand buys a claim on stability with a long tail attached.", {
    buys: "The money begins a relationship with place, debt, maintenance, neighbors, and future plans.",
    swap: "It could also be graduate school, multiple buffers, years of rent, or a very different life design.",
    question: "Is this stability, or the most socially approved way to concentrate risk?"
  })
];

export const catalogs = { cn, us };

export function getCatalog(region = "cn") {
  if (!catalogs[region]) {
    throw new Error(`Unknown region: ${region}`);
  }

  return [...catalogs[region]].sort((left, right) => left.price - right.price);
}

export function filterCatalog(items, { budget = Number.POSITIVE_INFINITY, categories = [], query = "" } = {}) {
  const selectedCategories = new Set(categories);
  const normalizedQuery = query.trim().toLowerCase();

  return [...items]
    .filter((item) => item.price <= budget)
    .filter((item) => selectedCategories.size === 0 || selectedCategories.has(item.category))
    .filter((item) => {
      if (!normalizedQuery) return true;
      return [item.title, item.meaning, categoryLabels[item.category], item.details.buys, item.details.swap]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery);
    })
    .sort((left, right) => left.price - right.price);
}

export function priceToPercent(price, min, max) {
  if (!Number.isFinite(price) || price <= 0) return 0;
  const safeMin = Math.max(0.01, min);
  const safeMax = Math.max(safeMin, max);
  const clamped = Math.min(Math.max(price, safeMin), safeMax);
  const minLog = Math.log10(safeMin);
  const maxLog = Math.log10(safeMax);

  if (maxLog === minLog) return 0;
  return Math.round(((Math.log10(clamped) - minLog) / (maxLog - minLog)) * 10000) / 100;
}

export function getEquivalenceSet(items, targetId, limit = 4) {
  const target = items.find((item) => item.id === targetId);
  if (!target) return [];

  const byId = new Map(items.map((item) => [item.id, item]));
  const hinted = (target.linkedIds ?? [])
    .map((id) => byId.get(id))
    .filter(Boolean)
    .filter((item) => item.category !== target.category);

  const nearby = items
    .filter((item) => item.id !== target.id)
    .filter((item) => item.category !== target.category)
    .filter((item) => Math.abs(Math.log(item.price / target.price)) <= Math.log(1.85))
    .sort((left, right) => {
      const leftDistance = Math.abs(Math.log(left.price / target.price));
      const rightDistance = Math.abs(Math.log(right.price / target.price));
      return leftDistance - rightDistance || left.price - right.price;
    });

  return uniqueById([...hinted, ...nearby]).slice(0, limit);
}

export function getBandForPrice(region, price) {
  const bands = priceBands[region] ?? priceBands.cn;
  return bands.find((band) => price >= band.min && price < band.max) ?? bands.at(-1);
}

export function formatMoney(itemOrRegion, price) {
  const region = typeof itemOrRegion === "string" ? itemOrRegion : itemOrRegion.region;
  const amount = typeof itemOrRegion === "string" ? price : itemOrRegion.price;

  if (region === "us") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: amount < 10 ? 2 : 0
    }).format(amount);
  }

  return new Intl.NumberFormat("zh-CN", {
    style: "currency",
    currency: "CNY",
    maximumFractionDigits: amount < 10 ? 2 : 0
  }).format(amount);
}

export function validateCatalog(region = "cn") {
  const errors = [];
  const ids = new Set();
  const expectedCurrency = region === "us" ? "USD" : "CNY";

  for (const item of getCatalog(region)) {
    if (!item.id) errors.push("missing id");
    if (ids.has(item.id)) errors.push(`duplicate id: ${item.id}`);
    ids.add(item.id);

    if (item.region !== region) errors.push(`${item.id}: wrong region`);
    if (item.currency !== expectedCurrency) errors.push(`${item.id}: wrong currency`);
    if (!Number.isFinite(item.price) || item.price <= 0) errors.push(`${item.id}: invalid price`);
    if (!categoryLabels[item.category]) errors.push(`${item.id}: unknown category ${item.category}`);
    if (!item.title || item.title.length < 2) errors.push(`${item.id}: missing title`);
    if (!item.meaning || item.meaning.includes("\n") || item.meaning.length < 12) {
      errors.push(`${item.id}: meaning must be one substantial line`);
    }
    for (const field of ["buys", "swap", "question"]) {
      if (!item.details?.[field] || item.details[field].length < 12) {
        errors.push(`${item.id}: missing details.${field}`);
      }
    }
  }

  return errors;
}

function item(id, region, currency, price, title, category, meaning, details, linkedIds = []) {
  return {
    id,
    region,
    currency,
    price,
    title,
    category,
    meaning,
    details,
    linkedIds
  };
}

function uniqueById(items) {
  const seen = new Set();
  const result = [];

  for (const item of items) {
    if (seen.has(item.id)) continue;
    seen.add(item.id);
    result.push(item);
  }

  return result;
}
