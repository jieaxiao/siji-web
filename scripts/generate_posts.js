const fs = require('fs');
const path = require('path');

const postsDirectory = path.join(__dirname, '../src/content/posts');

if (!fs.existsSync(postsDirectory)) {
  fs.mkdirSync(postsDirectory, { recursive: true });
}

const categories = {
  COMPANY: '公司动态',
  KNOWLEDGE: '知识百科',
  INDUSTRY: '行业信息',
};

const posts = [
  // Company News
  {
    title: '康翔幸运物流全新官网正式上线',
    category: categories.COMPANY,
    excerpt: '经过数月的精心筹备与开发，康翔幸运物流全新官方网站于今日正式上线！新官网将为您带来更优质的视觉体验和更便捷的服务功能。',
  },
  {
    title: '我司荣获2025年度最佳物流服务商奖',
    category: categories.COMPANY,
    excerpt: '在近日举办的国际物流行业年度盛典上，康翔幸运物流凭借卓越的服务质量和良好的客户口碑，荣获“2025年度最佳物流服务商”殊荣。',
  },
  {
    title: '康翔幸运物流拓展欧洲新航线，助力中欧贸易',
    category: categories.COMPANY,
    excerpt: '为满足日益增长的中欧贸易需求，我司正式开通多条直达欧洲主要港口的新航线，将为客户提供更高效、更经济的物流解决方案。',
  },
  {
    title: '员工风采：记康翔幸运物流2025年度团建活动',
    category: categories.COMPANY,
    excerpt: '为了丰富员工的业余生活，增强团队凝聚力，我司于上周末组织了精彩的年度团建活动。大家在欢声笑语中度过了难忘的一天。',
  },
  {
    title: '关于2026年春节放假安排的通知',
    category: categories.COMPANY,
    excerpt: '值此新春佳节来临之际，康翔幸运物流全体员工祝您新春快乐，阖家幸福！现将我司2026年春节放假安排通知如下...',
  },
  {
    title: '康翔幸运物流深圳仓储中心全面升级',
    category: categories.COMPANY,
    excerpt: '为了提供更优质的仓储配送服务，我司深圳仓储中心近日完成了全面升级改造，引入了智能化的仓储管理系统(WMS)。',
  },
  {
    title: '热烈欢迎某某大型制造企业考察团莅临指导',
    category: categories.COMPANY,
    excerpt: '昨日，某某大型制造企业高层考察团莅临康翔幸运物流总部进行参观考察，双方就未来物流供应链合作进行了深入交流。',
  },
  {
    title: '康翔幸运物流第一季度业绩总结会顺利召开',
    category: categories.COMPANY,
    excerpt: '我司召开了2026年第一季度业绩总结会议，全面回顾了季度工作成果，并对下一阶段的重点工作进行了部署。',
  },
  {
    title: '提升服务质量，我司开展全员专业技能培训',
    category: categories.COMPANY,
    excerpt: '为进一步提升员工的专业素养和服务水平，康翔幸运物流组织开展了为期一周的全员专业技能培训活动。',
  },
  {
    title: '康翔幸运物流与某知名船公司达成战略合作伙伴关系',
    category: categories.COMPANY,
    excerpt: '康翔幸运物流与全球知名船公司正式签署战略合作协议，双方将在航线资源、运价优势等方面展开深度合作。',
  },

  // Knowledge
  {
    title: '国际海运整箱(FCL)与拼箱(LCL)的区别是什么？',
    category: categories.KNOWLEDGE,
    excerpt: '在国际海运中，我们经常听到整箱(FCL)和拼箱(LCL)这两个术语。它们到底有什么区别？作为货主应该如何选择？',
  },
  {
    title: '外贸出口中常见的成交条款详解(FOB_CIF_DDP)',
    category: categories.KNOWLEDGE,
    excerpt: '国际贸易术语是外贸交易的基础。本文将为您详细解读FOB、CIF、DDP等常见成交条款的含义及风险划分。',
  },
  {
    title: '什么是海运提单？提单的种类有哪些？',
    category: categories.KNOWLEDGE,
    excerpt: '海运提单是国际物流中最重要的单证之一。本文将为您科普海运提单的定义、作用以及常见的提单种类。',
  },
  {
    title: '国际空运货物包装要求及注意事项',
    category: categories.KNOWLEDGE,
    excerpt: '空运货物对包装有着严格的要求。了解并遵守这些包装规范，不仅能确保货物安全，还能避免不必要的延误和费用。',
  },
  {
    title: '危险品运输需要具备哪些资质和条件？',
    category: categories.KNOWLEDGE,
    excerpt: '危险品运输属于特种物流范畴，对承运商的资质、操作流程及安全管理都有着极高的要求。',
  },
  {
    title: '如何正确计算国际物流的体积重？',
    category: categories.KNOWLEDGE,
    excerpt: '在国际物流中，运费往往取决于货物的实际重量和体积重量中的较大者。那么，体积重是如何计算的呢？',
  },
  {
    title: '报关与清关有什么区别？一文读懂',
    category: categories.KNOWLEDGE,
    excerpt: '报关和清关是国际物流中两个容易混淆的概念。本文将从定义、主体、流程等方面为您详细辨析两者的区别。',
  },
  {
    title: '中欧班列相比海运和空运有哪些优势？',
    category: categories.KNOWLEDGE,
    excerpt: '作为“一带一路”倡议的重要成果，中欧班列凭借其独特的优势，成为了连接欧亚大陆的重要物流通道。',
  },
  {
    title: '国际物流运输保险购买指南',
    category: categories.KNOWLEDGE,
    excerpt: '国际运输路途遥远，风险不可控因素较多。购买运输保险是规避风险的有效手段。本文为您提供一份详细的投保指南。',
  },
  {
    title: '常见的集装箱尺寸及规格大全',
    category: categories.KNOWLEDGE,
    excerpt: '集装箱是国际物流标准化的载体。了解20GP、40GP、40HQ等常见集装箱的尺寸规格，有助于您更合理地安排装箱计划。',
  },

  // Industry News
  {
    title: '2026年全球航运市场趋势预测',
    category: categories.INDUSTRY,
    excerpt: '随着全球经济的复苏和供应链的重构，2026年全球航运市场将呈现怎样的发展趋势？业内专家给出了最新预测。',
  },
  {
    title: '红海局势持续紧张，对全球海运费率的影响分析',
    category: categories.INDUSTRY,
    excerpt: '近期红海地区局势持续紧张，导致多艘商船遇袭，全球主要航运公司纷纷宣布暂停红海航线。这一事件对海运费率产生了深远影响。',
  },
  {
    title: '跨境电商物流发展新机遇与挑战',
    category: categories.INDUSTRY,
    excerpt: '跨境电商的蓬勃发展带动了物流需求的爆发式增长。面对新的机遇与挑战，物流企业应如何破局？',
  },
  {
    title: '数字化转型成为物流行业发展新引擎',
    category: categories.INDUSTRY,
    excerpt: '大数据、云计算、人工智能等技术的应用，正在深刻改变着物流行业的运作模式。数字化转型已成为行业发展的必由之路。',
  },
  {
    title: '绿色物流：航运业如何实现碳中和目标？',
    category: categories.INDUSTRY,
    excerpt: '在“双碳”目标背景下，绿色航运成为行业关注的焦点。航运业正通过使用清洁能源、优化航线等措施，积极推动节能减排。',
  },
  {
    title: '区域全面经济伙伴关系协定(RCEP)对物流业的利好',
    category: categories.INDUSTRY,
    excerpt: 'RCEP的生效实施，为区域内贸易自由化便利化注入了强劲动力，也为物流行业带来了前所未有的发展机遇。',
  },
  {
    title: '全球港口拥堵情况最新分析报告',
    category: categories.INDUSTRY,
    excerpt: '受多种因素影响，全球部分主要港口近期出现了不同程度的拥堵现象。本文将为您梳理最新的港口运行情况。',
  },
  {
    title: '航空货运市场回暖，运力需求持续增长',
    category: categories.INDUSTRY,
    excerpt: '随着电子产品、医药冷链等高附加值货物运输需求的增加，航空货运市场迎来回暖，运力供给日趋紧张。',
  },
  {
    title: '智慧物流园建设助力供应链效率提升',
    category: categories.INDUSTRY,
    excerpt: '智慧物流园通过集成应用物联网、自动化设备等先进技术，实现了物流作业的智能化、自动化，大幅提升了供应链效率。',
  },
  {
    title: '中国物流企业出海之路：机遇与策略',
    category: categories.INDUSTRY,
    excerpt: '伴随着中国制造走向全球，中国物流企业也加快了“出海”步伐。如何在国际市场上站稳脚跟，成为企业面临的重要课题。',
  },
];

const generateMarkdown = (post) => {
  const date = new Date();
  // Randomize date within last 3 months
  date.setDate(date.getDate() - Math.floor(Math.random() * 90));
  const dateStr = date.toISOString().split('T')[0];

  return `---
title: "${post.title}"
date: "${dateStr}"
excerpt: "${post.excerpt}"
category: "${post.category}"
coverImage: "/images/blog-default.jpg"
---

# ${post.title}

${post.excerpt}

## 详细内容

这里是文章的详细内容。作为一家专业的国际物流服务商，康翔幸运物流始终致力于为客户提供高效、安全、可靠的物流解决方案。

### 1. 背景介绍

随着全球化的深入发展，国际物流在供应链中的地位日益重要。${post.title} 这一话题引起了广泛关注。

### 2. 主要观点

- **观点一**：物流效率的提升是关键。
- **观点二**：成本控制需要精细化管理。
- **观点三**：服务质量决定客户满意度。

### 3. 我们的解决方案

针对这一情况，康翔幸运物流推出了一系列针对性的服务措施...

> 康翔幸运物流，您值得信赖的合作伙伴。

如果您有任何关于国际物流的需求，欢迎随时联系我们！

**联系电话**：+86 131-6803-9023
**电子邮箱**：alan@consentlogistics.com 
`;
};

posts.forEach((post) => {
  const slug = post.title
    .replace(/[^\u4e00-\u9fa5a-zA-Z0-9]/g, '-') // Replace non-alphanumeric/non-chinese chars with hyphen
    .replace(/-+/g, '-') // Replace multiple hyphens with single one
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
    
  // Simple english slug mapping or just use pinyin? 
  // For simplicity, let's just use a hash or simple counter if english is hard, 
  // but better to just use the chinese characters or mapped english if possible.
  // Actually, file names with chinese characters work fine in most modern systems.
  // Let's stick to the sanitized title.
  
  const fileName = `${slug}.md`;
  const filePath = path.join(postsDirectory, fileName);
  
  fs.writeFileSync(filePath, generateMarkdown(post));
  console.log(`Generated: ${fileName}`);
});

console.log('All posts generated successfully!');
