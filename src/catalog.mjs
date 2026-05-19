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
  time: "时间",
  appearance: "形象",
  work: "工作"
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
  time: "把钱换成不用亲手处理的小时。",
  appearance: "把钱换成被看见之前的自我确认。",
  work: "把钱换成能力、机会和可交付结果。"
};

export const profiles = {
  cn: [
    {
      id: "builder",
      label: "做事的人",
      sensitivity: "medium",
      line: "奖励最好能变成作品、工具、学习曲线或更稳的工作流。",
      weights: {
        capacity: 1.7,
        tool: 1.55,
        work: 1.55,
        learning: 1.35,
        focus: 1.25,
        future: 1.2,
        quick: -0.7,
        novelty: -0.5,
        hope: -0.35
      }
    },
    {
      id: "appearance",
      label: "想体面出现",
      sensitivity: "high",
      line: "奖励要能改善脸、衣服、气味、状态，或让自己更愿意出门。",
      weights: {
        appearance: 1.7,
        confidence: 1.45,
        body: 1.25,
        daily: 1.15,
        identity: 0.9,
        control: 0.55,
        novelty: -0.35,
        quick: -0.35
      }
    },
    {
      id: "safe",
      label: "想要安全感",
      sensitivity: "low",
      line: "奖励不是刺激，而是未来的自己不会被一点坏事打穿。",
      weights: {
        future: 1.8,
        buffer: 1.7,
        care: 1.45,
        body: 1.25,
        home: 1.1,
        debt: -1.4,
        quick: -0.7,
        novelty: -0.5
      }
    },
    {
      id: "relationship",
      label: "在乎关系",
      sensitivity: "medium",
      line: "奖励应该变成见面、照护、共同记忆，或被具体看见。",
      weights: {
        relationship: 1.8,
        memory: 1.45,
        care: 1.35,
        social: 0.65,
        experience: 0.55,
        quick: -0.55,
        novelty: -0.25
      }
    },
    {
      id: "quiet",
      label: "需要安静",
      sensitivity: "low",
      line: "奖励要减少噪声、通勤、家务、疼痛和注意力破碎。",
      weights: {
        focus: 1.8,
        time: 1.45,
        body: 1.25,
        home: 1.2,
        tool: 1.15,
        attention: -0.9,
        social: -0.35,
        quick: -0.35
      }
    },
    {
      id: "play",
      label: "认真玩",
      sensitivity: "medium",
      line: "奖励可以是游戏、演出和旅行，但要留下体验，而不是只留下下一次充值。",
      weights: {
        game: 1.25,
        experience: 1.45,
        memory: 1.35,
        relationship: 0.85,
        depth: 1.1,
        hope: -0.85,
        quick: -0.45
      }
    }
  ],
  us: [
    {
      id: "builder",
      label: "Builder",
      sensitivity: "medium",
      line: "Prefer tools, skill, focus, and future optionality.",
      weights: { capacity: 1.6, tool: 1.4, work: 1.4, future: 1.2, quick: -0.6 }
    },
    {
      id: "safe",
      label: "Safety",
      sensitivity: "low",
      line: "Prefer buffers, health, repairs, and lower future risk.",
      weights: { future: 1.7, buffer: 1.6, body: 1.3, care: 1.25, debt: -1.2 }
    }
  ]
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

cn.push(
  item("cn-luckin-week", "cn", "CNY", 70, "瑞幸一周 9.9/生椰拿铁券", "food", "七十块钱买到的是一周里每天有一个很快的奖励。", {
    buys: "它很轻，也很顺手：下单、取杯、拍照、继续工作。真正被购买的是每天一次被允许休息的感觉。",
    swap: "也可以是一周水果、一节 Keep 体验课、两个月云盘，或一本真正会读完的书。",
    question: "这杯咖啡是在奖励你，还是在把真正想要的奖励拆成七次小麻醉？"
  }, ["cn-keep-month", "cn-used-book"], { lens: "mixed", truthScore: 3, rewardTags: ["ritual", "mood", "quick"], sensitivity: "medium", brand: "瑞幸" }),
  item("cn-nayuki-tea", "cn", "CNY", 33, "奈雪/喜茶一杯新茶饮", "food", "三十三块钱买到的是口味、包装和今天还不错的幻觉。", {
    buys: "这不是只买糖水，它买到的是城市年轻人的小仪式：新品、联名、杯套、社交平台上的一个可说之物。",
    swap: "也可以是一顿早餐加水果、半本电子书、或一张生活用品清单上的小缺口。",
    question: "如果去掉新品感和社交感，这三十三块还剩下多少是真的？"
  }, ["cn-chain-coffee", "cn-baidu-netdisk-month"], { lens: "attention", truthScore: 2, rewardTags: ["mood", "social", "quick"], sensitivity: "medium", brand: "奈雪/喜茶" }),
  item("cn-starbucks-frap", "cn", "CNY", 39, "星巴克星冰乐/拿铁", "food", "三十九块钱买到的是一个熟悉品牌替你定义的休息。", {
    buys: "它稳定、好进入、也很会把疲惫包装成一个体面的选择。",
    swap: "也可以是一张电影早场票、一只好灯泡、或近两周普通云服务。",
    question: "你是在选择咖啡，还是在选择一个不用解释的消费姿势？"
  }, ["cn-light-bulb", "cn-cinema-morning"], { lens: "mixed", truthScore: 3, rewardTags: ["ritual", "space", "mood"], sensitivity: "medium", brand: "星巴克" }),
  item("cn-heytea-merch", "cn", "CNY", 59, "茶饮联名杯套/周边", "relationship", "五十九块钱买到的是一种参与流行的凭证。", {
    buys: "它可能可爱，也可能三天后就被塞进抽屉。真正的价格在于你是否需要它替今天产生一点兴奋。",
    swap: "也可以是一盒水果、手机流量月包、或一小时通勤里的降噪平替。",
    question: "这件周边会进入生活，还是只进入拆封那一刻？"
  }, ["cn-fruit-box", "cn-phone-data-month"], { lens: "attention", truthScore: 2, rewardTags: ["social", "novelty", "aesthetic"], sensitivity: "high", brand: "茶饮联名" }),
  item("cn-bilibili-year", "cn", "CNY", 148, "B 站大会员年费活动价", "digital", "一百四十八块钱买到的是一年里更顺手的内容入口。", {
    buys: "它会减少广告、解锁番剧，也可能把更多夜晚交给默认播放。",
    swap: "也可以是一门入门课、一次运动体验、或五杯三十元咖啡。",
    question: "你买的是高质量内容，还是买一个更难退出的晚上？"
  }, ["cn-online-course", "cn-yoga-dropin"], { lens: "mixed", truthScore: 3, rewardTags: ["content", "comfort", "attention"], sensitivity: "medium", brand: "哔哩哔哩" }),
  item("cn-tencent-video-year", "cn", "CNY", 198, "腾讯/爱奇艺会员年卡活动价", "digital", "一百九十八块钱买到的是很多晚上的可选项。", {
    buys: "它很划算，也很会让你觉得“反正已经买了”。",
    swap: "也可以是一把电动牙刷、一顿家庭餐升级、或两次认真独处的外出。",
    question: "会员让生活更丰富，还是让空白时间更难出现？"
  }, ["cn-electric-toothbrush", "cn-family-hotpot-gap"], { lens: "mixed", truthScore: 3, rewardTags: ["content", "comfort", "attention"], sensitivity: "medium", brand: "长视频会员" }),
  item("cn-netease-cloud-year", "cn", "CNY", 158, "网易云音乐黑胶年卡", "digital", "一百五十八块钱买到的是把情绪交给歌单管理。", {
    buys: "音乐服务很真实：通勤、洗澡、工作、崩溃前后，它都在。",
    swap: "也可以是一门入门课、一周咖啡、或一个可以改善睡眠的小物件。",
    question: "音乐是在陪你感受生活，还是在替你跳过生活？"
  }, ["cn-online-course", "cn-luckin-week"], { lens: "mixed", truthScore: 4, rewardTags: ["mood", "daily", "comfort"], sensitivity: "low", brand: "网易云音乐" }),
  item("cn-qq-music-year", "cn", "CNY", 168, "QQ 音乐绿钻年卡", "digital", "一百六十八块钱买到的是一年里更完整的声音库存。", {
    buys: "它不像实物，但如果你每天听歌，它会悄悄进入日常质量。",
    swap: "也可以是家庭火锅升级差价、一次课程、或几次小额冲动消费。",
    question: "这是被你高频使用的基础设施，还是只是不想被灰掉的歌单？"
  }, ["cn-family-hotpot-gap", "cn-online-course"], { lens: "true", truthScore: 4, rewardTags: ["daily", "mood", "comfort"], sensitivity: "low", brand: "QQ 音乐" }),
  item("cn-xiaohongshu-outfit", "cn", "CNY", 399, "小红书种草的一套通勤穿搭", "appearance", "三百九十九块钱买到的是“我也可以这样出现”的想象。", {
    buys: "穿搭可能非常真：它改变别人看你，也改变你进门时的底气。但种草消费常常把完整的人生压成一张图。",
    swap: "也可以是一副降噪耳机、几次保洁、一年云盘加几本书。",
    question: "这套衣服会被你反复穿，还是只是在购买一个被看见的版本？"
  }, ["cn-noise-earbuds", "cn-one-hour-cleaning"], { lens: "mixed", truthScore: 3, rewardTags: ["appearance", "confidence", "social"], sensitivity: "high", brand: "小红书种草" }),
  item("cn-taobao-impulse-cart", "cn", "CNY", 268, "淘宝凑单后的杂物购物车", "durable", "二百六十八块钱买到的是很多个“好像有用”。", {
    buys: "收纳盒、桌搭、香薰、数据线、衣架、杯子，它们每个都不荒唐，但合在一起可能只是注意力的碎片账单。",
    swap: "也可以是一次周边游、一年云服务、或一件真正高频使用的工具。",
    question: "这车东西在解决问题，还是在制造一种生活快要变好的错觉？"
  }, ["cn-city-day-trip", "cn-baidu-svip-year"], { lens: "attention", truthScore: 2, rewardTags: ["novelty", "control", "home"], sensitivity: "high", brand: "淘宝" }),
  item("cn-jd-618-small-appliance", "cn", "CNY", 699, "京东 618 小家电升级", "home", "六百九十九块钱买到的是把“以后会自律”放进厨房。", {
    buys: "空气炸锅、咖啡机、破壁机都有可能真有用；关键是它们会不会进入每周三次以上的日常。",
    swap: "也可以是一把人体工学椅、一次心理咨询、或九个月音乐/视频会员。",
    question: "它是流程升级，还是一次对理想生活的预付款？"
  }, ["cn-office-chair", "cn-therapy-session"], { lens: "mixed", truthScore: 3, rewardTags: ["home", "health", "routine"], sensitivity: "medium", brand: "京东 618" }),
  item("cn-pinduoduo-fun-box", "cn", "CNY", 49, "拼多多快乐小件", "durable", "四十九块钱买到的是便宜到不必想清楚的快乐。", {
    buys: "它的厉害之处是低价把判断力绕开：不贵，所以无需认真；无需认真，所以很容易买很多。",
    swap: "也可以是一本二手书、一次短途打车、或两顿早餐。",
    question: "便宜是不是也会很贵，只是贵在注意力和空间？"
  }, ["cn-used-book", "cn-ride-hailing"], { lens: "attention", truthScore: 2, rewardTags: ["novelty", "quick", "control"], sensitivity: "high", brand: "拼多多" }),
  item("cn-douyin-live-order", "cn", "CNY", 129, "抖音直播间冲动下单", "durable", "一百二十九块钱买到的是主播替你制造的紧迫感。", {
    buys: "你买到的不只是商品，还有倒计时、库存、赠品和“现在不买就亏了”的情绪结构。",
    swap: "也可以是一次基础化验、体验课、或一整年的某个高频软件。",
    question: "如果没有倒计时和话术，你还会把它放进购物清单吗？"
  }, ["cn-basic-lab-test", "cn-yoga-dropin"], { lens: "attention", truthScore: 1, rewardTags: ["novelty", "social", "quick"], sensitivity: "high", brand: "抖音直播" }),
  item("cn-meituan-coupon-stack", "cn", "CNY", 88, "美团团购囤券", "food", "八十八块钱买到的是未来某天好像会用上的优惠。", {
    buys: "优惠券很像一种低价承诺：你以为锁定了划算，其实也锁定了之后的选择。",
    swap: "也可以是展览门票、一小时保洁、或几天真正舒服的早餐。",
    question: "你是在省钱，还是在提前把自己带向某个消费场景？"
  }, ["cn-museum-ticket", "cn-one-hour-cleaning"], { lens: "attention", truthScore: 2, rewardTags: ["deal", "food", "planning"], sensitivity: "high", brand: "美团" }),
  item("cn-eleme-night-snack", "cn", "CNY", 42, "饿了么夜宵外卖", "food", "四十二块钱买到的是深夜不想处理自己的瞬间。", {
    buys: "夜宵有时是饥饿，有时是压力、孤独、拖延和屏幕时间的合谋。",
    swap: "也可以是一张电影票、一只灯泡、或两天高质量早餐。",
    question: "你饿的是胃，还是今天还没有被好好安放？"
  }, ["cn-cinema-morning", "cn-light-bulb"], { lens: "attention", truthScore: 2, rewardTags: ["food", "mood", "quick"], sensitivity: "high", brand: "饿了么" }),
  item("cn-genshin-648", "cn", "CNY", 648, "原神 648 创世结晶", "digital", "六百四十八块钱买到的是一次强烈但不保证落地的期待。", {
    buys: "按常见规则，648 档常态约 8080 创世结晶/原石，约 50 抽；首充双倍约 12960，约 81 抽。它接近“一个保底”的心理锚点，但并不是稳定 90 抽。",
    swap: "也可以是一把人体工学椅的大半、一次心理咨询、一次近程高铁，或九周瑞幸咖啡。",
    question: "你要的是角色，还是抽卡前那十分钟“可能改变账号”的感觉？90 抽硬保底约需 14400 原石。"
  }, ["cn-office-chair", "cn-therapy-session", "cn-train-ticket-near"], { lens: "attention", truthScore: 2, rewardTags: ["game", "hope", "quick"], sensitivity: "high", brand: "原神" }),
  item("cn-honkai-star-rail-648", "cn", "CNY", 648, "崩铁 648 星琼充值", "digital", "六百四十八块钱买到的是把概率包装成命运感。", {
    buys: "抽卡消费很会把不确定性变成剧情的一部分：你不是在买数值，而是在买“万一这次就是我”。",
    swap: "也可以是一张高铁票、一把椅子、或一次把真实焦虑讲完的咨询。",
    question: "这次抽卡会留下快乐，还是只留下下一次想补的洞？"
  }, ["cn-genshin-648", "cn-office-chair"], { lens: "attention", truthScore: 2, rewardTags: ["game", "hope", "quick"], sensitivity: "high", brand: "崩坏：星穹铁道" }),
  item("cn-honor-of-kings-skin", "cn", "CNY", 178, "王者荣耀传说皮肤折扣", "digital", "一百七十八块钱买到的是熟悉英雄的新鲜感。", {
    buys: "它能带来真实的审美和手感愉悦，也会让老游戏重新像新游戏。",
    swap: "也可以是一只电动牙刷、一门课的活动价、或一顿家庭餐升级。",
    question: "你还喜欢这个英雄，还是喜欢打开游戏时被更新的自己？"
  }, ["cn-electric-toothbrush", "cn-online-course"], { lens: "mixed", truthScore: 3, rewardTags: ["game", "aesthetic", "social"], sensitivity: "medium", brand: "王者荣耀" }),
  item("cn-steam-aaa-sale", "cn", "CNY", 198, "Steam 3A 大作打折", "experience", "一百九十八块钱买到的是几十小时进入另一个系统。", {
    buys: "如果你真的玩，它可能比很多短视频和外卖更像完整体验；如果只是入库，就是愿望清单的墓地。",
    swap: "也可以是一把电动牙刷、一年视频会员、或一门低价课。",
    question: "你买的是游戏时间，还是买“以后有空会玩”的幻想？"
  }, ["cn-electric-toothbrush", "cn-tencent-video-year"], { lens: "mixed", truthScore: 4, rewardTags: ["game", "experience", "depth"], sensitivity: "medium", brand: "Steam" }),
  item("cn-switch-game", "cn", "CNY", 299, "Switch 卡带/数字版游戏", "experience", "二百九十九块钱买到的是一段可反复进入的玩法。", {
    buys: "一款好游戏可以陪你几十小时，也可以成为朋友来家里的共同语言。",
    swap: "也可以是一日游、一年云盘、或一件高频小家电。",
    question: "它会被打开十次以上吗？如果会，这笔钱可能比很多一次性快乐更真。"
  }, ["cn-city-day-trip", "cn-baidu-svip-year"], { lens: "true", truthScore: 4, rewardTags: ["game", "experience", "relationship"], sensitivity: "low", brand: "Nintendo Switch" }),
  item("cn-lol-skin-bundle", "cn", "CNY", 328, "LOL/手游皮肤礼包", "digital", "三百二十八块钱买到的是社交局里的体面新鲜感。", {
    buys: "皮肤不改变胜率，却会改变你进入对局的兴致和被朋友看见的方式。",
    swap: "也可以是一个小家电、一年云盘、或一次周边城市一日游。",
    question: "它会增加你和朋友的快乐，还是只是让下一次消费门槛变低？"
  }, ["cn-small-appliance", "cn-city-day-trip"], { lens: "mixed", truthScore: 3, rewardTags: ["game", "social", "aesthetic"], sensitivity: "medium", brand: "英雄联盟" }),
  item("cn-airpods-pro", "cn", "CNY", 1899, "AirPods Pro", "durable", "一千八百九十九块钱买到的是把世界音量交给自己。", {
    buys: "如果你每天通勤、办公、学习，它是边界工具；如果只是为了苹果生态完整，它也可能是身份感消费。",
    swap: "也可以是两次心理咨询、一个短途周末、或接近三次 648。",
    question: "你需要的是降噪和稳定，还是需要“我也配齐了”的感觉？"
  }, ["cn-therapy-session", "cn-short-trip-couple", "cn-genshin-648"], { lens: "true", truthScore: 4, rewardTags: ["tool", "focus", "daily"], sensitivity: "medium", brand: "Apple" }),
  item("cn-airpods-4", "cn", "CNY", 999, "AirPods 4", "durable", "九百九十九块钱买到的是苹果生态里的轻量默认。", {
    buys: "它不是最强降噪，但胜在顺手、稳定、拿起就用。",
    swap: "也可以是一晚酒店、一次考试报名费、或十几个月视频会员。",
    question: "顺手本身是不是一种值得付费的真实？"
  }, ["cn-weekend-hotel", "cn-exam-fee"], { lens: "true", truthScore: 4, rewardTags: ["tool", "daily", "comfort"], sensitivity: "medium", brand: "Apple" }),
  item("cn-anker-earbuds", "cn", "CNY", 399, "倍思/声阔/小米降噪耳机", "durable", "三百九十九块钱买到的是更便宜的私人边界。", {
    buys: "它提醒你：很多时候真正需要的是功能，不一定是某个品牌的完整叙事。",
    swap: "也可以是一套穿搭、几次保洁、或一只小家电。",
    question: "如果功能已经满足，你愿意为品牌多付的钱到底买到了什么？"
  }, ["cn-xiaohongshu-outfit", "cn-noise-earbuds"], { lens: "true", truthScore: 4, rewardTags: ["tool", "focus", "value"], sensitivity: "low", brand: "国产降噪耳机" }),
  item("cn-sony-xm5", "cn", "CNY", 2299, "索尼 WH-1000XM5", "durable", "两千三百块钱买到的是更完整的安静。", {
    buys: "头戴降噪很适合长时间工作、飞行和需要深度独处的人。",
    swap: "也可以是一部中端手机的大半、一次短途周末、或三次 648。",
    question: "你会用它创造安静，还是用它在嘈杂里继续刷手机？"
  }, ["cn-midrange-phone", "cn-short-trip-couple"], { lens: "true", truthScore: 4, rewardTags: ["focus", "tool", "daily"], sensitivity: "medium", brand: "Sony" }),
  item("cn-iphone-main", "cn", "CNY", 5999, "一部新 iPhone 主力机", "durable", "五六千块钱买到的是现代生活的主入口。", {
    buys: "它真的高频：支付、导航、相机、社交、工作都经过它。但高频不自动等于必须换新。",
    swap: "也可以是一台主力笔记本的大半、一周国内旅行、或九次 648。",
    question: "这次换机是在扩大能力，还是在给已经够用的入口换一个更亮的壳？"
  }, ["cn-macbook-air", "cn-domestic-vacation", "cn-genshin-648"], { lens: "mixed", truthScore: 4, rewardTags: ["tool", "daily", "identity"], sensitivity: "medium", brand: "Apple iPhone" }),
  item("cn-xiaomi-phone", "cn", "CNY", 2999, "小米/一加性价比旗舰", "durable", "三千块钱买到的是把大多数手机功能买到够用。", {
    buys: "它提供性能、屏幕、充电和相机的实用平衡，让品牌溢价问题变得更具体。",
    swap: "也可以是一台打印机、二手相机、或四五次 648。",
    question: "当够用已经很强，贵出来的部分到底在服务谁？"
  }, ["cn-laser-printer", "cn-used-camera"], { lens: "true", truthScore: 4, rewardTags: ["tool", "value", "daily"], sensitivity: "low", brand: "小米/一加" }),
  item("cn-macbook-air", "cn", "CNY", 8499, "MacBook Air", "durable", "八千多块钱买到的是一台可以赚钱、学习和表达的轻工作台。", {
    buys: "如果它承担写作、编程、剪辑、学习或远程工作，它不是电子产品，而是能力入口。",
    swap: "也可以是一部新 iPhone、十三次 648、一次国内旅行、或很厚的一段生活缓冲。",
    question: "这台电脑会让你产出更多真实东西，还是只是让桌面看起来更像会产出？"
  }, ["cn-iphone-main", "cn-domestic-vacation", "cn-three-month-buffer"], { lens: "true", truthScore: 5, rewardTags: ["tool", "capacity", "work"], sensitivity: "medium", brand: "Apple Mac" }),
  item("cn-ipad-air-pencil", "cn", "CNY", 5299, "iPad Air + Pencil", "durable", "五千多块钱买到的是一块很会承诺学习的玻璃。", {
    buys: "它可能是真工具：手写、画画、看论文、标注。也可能成为最贵的视频播放器。",
    swap: "也可以是一部手机、六次心理咨询、或一次旅行。",
    question: "你会拿它创造和整理，还是拿它证明自己准备好了？"
  }, ["cn-iphone-main", "cn-domestic-vacation"], { lens: "mixed", truthScore: 3, rewardTags: ["tool", "learning", "identity"], sensitivity: "high", brand: "Apple iPad" }),
  item("cn-kindle-used", "cn", "CNY", 499, "二手 Kindle / 墨水屏阅读器", "mind", "四百九十九块钱买到的是把阅读从手机里救出来。", {
    buys: "它最真实的价值是让书不再和短视频、消息、购物 App 共用同一块屏幕。",
    swap: "也可以是一次体检、一副入门耳机、或十五杯咖啡。",
    question: "你缺的是书，还是缺一个不会把你带走的阅读环境？"
  }, ["cn-basic-checkup", "cn-anker-earbuds"], { lens: "true", truthScore: 5, rewardTags: ["learning", "focus", "tool"], sensitivity: "low", brand: "Kindle" }),
  item("cn-ikea-desk", "cn", "CNY", 899, "宜家书桌/工作台升级", "home", "八百九十九块钱买到的是把认真做事放进房间布局。", {
    buys: "桌子不是装饰，它决定你能不能坐下来开始、能不能把工具摊开、能不能进入工作状态。",
    swap: "也可以是一次心理咨询、一晚酒店、或一台小家电。",
    question: "这张桌子会承接真实产出，还是只是新桌搭照片的背景？"
  }, ["cn-therapy-session", "cn-weekend-hotel"], { lens: "true", truthScore: 5, rewardTags: ["work", "home", "capacity"], sensitivity: "medium", brand: "IKEA" }),
  item("cn-ergotron-arm", "cn", "CNY", 899, "显示器支架/升降臂", "home", "八百九十九块钱买到的是长期姿势少一点将就。", {
    buys: "它没有开箱爽感的高峰，但会每天默默影响脖子、桌面和专注。",
    swap: "也可以是一次咨询、一晚酒店、或两年云盘。",
    question: "你愿不愿意为每天都发生的小不舒服提前付钱？"
  }, ["cn-office-chair", "cn-therapy-session"], { lens: "true", truthScore: 4, rewardTags: ["body", "work", "daily"], sensitivity: "low", brand: "显示器支架" }),
  item("cn-xiaomi-band", "cn", "CNY", 249, "小米手环/运动手表入门款", "body", "二百四十九块钱买到的是身体数据开始回看你。", {
    buys: "步数、睡眠、心率都不神奇，但它们会让身体从模糊感觉变成可观察对象。",
    swap: "也可以是一日游、一个游戏卡带的折扣价、或八杯咖啡。",
    question: "数据会让你行动，还是只让你更精确地知道自己没行动？"
  }, ["cn-city-day-trip", "cn-chain-coffee"], { lens: "true", truthScore: 4, rewardTags: ["body", "data", "routine"], sensitivity: "low", brand: "小米" }),
  item("cn-keep-year", "cn", "CNY", 299, "Keep 会员年卡", "body", "二百九十九块钱买到的是把运动入口放进手机。", {
    buys: "如果你跟练，它很划算；如果只是买了年卡，它就是自律幻想的会员费。",
    swap: "也可以是一日游、一年云盘、或十杯咖啡。",
    question: "这笔钱会变成汗，还是变成“我已经开始了”的错觉？"
  }, ["cn-city-day-trip", "cn-baidu-svip-year"], { lens: "mixed", truthScore: 4, rewardTags: ["body", "routine", "health"], sensitivity: "medium", brand: "Keep" }),
  item("cn-classpass-pack", "cn", "CNY", 599, "团课/健身私教体验包", "body", "五百九十九块钱买到的是有人把你拉进运动场景。", {
    buys: "课程贵的地方不只是动作，而是空间、预约、教练和不能临时摆烂的结构。",
    swap: "也可以是一张高铁票、一次体检、或一把办公椅的大半。",
    question: "你需要运动知识，还是需要一个让自己出现的机制？"
  }, ["cn-basic-checkup", "cn-office-chair"], { lens: "true", truthScore: 5, rewardTags: ["body", "routine", "care"], sensitivity: "medium", brand: "团课" }),
  item("cn-oral-cleaning", "cn", "CNY", 300, "洗牙一次", "body", "三百块钱买到的是把一个未来牙科账单往回拉。", {
    buys: "它不刺激，不好晒，但它可能是最真实的消费之一：预防比修补便宜太多。",
    swap: "也可以是一年云盘、一个游戏、或几杯品牌咖啡。",
    question: "为什么真正有用的预防，常常比随机快乐更难下单？"
  }, ["cn-switch-game", "cn-baidu-svip-year"], { lens: "true", truthScore: 5, rewardTags: ["body", "future", "care"], sensitivity: "low", brand: "口腔护理" }),
  item("cn-dermatology-visit", "cn", "CNY", 600, "皮肤科就诊和基础药膏", "care", "六百块钱买到的是把反复焦虑交给专业判断。", {
    buys: "护肤品很会讲故事，医生更像是把问题从玄学拉回诊断。",
    swap: "也可以是一次抽卡 648 附近、一张高铁票、或多件护肤冲动单品。",
    question: "你在买变好，还是在买下一瓶也许会变好的期待？"
  }, ["cn-genshin-648", "cn-train-ticket-near"], { lens: "true", truthScore: 5, rewardTags: ["body", "care", "confidence"], sensitivity: "medium", brand: "皮肤科" }),
  item("cn-skincare-set", "cn", "CNY", 799, "一套热门护肤品", "appearance", "七百九十九块钱买到的是对脸的期待和控制感。", {
    buys: "护肤可能很真，也可能被功效词牵着走。关键是它是否解决你的具体问题。",
    swap: "也可以是皮肤科就诊、一次心理咨询、或一张能每天工作的好桌子。",
    question: "你需要的是成分，还是需要有人告诉你这张脸正在被认真对待？"
  }, ["cn-dermatology-visit", "cn-therapy-session", "cn-ikea-desk"], { lens: "mixed", truthScore: 3, rewardTags: ["appearance", "care", "control"], sensitivity: "high", brand: "热门护肤" }),
  item("cn-sephora-perfume", "cn", "CNY", 980, "一瓶香水", "appearance", "九百八十块钱买到的是别人还没靠近你时的叙事。", {
    buys: "香水可以很真：记忆、场合、身份感、亲密距离。也可以只是被文案点燃的一次幻想。",
    swap: "也可以是一晚酒店、一次咨询、或三次洗牙。",
    question: "这瓶香会成为你的气味，还是只成为柜子里的另一种可能性？"
  }, ["cn-weekend-hotel", "cn-therapy-session"], { lens: "mixed", truthScore: 3, rewardTags: ["appearance", "identity", "mood"], sensitivity: "high", brand: "香水" }),
  item("cn-uniqlo-coat", "cn", "CNY", 799, "优衣库/无印良品外套", "appearance", "七八百块钱买到的是高频穿着的稳定体面。", {
    buys: "如果它一周穿三次，单次成本会很低；如果只是季节性冲动，就只是衣柜库存。",
    swap: "也可以是皮肤科就诊、桌子升级、或一次咨询。",
    question: "它会成为默认外套，还是只成为换季时的自我安慰？"
  }, ["cn-dermatology-visit", "cn-ikea-desk"], { lens: "true", truthScore: 4, rewardTags: ["appearance", "daily", "comfort"], sensitivity: "medium", brand: "优衣库/无印良品" }),
  item("cn-lululemon-leggings", "cn", "CNY", 850, "Lululemon 运动裤", "body", "八百五十块钱买到的是运动身份和穿着舒适叠在一起。", {
    buys: "它可能真能提高你去运动的概率，也可能只是把健康愿望变成昂贵布料。",
    swap: "也可以是一张好书桌、一次咨询、或接近三年 Keep 年卡。",
    question: "这条裤子会把你带去运动，还是替没有运动的你保留身份？"
  }, ["cn-ikea-desk", "cn-keep-year"], { lens: "mixed", truthScore: 3, rewardTags: ["body", "appearance", "identity"], sensitivity: "high", brand: "Lululemon" }),
  item("cn-nike-running-shoes", "cn", "CNY", 799, "耐克/亚瑟士跑鞋", "body", "七百九十九块钱买到的是把跑步伤害降下来一点。", {
    buys: "如果你真的跑，它很真实：脚踝、膝盖、落地和坚持概率都会受影响。",
    swap: "也可以是一次皮肤科、一次心理咨询、或两三次冲动游戏充值。",
    question: "这双鞋会磨损在路上，还是干净地待在门口？"
  }, ["cn-therapy-session", "cn-genshin-648"], { lens: "true", truthScore: 5, rewardTags: ["body", "routine", "tool"], sensitivity: "medium", brand: "Nike/ASICS" }),
  item("cn-citywalk-camera-roll", "cn", "CNY", 120, "Citywalk 胶片/拍立得耗材", "experience", "一百二十块钱买到的是让普通一天显得值得保存。", {
    buys: "拍照耗材会让你更认真地看街道、朋友和光线，但也可能把体验变成素材采集。",
    swap: "也可以是基础化验、一节课、或几天认真早餐。",
    question: "你是在记录生活，还是在让生活看起来可发布？"
  }, ["cn-basic-lab-test", "cn-online-course"], { lens: "mixed", truthScore: 3, rewardTags: ["experience", "aesthetic", "memory"], sensitivity: "medium", brand: "Citywalk" }),
  item("cn-livehouse-ticket", "cn", "CNY", 180, "Livehouse 门票", "experience", "一百八十块钱买到的是一个晚上身体和声音在一起。", {
    buys: "如果你喜欢那支乐队，这比很多外卖和会员更像真实生活：不可暂停、不可补档。",
    swap: "也可以是一只电动牙刷、一个游戏皮肤、或几杯咖啡。",
    question: "这场演出会留下一个晚上，还是只留下朋友圈九宫格？"
  }, ["cn-honor-of-kings-skin", "cn-electric-toothbrush"], { lens: "true", truthScore: 4, rewardTags: ["experience", "memory", "relationship"], sensitivity: "medium", brand: "Livehouse" }),
  item("cn-music-festival-day", "cn", "CNY", 580, "音乐节单日票", "experience", "五百八十块钱买到的是把一天交给声音、人群和天气。", {
    buys: "它有真实体验，也有社交符号。最关键是你是否真的为了音乐而去。",
    swap: "也可以是一张高铁票、一次体检、或接近一次 648。",
    question: "你会记得歌和人，还是只记得自己去过？"
  }, ["cn-train-ticket-near", "cn-genshin-648"], { lens: "mixed", truthScore: 4, rewardTags: ["experience", "social", "memory"], sensitivity: "medium", brand: "音乐节" }),
  item("cn-disney-day", "cn", "CNY", 799, "上海迪士尼一日票", "experience", "七八百块钱买到的是把一天交给高密度快乐工业。", {
    buys: "它昂贵但明确：排队、烟花、朋友、童年符号和一个被设计好的沉浸日。",
    swap: "也可以是一次咨询、皮肤科、或一张书桌。",
    question: "这是你真的想要的魔法，还是社交平台替你定义的必去？"
  }, ["cn-therapy-session", "cn-ikea-desk"], { lens: "mixed", truthScore: 4, rewardTags: ["experience", "memory", "social"], sensitivity: "high", brand: "上海迪士尼" }),
  item("cn-highspeed-home", "cn", "CNY", 380, "回家一趟高铁票", "relationship", "三百八十块钱买到的是把想念从语音变成在场。", {
    buys: "它不新鲜，也不酷，但可能比很多奖励更真实：人真的坐到了人面前。",
    swap: "也可以是一套穿搭、一副耳机、或一次直播间冲动单。",
    question: "如果同样的钱能让你见到重要的人，为什么它常常输给更亮的消费？"
  }, ["cn-xiaohongshu-outfit", "cn-douyin-live-order"], { lens: "true", truthScore: 5, rewardTags: ["relationship", "memory", "care"], sensitivity: "low", brand: "高铁" }),
  item("cn-birthday-gift-real", "cn", "CNY", 500, "给重要的人认真挑礼物", "relationship", "五百块钱买到的是对方感到自己被具体看见。", {
    buys: "礼物最真的部分不是价格，而是你知道 TA 需要什么、喜欢什么、最近怎么了。",
    swap: "也可以是一次体检、一副耳机、或半次 648。",
    question: "这笔钱会加深一段关系，还是只是完成节日任务？"
  }, ["cn-basic-checkup", "cn-genshin-648"], { lens: "true", truthScore: 5, rewardTags: ["relationship", "care", "memory"], sensitivity: "medium", brand: "礼物" }),
  item("cn-friend-dinner-deep", "cn", "CNY", 260, "和朋友认真吃一顿饭", "relationship", "二百六十块钱买到的是把近况讲完整的时间。", {
    buys: "真正贵的是两个人都愿意空出晚上，不只是菜。",
    swap: "也可以是淘宝杂物车、一个游戏、或一件小家电的折扣价。",
    question: "你缺的是吃饭，还是缺一个不会被消息打断的人？"
  }, ["cn-taobao-impulse-cart", "cn-switch-game"], { lens: "true", truthScore: 5, rewardTags: ["relationship", "time", "memory"], sensitivity: "low", brand: "朋友饭局" }),
  item("cn-coworking-day", "cn", "CNY", 99, "共享办公日票", "time", "九十九块钱买到的是一天里更像会开始工作的环境。", {
    buys: "有时你缺的不是自律，而是离开床、餐桌和家务背景。",
    swap: "也可以是一年笔记 App、展览门票、或几杯咖啡。",
    question: "换一个空间，会不会比再买一个工具更能让你开始？"
  }, ["cn-notes-app-year", "cn-museum-ticket"], { lens: "true", truthScore: 4, rewardTags: ["work", "focus", "space"], sensitivity: "low", brand: "共享办公" }),
  item("cn-notion-ai-month", "cn", "CNY", 75, "Notion/飞书/AI 工具月费", "digital", "七十五块钱买到的是把混乱信息推成下一步。", {
    buys: "如果你真的用它写、整理、复盘，它会变成生产力；如果只是订阅，它就是工具焦虑。",
    swap: "也可以是一周咖啡、一节课、或一次共享办公日票。",
    question: "这个工具会进入工作流，还是只进入“我应该更高效”的想象？"
  }, ["cn-coworking-day", "cn-luckin-week"], { lens: "mixed", truthScore: 4, rewardTags: ["work", "tool", "capacity"], sensitivity: "medium", brand: "AI 工具" }),
  item("cn-claude-chatgpt-month", "cn", "CNY", 145, "ChatGPT/Claude 月费折算", "digital", "一百四十五块钱买到的是一个随时能把想法推下去的外脑。", {
    buys: "对写作、代码、研究、英语、求职，它可能非常真；对无目的聊天，它也会吞掉很多时间。",
    swap: "也可以是一门课、一张 Livehouse 票、或半个月咖啡。",
    question: "它是在放大你的主动性，还是在替你制造新的分心入口？"
  }, ["cn-online-course", "cn-livehouse-ticket"], { lens: "true", truthScore: 5, rewardTags: ["work", "learning", "capacity"], sensitivity: "medium", brand: "AI 订阅" }),
  item("cn-domain-hosting-year", "cn", "CNY", 300, "域名和轻量服务器一年", "digital", "三百块钱买到的是一个想法可以被别人访问。", {
    buys: "它比很多冲动消费更像能力：作品集、博客、小工具、实验项目，都有地方落地。",
    swap: "也可以是一年云盘、Switch 游戏、或十杯咖啡。",
    question: "这笔钱会让你发布真实作品，还是只是买一个未来会开始的地址？"
  }, ["cn-switch-game", "cn-baidu-svip-year"], { lens: "true", truthScore: 5, rewardTags: ["work", "capacity", "future"], sensitivity: "low", brand: "域名/服务器" }),
  item("cn-github-copilot-month", "cn", "CNY", 75, "GitHub Copilot 月费", "digital", "七十五块钱买到的是写代码时更少卡在机械部分。", {
    buys: "对高频编程的人很真实：补全、解释、样板代码都会降低摩擦。",
    swap: "也可以是一周咖啡、共享办公半天、或一次书店买书。",
    question: "它会把你推向完成，还是只让你更快地产生半成品？"
  }, ["cn-notion-ai-month", "cn-coworking-day"], { lens: "true", truthScore: 5, rewardTags: ["work", "tool", "capacity"], sensitivity: "low", brand: "GitHub Copilot" }),
  item("cn-zotero-storage", "cn", "CNY", 140, "文献/资料管理工具年费", "mind", "一百四十块钱买到的是知识不再散落在各个角落。", {
    buys: "如果你真的读论文、写文章、做项目，它会让引用、笔记和资料有秩序。",
    swap: "也可以是 AI 月费、Livehouse、或一门入门课。",
    question: "你缺的是更多资料，还是缺一个让资料回得来的地方？"
  }, ["cn-online-course", "cn-claude-chatgpt-month"], { lens: "true", truthScore: 5, rewardTags: ["learning", "work", "capacity"], sensitivity: "low", brand: "资料管理" }),
  item("cn-xhs-course", "cn", "CNY", 399, "小红书/知识星球副业课", "mind", "三百九十九块钱买到的是别人把成功路径剪成课程。", {
    buys: "它可能有用，也可能只是贩卖“你也可以”的焦虑。关键是有没有可验证作业和真实反馈。",
    swap: "也可以是域名服务器一年、一套穿搭、或一次认真饭局。",
    question: "它会给你能力，还是只给你一种正在靠近成功的兴奋？"
  }, ["cn-domain-hosting-year", "cn-friend-dinner-deep"], { lens: "attention", truthScore: 2, rewardTags: ["learning", "hope", "identity"], sensitivity: "high", brand: "副业课" }),
  item("cn-driving-practice", "cn", "CNY", 1200, "驾校补练/陪练", "mobility", "一千二百块钱买到的是把恐惧从路上拿掉一点。", {
    buys: "它不如买装备爽，但会真实改变你能不能独立出行。",
    swap: "也可以是一把键盘、一晚酒店、或两次 648。",
    question: "这笔钱会扩大行动半径，还是只是补一个早该补的能力洞？"
  }, ["cn-mechanical-keyboard", "cn-genshin-648"], { lens: "true", truthScore: 5, rewardTags: ["mobility", "capacity", "future"], sensitivity: "medium", brand: "驾校陪练" }),
  item("cn-license-test-fee", "cn", "CNY", 680, "摩托/电动车驾照报名", "mobility", "六百八十块钱买到的是一种合法移动自由。", {
    buys: "它不闪亮，但会让通勤、周边和临时出门变得更有主动权。",
    swap: "也可以是一抽卡 648、一把椅子的大半、或一次咨询。",
    question: "你想买车，还是先买能更自由移动的资格？"
  }, ["cn-genshin-648", "cn-office-chair"], { lens: "true", truthScore: 5, rewardTags: ["mobility", "future", "capacity"], sensitivity: "low", brand: "驾照" }),
  item("cn-relocation-weekend", "cn", "CNY", 1600, "去目标城市看房/面试周末", "future", "一千六百块钱买到的是把未来从想象变成实地考察。", {
    buys: "车票、住宿和两天走路，会让一个城市从滤镜变成真实生活条件。",
    swap: "也可以是一副眼镜、一把键盘、或两次咨询。",
    question: "你是在旅行，还是在认真验证一个可能的人生版本？"
  }, ["cn-glasses", "cn-therapy-session"], { lens: "true", truthScore: 5, rewardTags: ["future", "mobility", "capacity"], sensitivity: "medium", brand: "城市探索" }),
  item("cn-emergency-dental", "cn", "CNY", 2000, "一次牙科修补/根管前期", "body", "两千块钱买到的是痛感不再支配生活。", {
    buys: "这类钱最真实，因为它让你看见拖延的利息。",
    swap: "也可以是一副 AirPods Pro、短途周末、或三次 648。",
    question: "如果预防只要几百，为什么我们常常等到修补几千？"
  }, ["cn-airpods-pro", "cn-genshin-648"], { lens: "true", truthScore: 5, rewardTags: ["body", "care", "future"], sensitivity: "low", brand: "牙科" }),
  item("cn-rent-near-office-gap", "cn", "CNY", 1500, "住得离公司近一点的月差价", "time", "一千五百块钱买到的是每天少一段被通勤吃掉的生命。", {
    buys: "它不是便宜选择，但如果每天省一小时，一个月就是二十多个小时。",
    swap: "也可以是一副眼镜、一把键盘、或两次 648。",
    question: "你愿意为大件买单，为什么不愿意为每天回来的时间买单？"
  }, ["cn-glasses", "cn-genshin-648"], { lens: "true", truthScore: 5, rewardTags: ["time", "body", "future"], sensitivity: "medium", brand: "租房位置" }),
  item("cn-monthly-index-fund", "cn", "CNY", 1000, "每月定投/货基储备", "future", "一千块钱买到的是未来的自己少一点被迫。", {
    buys: "它没有即时快感，但会改变你面对离职、生病、机会和坏选择时的底气。",
    swap: "也可以是一晚酒店、一次考试、或一点五次 648。",
    question: "没有被花掉的钱，为什么有时比任何奖励都更像奖励？"
  }, ["cn-weekend-hotel", "cn-genshin-648"], { lens: "true", truthScore: 5, rewardTags: ["future", "buffer", "freedom"], sensitivity: "low", brand: "储蓄/定投" }),
  item("cn-credit-card-interest", "cn", "CNY", 300, "信用卡/花呗分期利息", "future", "三百块钱买到的是过去消费的影子。", {
    buys: "它几乎不买任何东西，只是给已经发生的冲动补票。",
    swap: "也可以是洗牙、一个 Switch 游戏、或一年服务器。",
    question: "如果这笔钱没有带来新东西，它是不是最不真的消费？"
  }, ["cn-oral-cleaning", "cn-domain-hosting-year"], { lens: "attention", truthScore: 1, rewardTags: ["debt", "past", "friction"], sensitivity: "high", brand: "分期利息" }),
  item("cn-insurance-small", "cn", "CNY", 600, "一年基础意外/医疗补充险", "future", "六百块钱买到的是坏事发生时少一点裸奔。", {
    buys: "它的价值在于最好用不上。很多真正的消费都没有开箱瞬间。",
    swap: "也可以是一张音乐节票、一次抽卡、或一张高铁票。",
    question: "看不见效果的保护，为什么比看得见的快乐更难下单？"
  }, ["cn-music-festival-day", "cn-genshin-648"], { lens: "true", truthScore: 5, rewardTags: ["future", "care", "buffer"], sensitivity: "low", brand: "保险" }),
  item("cn-parents-health-check", "cn", "CNY", 1200, "给父母加一项体检", "care", "一千二百块钱买到的是把关心从聊天变成安排。", {
    buys: "它不一定温情，但很具体：预约、项目、报告、复查。",
    swap: "也可以是一把键盘、一晚酒店、或两次 648。",
    question: "你愿意给自己买奖励，愿不愿意给重要的人买确定性？"
  }, ["cn-mechanical-keyboard", "cn-genshin-648"], { lens: "true", truthScore: 5, rewardTags: ["care", "relationship", "future"], sensitivity: "medium", brand: "父母体检" }),
  item("cn-cat-vet", "cn", "CNY", 800, "宠物体检/疫苗/驱虫", "care", "八百块钱买到的是把一个不会说话的家人照顾清楚。", {
    buys: "宠物消费里有很多冲动玩具，但医疗护理很真：它减少的是风险和内疚。",
    swap: "也可以是一套护肤品、一次咨询、或迪士尼门票。",
    question: "这笔钱是在表达爱，还是在补偿平时没时间陪伴？"
  }, ["cn-skincare-set", "cn-therapy-session"], { lens: "true", truthScore: 5, rewardTags: ["care", "relationship", "future"], sensitivity: "medium", brand: "宠物医疗" }),
  item("cn-cat-toy-haul", "cn", "CNY", 199, "宠物玩具零食囤货", "relationship", "一百九十九块钱买到的是想让爱看起来更具体。", {
    buys: "有些玩具会被喜欢，有些只是人类的购买快乐。宠物未必需要那么多选择。",
    swap: "也可以是宠物体检的一部分、一只电动牙刷、或一张演出票。",
    question: "这是它需要的，还是你需要看见自己在爱它？"
  }, ["cn-electric-toothbrush", "cn-livehouse-ticket"], { lens: "mixed", truthScore: 3, rewardTags: ["care", "relationship", "mood"], sensitivity: "medium", brand: "宠物用品" }),
  item("cn-bookstore-stack", "cn", "CNY", 260, "书店买三本书", "mind", "二百六十块钱买到的是三条可能改变想法的路。", {
    buys: "前提是会读。买书很真，也很容易变成对未来自己的乐观投票。",
    swap: "也可以是一顿朋友饭、一车淘宝杂物、或一款游戏。",
    question: "这些书会进入你的句子，还是只进入书架？"
  }, ["cn-friend-dinner-deep", "cn-switch-game"], { lens: "true", truthScore: 4, rewardTags: ["learning", "future", "identity"], sensitivity: "low", brand: "书店" }),
  item("cn-writing-retreat-day", "cn", "CNY", 350, "一天写作/备考闭关", "time", "三百五十块钱买到的是把一个目标从日常噪声里隔离出来。", {
    buys: "安静房间、咖啡、交通和关闭社交软件，可能比再买教程更有效。",
    swap: "也可以是一套穿搭、域名服务器一年、或一次洗牙。",
    question: "你缺的是资料，还是缺一个真的会完成的日子？"
  }, ["cn-domain-hosting-year", "cn-oral-cleaning"], { lens: "true", truthScore: 5, rewardTags: ["time", "work", "capacity"], sensitivity: "low", brand: "闭关日" }),
  item("cn-portfolio-photo", "cn", "CNY", 600, "职业头像/作品集拍摄", "work", "六百块钱买到的是别人第一次看见你时少一点误差。", {
    buys: "对求职、自由职业、内容创作，它可能是很实际的门面基础设施。",
    swap: "也可以是一张音乐节票、一次抽卡、或一次皮肤科。",
    question: "这是虚荣，还是你在认真管理自己的入口？"
  }, ["cn-music-festival-day", "cn-dermatology-visit"], { lens: "true", truthScore: 4, rewardTags: ["work", "appearance", "future"], sensitivity: "medium", brand: "职业形象" }),
  item("cn-resume-review", "cn", "CNY", 399, "简历/作品集专业修改", "work", "三百九十九块钱买到的是把能力翻译给机会看。", {
    buys: "如果对方真的懂行业，它可能比一件新衣服更直接影响收入机会。",
    swap: "也可以是一套穿搭、一次直播间冲动单、或一年域名服务器。",
    question: "你想让自己变好，还是让别人更准确地看见已经有的好？"
  }, ["cn-domain-hosting-year", "cn-xiaohongshu-outfit"], { lens: "true", truthScore: 5, rewardTags: ["work", "future", "capacity"], sensitivity: "low", brand: "求职服务" }),
  item("cn-language-tutor", "cn", "CNY", 500, "英语/日语一对一 2-3 次", "mind", "五百块钱买到的是把语言从收藏资料推到开口。", {
    buys: "真正的价值在反馈：你哪里错、为什么卡、下一次怎么练。",
    swap: "也可以是礼物、体检、或一次抽卡的大部分。",
    question: "你需要更多 App，还是需要有人当场纠正你？"
  }, ["cn-birthday-gift-real", "cn-genshin-648"], { lens: "true", truthScore: 5, rewardTags: ["learning", "capacity", "future"], sensitivity: "medium", brand: "语言老师" }),
  item("cn-course-certificate", "cn", "CNY", 699, "Coursera/慕课证书", "mind", "六百九十九块钱买到的是学习成果有一个外部凭证。", {
    buys: "证书不等于能力，但会迫使你完成，并给简历一个可解释的节点。",
    swap: "也可以是一把椅子的大半、一次抽卡、或几次饭局。",
    question: "你要的是知识、证据，还是一种终于完成了的感觉？"
  }, ["cn-office-chair", "cn-genshin-648"], { lens: "true", truthScore: 4, rewardTags: ["learning", "work", "future"], sensitivity: "medium", brand: "在线证书" }),
  item("cn-mini-nas", "cn", "CNY", 1800, "入门 NAS/硬盘备份", "digital", "一千八百块钱买到的是照片、资料和作品不再只靠运气。", {
    buys: "它不性感，但对创作者、研究者和家庭照片很真：减少的是未来丢失时的无力感。",
    swap: "也可以是一副 AirPods Pro、短途周末、或三次抽卡。",
    question: "你愿意花钱制造新记忆，愿不愿意花钱保护已有记忆？"
  }, ["cn-airpods-pro", "cn-short-trip-couple"], { lens: "true", truthScore: 5, rewardTags: ["digital", "future", "capacity"], sensitivity: "low", brand: "NAS/硬盘" }),
  item("cn-robot-vacuum", "cn", "CNY", 1999, "扫地机器人", "home", "两千块钱买到的是每天地面不再完全靠意志力。", {
    buys: "如果房间适合，它会把家务从周期性崩溃改成后台维护。",
    swap: "也可以是一副 AirPods Pro、三次 648、或一个短途周末。",
    question: "这台机器会长期替你做事，还是会被杂物困在角落？"
  }, ["cn-airpods-pro", "cn-genshin-648"], { lens: "true", truthScore: 4, rewardTags: ["home", "time", "routine"], sensitivity: "medium", brand: "扫地机器人" }),
  item("cn-dyson-hairdryer", "cn", "CNY", 2990, "戴森吹风机", "durable", "三千块钱买到的是速度、手感和品牌神话叠在一起。", {
    buys: "如果每天长发吹干，它很可能是真工具；如果只是想拥有，它的品牌溢价会很明显。",
    swap: "也可以是一部小米旗舰、一台打印机、或四五次 648。",
    question: "你买的是每天省下的十分钟，还是买“我值得好东西”的证明？"
  }, ["cn-xiaomi-phone", "cn-laser-printer"], { lens: "mixed", truthScore: 3, rewardTags: ["body", "time", "identity"], sensitivity: "high", brand: "Dyson" }),
  item("cn-camera-lens", "cn", "CNY", 4500, "一支相机镜头", "experience", "四千五百块钱买到的是看世界的焦段被固定下来。", {
    buys: "对认真拍摄的人，它是真工具；对偶尔拍照的人，它可能只是更贵的可能性。",
    swap: "也可以是一台主力电脑的大半、一个月房租、或七次抽卡。",
    question: "这支镜头会带你出门，还是只让设备列表更完整？"
  }, ["cn-laptop", "cn-rent-room-month"], { lens: "mixed", truthScore: 4, rewardTags: ["tool", "experience", "aesthetic"], sensitivity: "high", brand: "相机镜头" }),
  item("cn-e-bike-upgrade", "cn", "CNY", 3999, "九号/雅迪电动车升级", "mobility", "四千块钱买到的是日常出门少一点犹豫。", {
    buys: "通勤、买菜、见朋友、去地铁站，都会被重新计算。",
    swap: "也可以是一个月房租、一台相机、或六次 648。",
    question: "它会打开你的城市，还是只让你更快去同样几个地方？"
  }, ["cn-rent-room-month", "cn-used-camera"], { lens: "true", truthScore: 4, rewardTags: ["mobility", "time", "daily"], sensitivity: "medium", brand: "九号/雅迪" }),
  item("cn-escape-room-team", "cn", "CNY", 240, "密室/剧本杀一场", "relationship", "二百四十块钱买到的是朋友们一起进入一个临时世界。", {
    buys: "它的真实价值是共同注意力：几个小时里大家在同一个故事里。",
    swap: "也可以是三本书、一个手环、或一次朋友饭。",
    question: "这是高质量共处，还是只是因为不知道还能约什么？"
  }, ["cn-bookstore-stack", "cn-friend-dinner-deep"], { lens: "mixed", truthScore: 4, rewardTags: ["relationship", "experience", "memory"], sensitivity: "medium", brand: "密室/剧本杀" }),
  item("cn-tmall-brand-bag", "cn", "CNY", 1299, "轻奢小包/品牌配饰", "appearance", "一千三百块钱买到的是一个能被识别的身份符号。", {
    buys: "包可能高频实用，也可能主要负责让自己在镜子里看起来进入了某种生活。",
    swap: "也可以是驾校陪练、父母体检、或两次抽卡。",
    question: "这个符号会帮你进入场景，还是只是替你想象已经进入？"
  }, ["cn-driving-practice", "cn-parents-health-check"], { lens: "mixed", truthScore: 3, rewardTags: ["appearance", "identity", "social"], sensitivity: "high", brand: "轻奢配饰" })
);

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

export function getProfiles(region = "cn") {
  return [...(profiles[region] ?? profiles.cn)];
}

export function filterCatalog(items, { budget = Number.POSITIVE_INFINITY, categories = [], query = "" } = {}) {
  const selectedCategories = new Set(categories);
  const normalizedQuery = query.trim().toLowerCase();

  return [...items]
    .filter((item) => item.price <= budget)
    .filter((item) => selectedCategories.size === 0 || selectedCategories.has(item.category))
    .filter((item) => {
      if (!normalizedQuery) return true;
      return [String(item.price), item.title, item.brand, item.meaning, categoryLabels[item.category], item.details.buys, item.details.swap]
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

export function compareAtAmount(items, amount, { profileId = "builder", sensitivity = "medium", limit = 10 } = {}) {
  const region = items[0]?.region ?? "cn";
  const profile = getProfiles(region).find((entry) => entry.id === profileId) ?? getProfiles(region)[0];
  const sensitivityFactor = { low: 1.25, medium: 1, high: 0.78 }[sensitivity] ?? 1;
  const floor = Math.max(items[0]?.price ?? 1, amount * 0.28 * sensitivityFactor);
  const ceiling = amount * (sensitivity === "low" ? 1.2 : 1.08);
  const candidates = items
    .filter((item) => item.price >= floor && item.price <= ceiling)
    .sort((left, right) => rankOption(right, amount, profile) - rankOption(left, amount, profile));
  const attention = candidates
    .filter((item) => item.lens === "attention")
    .sort((left, right) => rankOption(right, amount, profile) - rankOption(left, amount, profile))
    .slice(0, Math.max(3, Math.floor(limit / 2)));
  const trueOptions = candidates
    .filter((item) => item.lens !== "attention")
    .slice(0, limit);
  const mixed = candidates
    .filter((item) => item.lens === "mixed")
    .slice(0, Math.max(3, Math.floor(limit / 3)));

  return {
    amount,
    profile,
    sensitivity,
    attention,
    trueOptions,
    mixed
  };
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
    if (!["true", "attention", "mixed"].includes(item.lens)) errors.push(`${item.id}: invalid lens`);
    if (!Number.isInteger(item.truthScore) || item.truthScore < 1 || item.truthScore > 5) {
      errors.push(`${item.id}: invalid truthScore`);
    }
    if (!Array.isArray(item.rewardTags) || item.rewardTags.length === 0) {
      errors.push(`${item.id}: missing rewardTags`);
    }
    if (!["low", "medium", "high"].includes(item.sensitivity)) {
      errors.push(`${item.id}: invalid sensitivity`);
    }
  }

  return errors;
}

function item(id, region, currency, price, title, category, meaning, details, linkedIds = [], metadata = {}) {
  const defaults = defaultMetadata(category);

  return {
    id,
    region,
    currency,
    price,
    title,
    category,
    meaning,
    details,
    linkedIds,
    lens: metadata.lens ?? defaults.lens,
    truthScore: metadata.truthScore ?? defaults.truthScore,
    rewardTags: metadata.rewardTags ?? defaults.rewardTags,
    sensitivity: metadata.sensitivity ?? defaults.sensitivity,
    brand: metadata.brand ?? ""
  };
}

function defaultMetadata(category) {
  const byCategory = {
    body: { lens: "true", truthScore: 5, rewardTags: ["body", "care"], sensitivity: "low" },
    care: { lens: "true", truthScore: 5, rewardTags: ["care", "future"], sensitivity: "low" },
    digital: { lens: "mixed", truthScore: 3, rewardTags: ["digital", "tool"], sensitivity: "medium" },
    durable: { lens: "true", truthScore: 4, rewardTags: ["tool", "daily"], sensitivity: "medium" },
    experience: { lens: "mixed", truthScore: 4, rewardTags: ["experience", "memory"], sensitivity: "medium" },
    food: { lens: "mixed", truthScore: 3, rewardTags: ["food", "mood"], sensitivity: "medium" },
    future: { lens: "true", truthScore: 5, rewardTags: ["future", "buffer"], sensitivity: "low" },
    home: { lens: "true", truthScore: 4, rewardTags: ["home", "daily"], sensitivity: "medium" },
    mind: { lens: "true", truthScore: 4, rewardTags: ["learning", "capacity"], sensitivity: "low" },
    mobility: { lens: "true", truthScore: 4, rewardTags: ["mobility", "time"], sensitivity: "medium" },
    relationship: { lens: "true", truthScore: 4, rewardTags: ["relationship", "memory"], sensitivity: "medium" },
    time: { lens: "true", truthScore: 4, rewardTags: ["time", "focus"], sensitivity: "low" },
    appearance: { lens: "mixed", truthScore: 3, rewardTags: ["appearance", "identity"], sensitivity: "high" },
    work: { lens: "true", truthScore: 5, rewardTags: ["work", "capacity"], sensitivity: "low" }
  };

  return byCategory[category] ?? { lens: "mixed", truthScore: 3, rewardTags: [category], sensitivity: "medium" };
}

function rankOption(item, amount, profile) {
  const closeness = 1 - Math.min(1, Math.abs(Math.log(item.price / amount)) / Math.log(3));
  const tagWeight = item.rewardTags.reduce((total, tag) => total + (profile.weights[tag] ?? 0), 0);
  const lensWeight = item.lens === "true" ? 1.2 : item.lens === "mixed" ? 0.35 : -1.1;
  const sensitivityPenalty = item.sensitivity === "high" ? -0.45 : item.sensitivity === "medium" ? -0.1 : 0.15;

  return item.truthScore * 1.25 + tagWeight + closeness + lensWeight + sensitivityPenalty;
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
