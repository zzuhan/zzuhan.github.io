import React from 'react';
import styles from './QA.scss';
import QA from '@/components/QA';
import { Router } from 'react-router';
import moment from 'moment';

const BaseQuestions = [
  {
    title: '如何达到最佳状态',
    status: 'error',
    answer: [
      '运动，冥想，休息，达到身体上的最佳状态。',
      '压力可控，每天没有特别紧张的感觉',
      '心理上的塑造。目标感，勇气，逆商。',
      '有梦想，有信念。',
      '工作心流。G点，需要扫除短板，获得工作成就感。第二天起来就想拿起来继续做',
      '全身心自主性，兴趣热爱，全身心的投入。(当下的面试完全为了自己，做个人的助手。工作中通过投入更多)',
      '有明确目标(要如何面试成功)，自主性(完全是为自己)，有计划(明确列举了前端工程化的内容)，造就的执行力，难度hold住，有挑战，有正反馈。',
      '成长的方法，复盘，自己的短板，',
      '严格要求自己。积极的品质'
    ]
  },
  {
    title: '自我激励的方法',
    answer: [
      '积极思考的习惯，成长思维。',
      '重塑大脑，假想成我是阎王或上坡，我会如何行动',
      '触发点。94年化学专业的，在Teambition架构组，现在在Leetcode，https://zhuanlan.zhihu.com/p/24607229。阿大，云构建的设计 http://taobaofed.org/blog/2016/01/29/fe-engineering-width-cloud-build/',
      '自尊心。6年的还是p6，面试的失败，工作的失败',
    ]
  },
  {
    title: '消极思考的时候(不自信)',
    answer: [
      '',
      '',
      ''
    ]
  },
  {
    title: '舒适区的自以为是',
    answer: [
      '出来面试，发现与厉害人，优秀团队的巨大差距',
      '平日里也没有目标，没有计划，没有差距指标，也就没有勤奋努力'
    ]
  },
  {
    title: '习惯养成问题',
    answer: [
      '就像工作中的按时上班，是成为专家必须执行的，勇敢直面痛苦，演员的自律',
      '@直面痛苦的勇气'
    ]
  },
  {
    title: '自制力问题',
    answer: [
      '@执行力原则',
      '早上不要粘在床上，起来洗脸穿好衣服',
      '断开网络，暂停下来。切断网络，离开手机，离开电脑',
      '切换发散的环境。(下去走走)',
      '去运动',
      '逼开始几分钟',
      '@自我苛责'
    ]
  }, {
    title: '直面痛苦的勇气',
    answer: [
      '接纳当下的处境',
      '接纳自己的缺点和不足，接纳倍讨厌的勇气',
      '人生苦难重重，每天从解决问题获得快乐'
    ]
}, 
{
  title: '苛刻的要求',
  answer: [
    '职业规划，远大目标是什么？如何达成？',
    '短期，想去最优秀的公司leetcode，如何进去',
    '对比那些非常优秀的人，如何战胜他们。94年的leetcode',
    ''
  ]
},
{
    title: '自我苛责',
    answer: [
      '按专家的要求工作了吗？再这样一年也到不了阎王的程度。',
      '给别人专家的感觉了吗',
      '工作担当，可靠了吗',
      '说出去是阿里，手淘工程师，对比别人',
      '家庭担当了吗',
      '6年了还是P6，这么低的薪资，对比阎王等P7'
    ]
},
{
  title: '领导力要求',
  status: 'error',
  answer: [
    '起来像创业者那样充满激情一天',
    '有清晰的目标，对目标充满信念',
    '严格要求自己，高要求，高改变。(自律，延迟满足）',
    '谨慎承诺，承诺要按计划交付'
  ]
},
{
  title: '遇到无动力怎么办',
  answer: [
    '长远且坚定的目标(2年成为前端技术经理)',
    '寻找快乐，积极幸福心理学，做有意义的事情，接纳自己看到成长',
    '积极的思考，十倍思维非常重要(我可以是技术经理，如何拿到一堆Offer，3.75成绩)',
    '对自己苛刻的要求()',
    '或许该放松下一下了',
    '回顾过去克服困难，都是小坎，跨一下，差距是方法和努力，充满自信',
    '@自我激励的方法',
    '找到当下困难解法，走出泥潭，取得胜利',
    '为什么对自己残酷，因为世界太残酷了'
  ]
}
];

const threeGansQuestions = [
  {
    title: '自己没有动力了',
    status: 'error',
    answer: [
      "https://www.yuque.com/chengkuan/great_person/energy#9Fe7L",
    ],
    type: 'link'
  },
  {
    title: '逃避困难时',
    status: 'error',
    answer: [
      "https://www.yuque.com/chengkuan/great_person/escape#TPz9a",
    ],
    type: 'link'
  },
  {
    title: '心力锻炼',
    answer: [
      '冥想。对困难对未来的思考。',
      '睡眠。休息可以恢复自制力。',
      '运动。可以消除焦虑的皮上脂肪，感觉非常轻松愉悦。'
    ]
  },
  {
    title: '独立思考(自我审视)',
    answer: [
      'why? 每次在独立思考时间，能重新抬头审视自己，思考当下问题。(离职后，思考应当做teamloader，思考6年我做了什么)',
      '许保证大脑被自我审视占据，而非玩耍的快乐，或对问题的思考时间',
      '暂停时间。长的如5.1这段不工作时间，短的通过断网方式。(否则就没时间去思考)',
      '独处。(如一个人住酒店时思考)',
      '发散环境。(独自一人走路，洗澡，开车时)',
      '运行。',
      '冥想时刻。',
      '放空压力和问题。一直紧绷时视角变窄。'
    ]
  },
  {
    title: '专注力(脑力)',
    answer: [
      'why? 非常重要，需要重视时间的质量',
      '1 精力曲线。找到G点，解决难题。低点就普通题或休息。',
      '2 心流。找到心流',
      '3 @体力(休息)',
      '4 专注模式和发散模式切换',
      '独自安静的环境。(一堆人在家时无法很好思考)',
      '开放的工作空间。(狭小的工作空间，无法思考)',
      '状态。太高压会导致视野变摘。',
    ]
  },
  {
    title: '体力(休息)',
    answer: [
      '运动。清空大脑的垃圾',
      '小休息(每天)。冥想，活动，运动。注：玩手机不是休息。',
      '大休息(一周)。做想做的运动或兴趣，到大自然中。逛街看电影等并不是好的休息。',
      '最高效的人都是最会休息的人。-> https://36kr.com/p/5176044'
    ]
  },
  {
    title: '失败的思考(论成长)',
    status: '',
    answer: [
      '一件事总是U型曲线，从初始高昂，挫折的低谷，再走出低谷。(项目是，面试过程也是)',
      '成长就是提出一个目标，失败，吸取教训(决定不同人的差异)，再提出更高目标，螺旋上升的',
    ]
  },
  {
    title: '不自信时',
    status: '',
    answer: [
      '@自我的曲线'
    ]
  },
  {
    title: '自我的曲线',
    status: '',
    answer: [
      '总是会受过去影响，感到不自信',
      '来看这个曲线，1 迷之自信 2 推翻到低谷 3 快速成长期(现在在这)',
      '认识到这个曲线，我应该可以'
    ]
  },
  {
    title: '精力',
    answer: [
      '最高精力来自于注入的意义。拥有伟大的梦想。',
      '积极自信的情绪',
    ]
  },
  {
    title: '焦虑自卑',
    answer: [
      '@自己解压方式',
      '精进，超越自己为目标。而不是跟别人对比',
      '接纳自己，看到自己的进步'
    ]
  },
  {
    title: '自己解压方式',
    answer: [
      '压力不可避免，找到自己解压的方式',
      '运动。(5.7通过hiit运动，又恢复了活力)',
      '旅行。到大自然中。回老家一趟放松'
    ]
  },
  {
    title: '逃避，不愿做',
    status: 'error',
    answer: [
     '不愿改变习惯，不想做某事，逃避困难，不敢直面自身的缺点',
     '因为要到非舒适的，想到困难和艰辛就把自己吓怕了',
     '重要迈出第一步，逼自己开始10分钟',
     '心理X光，你害怕的是什么',
     '如，不敢写文章(害怕写的不好)，不敢'
    ]
  },
  {
    title: '想生气时，说话前',
    status: 'error',
    answer: [
      '一般都是因为人际关系间产生的生气',
      '把别人放第一位，考虑他的需求为他着想，把自己放第二位。',
      '站在别人别人的考虑，同理心。她也不是故意的，有原因的'
    ]
  }
];

const growQuestions = [
  {
    title: '高效能',
    answer: [
      '保持高效能，才有时间做其它事情'
    ]
  },
  {
    title: '明方向，远正高',
    status: 'error',
    answer: [
      '决定终点的是，看的更远，更正确，更高。最后抓住机会',
      '更长远。1 远见，对未来思考。2 职业规划。',
      '更正确。1 认知。内容见xmind中。',
      '更高。1 格局 2 伟大目标(十倍思维) 3 认知(看到更高什么样)',
      '结果是你能抓到机会',
      'Action，'
    ]
  },
  {
    title: '梦想5步',
    status: 'error',
    answer: [
      '通过怎样的方法，才能达成我们的目标。',
      '1 目标。设定伟大目标，伟大期望才可能诞生伟大能力。',
      '2 当下限制短板。限制你达成目标，即当下的难点。',
      '3 核心方案。达到目标的路径是什么？有什么风险，如何解决。',
      '4 计划。对事情排优先级。',
      '5 复盘调整。针对一段时间复盘和调整'
    ]
  },
  {
    title: '阶段实施',
    status: 'error',
    answer: [
      '长远的目标太遥远。无法执行，没有明确方向导致执行力不足。',
      '期待，能像创业者那样，充满目标和激情',
      '提出阶段目标。明确有挑战。(如拿下腾讯，头条，leetcode面试)',
      '分解目标为具体内容，挑战，可行方案。(具体挑战内容为技术磨炼，沟通表达，开放问题，项目磨炼。内容及展开，可行方案，如何计划完成以上内容。)',
      '反馈和调整。进度反馈。复盘和调整。获得反馈(做的好坏，如导师)'
    ]
  },
  {
    title: '几个重要问题',
    status: 'error',
    answer: [
      '坚持思考几个问题。为何6年这个结果。这样三年后会如何。如何在被裁时还能一身轻松。'
    ]
  },
  {
    title: '微观方法',
    status: 'error',
    answer: [
      '-----做什么好-----',
      '提出挑战。提出新的阶段挑战',
      '下阶段的要求。拿下阶段要求问自己，如teamLeader该怎么做',
      'Refresh，提出更高要求，然后达到要求。(在手淘中就是这样成长)',
      '突破当下难点。是一道墙，一直阻碍着自己。',
      '对失败反思，发现问题，解决之',
      '-----怎么做好-----',
      '就是解决问题。分析问题并解决问题，而非埋头学习。',
      '战略勤奋。聪明的人，总能找到好方法。',
      '做到极致。不断精进，守破离',
      '寻找导师。少犯错误，指点迷津',
      '精进。(这个个人助手不断精进，最终变成自己的核心武器)',
      '-----精神思维-----',
      '积极思考，感想更伟大目标了吗?拿到腾讯，头条，leetcode等所有offer',
      '极致对标。看那些最厉害的人，我如何可以像他们那样。'
    ]
  },
  {
    title: '极度开放(Foolish，否定旧自己)',
    status: 'error',
    answer: [
      '不断的推翻过去的自己，寻找更正确的自己。',
      '意识，自己的假设一定存在着问题，有更好或可改进的地方。',
      'Action，1 认知升级(认知输入，面试，更厉害人打击，请教导师) 2 反馈(面试，导师老板指正，别人指出) 3 @当局者迷 4 后退一步，反思自己 https://www.zhihu.com/question/20189498'
    ]
  },
  {
    title: '思维&方法升级(Hungry)',
    status: 'error',
    answer: [
      '灌输新的思维方法，如从《原则》《精进》中的输入。',
      '那些厉害的人，总是去饥渴的听大牛的分享。',
      'Action，阅读，'
    ]
  },
  {
    title: '复盘',
    status: 'error',
    answer: [
      '复盘才能发现问题，及时纠正，赢得更多时间和更好解决问题',
    ]
  },
  {
    title: '职业价值认知',
    status: 'error',
    answer: [
      '比拼的是创造价值。转变为思考如何比别人更有价值。',
      '就是解决问题。不是技术有多强，而是帮助解决多大问题。业务问题也是',
      '价值判断案例。1 fusion解决阿里业务下不同团队重复建设。2 百度一个架构帮助今日头条的架构改造了所有的系统'
    ]
  },
  {
    title: '优秀人的认知',
    status: 'error',
    answer: [
    ]
  },
  // {
  //   title: '就是解决问题',
  //   status: 'error',
  //   answer: [
  //     '最重要的不是掌握多少技术，多少技术难点，而是发现，分析和解决问题能力，最终创造价值。着一定很难。',
  //     '案例，当下的面试，你有尝试分析问题，解决问题，求助等方法了吗？而是埋头去补充技术'
  //   ]
  // },
  // {
  //   title: '战略勤奋',
  //   status: 'error',
  //   answer: [
  //     '比拼谁更',
  //   ]
  // },
  // {
  //   title: '重要的是方法(导师)',
  //   status: 'error',
  //   answer: [
  //     '寻找一个人生导师的重要意义，少犯错误',
  //     '更专业的方法。(打篮球时好的教练，健身时正确的姿势。别人的晋升要求)',
  //     '都是针对问题，提出更好的方法。(设计解决自身自制力问题)'
  //   ]
  // },
  // {
  //   title: '成长利器-复盘',
  //   status: 'error',
  //   answer: [
  //     '复盘是快速成长方法',
  //     '发现自身最大的问题，刻不容缓，获得巨大提升',
  //     '复盘方法，目标是什么？结果差距是什么？再来一次如何避免？'
  //   ]
  // },
  // {
  //   title: '梦想5步',
  //   status: 'error',
  //   answer: [
  //     '1 伟大目标',
  //     '2 限制性短板',
  //     '3 对短板的深入分析',
  //     '3 核心方案',
  //     '4 计划',
  //     '5 行动？执行力？',
  //     '6 复盘和调整'
  //   ]
  // },
  // {
  //   title: '提升高度',
  //   answer: [
  //     '认知。(对晋升，前端工程师几项要求的认知。对前端的认知，出来才发现那么多厉害的人，业务可以做那么多改进。)',
  //     '格局。(前端Leader该做好哪些事情)',
  //     '远见。(对前端未来思考，技术未来，产业未来)'
  //   ]
  // },
 
  // {
  //   title: 'Stay Foolish(质疑否定)',
  //   answer: [
  //     '不要自以为是，在面试前的自以为是',
  //     '极度开放，找人来否定自己',
  //     '质疑自己当下的判断或方向，找专家帮助审查'
  //   ]
  // },
  // {
  //   title: 'Stay Hungry(好方法)',
  //   answer: [
  //     '保持饥饿，像高人学习思考和方法(从阎王学到对Weex的看法)',
  //   ]
  // },
  // {
  //   title: 'Refresh',
  //   answer: [
  //     '新的要求',
  //     '新的习惯才能迎接新的挑战'
  //   ]
  // },
  // {
  //   title: '突破当下难点',
  //   status: 'error',
  //   answer: [
  //     '努力是没用的，最重要解决当下的问题，或称之为那道墙。(如程序设计这道坎，现在最重要的，把它睬平了，变成你的优势项)',
  //     '对自身问题的刻不容缓'
  //   ]
  // },
  // {
  //   title: '目标',
  //   answer: [
  //     '职业规划，伟大目标',
  //     '短期目标',sss
  //     '挑战是什么？'
  //   ]
  // }
];

const methodQuestions = [
  {
    title: '执行力原则',
    answer: [
      '缺乏激动人心梦想和目标(5级工程师，4级工程师)',
      '阶段目标不清晰，计划和时间不清晰',
      '方案不清晰，不知道如何才能达到目标。(到底学哪个重要，如何赢得面试)'
    ]
  },
  {
    title: '学习原则和要求',
    answer: [
      '明确的目标结果，要解决什么问题，投入产出比',
      '严苛的要求，讲给老板同事听',
      '先制定思路，大纲',
      '有限的时间，无限时间会陷入低效',
      '状态重要，对自己有信心'
    ]
  },
  {
    title: '注意力',
    answer: [
      '在自己的身上'
    ]
  },
  {
    title: '最重要的事',
    status: 'error',
    answer: [
      '当下的难点和挑战，哪些觉得做不到的',
      '否定自己，刷新自己的认知。(5.7发现解决问题才最重要，过多的无效努力)',
      '如何在1年后P7，绞尽脑汁',
      '上面的成长方法'
    ]
  },
  {
    title: '思维',
    answer: [
      '十倍思维，做什么才能达到10倍的目标。绞尽脑汁，如何到前端架构师。',
      '痛苦思维，只有非常痛苦，才能够成长',
      '精要极致思维，只读精品文章，只做事一件轰动的事，沉淀思维。如魔影',
      '专家思维，深度优先，在工程化，React上与专家区别',
      '导师专家求助，质疑自己，像专家请教，跨平台理解RN等',
      'hack思维，突破自我，克服困难，接触新事物',
      '竞争思维，如何超越周围的人'
    ]
  },
  {
    title: '更好的方法',
    answer: [
      '认知',
      '格局',
      '远见'
    ]
  },
]

const solveQuestions = [
  {
    title: '行动的原则',
    answer: [
      '任何行动都有目的性，都是在解决某一问题，不断锻炼和提升解决问题能力',
      '直面和解决问题。勇敢直面残酷问题，而非逃避。(逃避面试残酷问题，直接去学React，Webpack等)',
      '我聪明吗？战略勤奋了吗？有去寻找更好的方法了吗?',
      '问题的分析，是否问题答案做定义。(为何要两个屏幕串联，原因是)',
      '1 why? 目标，问题是什么？想要的结果是什么? (结果是通过面试，找到好的岗位)',
      '2 how? 核心方案？如何做好，关键点是什么？计划方案？(分析面试问题，应该SWOT，发挥优势)',
      '3 风险是什么？如何解决风险。总是不如预期，底线是什么？',
      '4 how much？值得投入多少',
      '5 when 一定是现在做吗？(买脚垫，可以618再做)',
      '@解题状态',
      '要求，限定时间。(否则长时间的低效)'
    ]
  },
  {
    title: '抬头看路',
    answer: [
      '当下方法效果如何。是否达预期了，怎么调整 ?(知乎搜解决巨婴不是好办法)',
      '快速试错，切换其它路线',
      '当下投入产出如何。(投入和产出了多少，是否解决了问题)',
      '需要做什么调整会更好',
      '质疑自己的假设是否正确',
      '问自己在做什么(电梯测试)',
      '必须质疑，多问问题是什么？能解决问题吗？(我做个人助手的目的，是否能达到预期)',
      '多问为什么'
    ]
  },
  {
    title: '状态',
    answer: [
      '情绪。压力和焦虑会让自己视野变窄',
      '信念。相信自己可以解决好',
      '心流。目标，挑战区，反馈。',
      '@精力管理 休息和曲线等',
      '发散模式和专注模式'
    ]
  },
  {
    title: '是否尽力',
    answer: [
      '面试，可以像老板，像阎王，像他人请教帮助'
    ]
  },
  {
    title: '解决不了的问题',
    answer: [
      '知道自己边界，求助他人是好解法，不要傻干楞干'
    ]
  },
  {
    title: '当局者迷',
    answer: [
      '看不到在自身存在的问题，外部人看的清楚',
      '如何做。1 借助外力如老板或老师同时指出自身问题 2 换位思考，跳出现有位置，站在上帝视角看问题 如果别人遇到找我指点，我会如何帮他解。',
      '[为什么当局者迷，旁观者清？ - 知乎](https://www.zhihu.com/question/20189498)'
    ]
  },
  {
    title: '优秀的方法',
    answer: [
      '都是分类控。将webpack流程分为三个阶段。将任务按重要和紧急来划分。',
      '抽象归纳能力',
      '结构化，总分的结构',
      '换位思考问题。跳出现有位置，站在上帝视角看问题。（解面试的问题，如果我是面试官，一个专家，怎样的我会认为他比较牛，我认为什么是专家)'
    ]
  },
  {
    title: '如何做好一件事(学习，解决问题)',
    answer: [
      '认知 + 方法 + 反馈',
      '1 认知。正确的认识。如面试的认知(如果有个产品就不会犄角旮旯，还是要考技术基础)。',
      '2 方法。找到好的方法。技术学习，做中学。',
      '3 反馈。通过面试得到反馈，通过老板，找专家评价自己。'
    ]
  }
]

const techQuestions = [
  {
    title: '技术规划',
    answer: [
      '横向广度。从前到后，如从产品到设计，编码',
      '纵向垂直。开发阶段工具垂直看，vscode，chrome，chrome调试',
      '点线面。'
    ]
  },
  {
    title: '画图能力',
    answer: [
      'React的event的模型抽象画图',
      '前端工程化如何画图表述。(分几个元素归纳)'
    ]
  },
  {
    title: '技术的日常',
    answer: [
      '要像能谈论NBA球员那样探讨技术'
    ]
  },
  {
    title: '技术的几个点',
    answer: [
      '先进性，最先进的是如何的',
      '思想，有哪些更优异的思想'
    ]
  }
];

let questions = [].concat(BaseQuestions).concat(solveQuestions).concat(threeGansQuestions).concat(growQuestions).concat(methodQuestions);

export default class AppContainer extends React.Component {
  state = {
    answers: []
  }

  showAnswer = qa => {
    if(qa.type == 'link') {
      return window.open(qa.answer[0], '_blank');
    }

    this.setState({
      answers: [...this.state.answers, qa.answer]
    }, function callback(){
      console.log(this.state.answers)
    });

    import('@/components/lazyload').then( str => {
      console.log(str);
    });
  }

  showAnswerByTitle = title => {
    let qa = questions.find(question => question.title.indexOf(title) !== -1)
    if(qa) {
      this.setState({
        answers: [...this.state.answers, qa.answer]
      }, function callback(){
        console.log(this.state.answers)
      });
    } else {
      this.setState({
        answers: [...this.state.answers, [`未找到"${title}"对应的答案`]]
      }, function callback(){
        console.log(this.state.answers)
      });
    }
  }

  onAnwserClick = (title) => {
   
    if(title.indexOf('@') !== -1) {
      this.showAnswerByTitle(title.slice(1));
    }
  }

  render() {
    const { answers } = this.state;

    window.require && require("@weex/dom");

    return (
        <div>
            <span className={styles.sectionTitle}>基础要求</span>
            <div className={styles.qaList}>
              {BaseQuestions.map(qa => {
                return <QA onClick={this.showAnswer} qa={qa} />;
              })}
            </div>
            <span className={styles.sectionTitle}>三力</span>
            <div className={styles.qaList}>
              {threeGansQuestions.map(qa => {
                return <QA onClick={this.showAnswer} qa={qa} />;
              })}
            </div>
            <span className={styles.sectionTitle}>成长&成功</span>
            <div className={styles.qaList}>
              {growQuestions.map(qa => {
                return <QA onClick={this.showAnswer} qa={qa} />;
              })}
            </div>
            <span className={styles.sectionTitle}>行动方法</span>
            <div className={styles.qaList}>
              {methodQuestions.map(qa => {
                return <QA onClick={this.showAnswer} qa={qa} />;
              })}
            </div>
            <span className={styles.sectionTitle}>解决问题</span>
            <div className={styles.qaList}>
              {solveQuestions.map(qa => {
                return <QA onClick={this.showAnswer} qa={qa} />;
              })}
            </div>
            <span className={styles.sectionTitle}>技术</span>
            <div className={styles.qaList}>
              {techQuestions.map(qa => {
                return <QA onClick={this.showAnswer} qa={qa} />;
              })}
            </div>
            {answers.map(answer => {
              return <ul className={styles.answerList}>
                { answer.map(a => <li className={styles.answerItem} onClick={()=>{this.onAnwserClick(a)} }>{a}</li>)}
              </ul>;
            })}
        </div>
    );
  }
}
