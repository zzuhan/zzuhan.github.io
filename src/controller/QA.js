import React from 'react';
import styles from './QA.scss';
import QA from 'qa';
import { Router } from 'react-router';
import moment from 'moment';

moment();

const BaseQuestions = [
  {
    title: '心理状态要求',
    status: 'error',
    answer: [
      '每天有目标感，清晰可行的职业规划，前端架构师，到架构组，成为技术Leader，充满动力，不屈不挠，想尽办法。',
      '积极思考，伟大梦想。诞生伟大能力。(我可以成为前端工程化专家，前端Leader)',
      '乐观思考，35岁的职业危机，你还有很多可能性，成为P7，P8就不用担心',
      '不屈不挠，我为什么不可以成为他们那样',
      '拥有信念，信心，相信一定可以成为前端工程专家，并付诸实践。(把过去的低谷踩在脚下)',
      '为了目标全力以赴，尽自己最大的努力，像创业者那样。能抓紧一切碎片化时间。',
      '勇敢，接纳自己的缺点和不足，直面惨淡现实(面试前能力不足现实)，有被讨厌的勇气。'
    ]
  },
  {
    title: '对自己的要求',
    status: 'error',
    answer: [
      '要让自己感到痛苦和焦虑。即提出伟大目标和挑战，绞尽脑汁思考如何达成。(独挡一面，团队Leader，架构师)。(太快乐就是安逸)',
      '把Refresh变成必须做的，职业规划，专业，可靠，聪明，战略勤奋。',
      '专业。我的内容明天要讲给老板讲给别人听',
      '转变思路，要做10人中的top，而非就这样，',
      '@严格的要求',
      '聪明(多思考)',
      '专家，做专业和专家的标准',
      '领导力',
      '家庭的担当和责任，都是华茵在出力。',
      '解决问题能力'
    ]
  },
  {
    title: '自我激励的方法',
    answer: [
      '重塑大脑，假想成我是阎王或上坡，我会如何行动',
      '看别人激励自己，94年化学专业的，在Teambition架构组，现在在Leetcode，https://zhuanlan.zhihu.com/p/24607229',
      '阿大，云构建的设计 http://taobaofed.org/blog/2016/01/29/fe-engineering-width-cloud-build/',
      '积极思考的习惯'
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
      '早上不要粘在床上，起来洗脸穿好衣服',
      '断开网络，暂停下来。切断网络，离开手机，离开电脑',
      '发散的环境，下去走走',
      '去运动',
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
}
];

const threeGansQuestions = [
  {
    title: '心力',
    answer: [
      '冥想',
      '睡眠',
      '运动'
    ]
  },
  {
    title: '脑力(更好思考学习)',
    answer: [
      '安静独立的环境，在一堆人时无法更好的思考。',
      '开放的环境，减少在封闭的环境等情况'
    ]
  },
  {
    title: '体力',
    answer: [
      ''
    ]
  },
  {
    title: '精力',
    answer: [
      '积极乐观的情绪',
      '大休息和小休息'
    ]
  }
];

const growQuestions = [
  {
    title: '思维要求',
    answer: [
      '必须思维。都变成必须的，而非可有可无。专业，可靠，新习惯，梦想六步，职业规划，解决问题时系统性思考，自我管理。',
      '战略勤奋。(有什么更好的方法和选择)',
      '比价值产出，而非比时间投入。(与阎王等人对比价值产出，他更聪明，更高度)',
      '十倍思维。十倍或更伟大的期望才能产生大的进步。',
      'Top极致思维。如何成为团队中的Top1，如何牛X的赢得面试。'
    ]
  },
  {
    title: '梦想6步',
    answer: [
      '1 伟大目标',
      '2 限制性短板',
      '3 对短板的深入分析',
      '3 核心方案',
      '4 计划',
      '5 行动？执行力？',
      '6 复盘和调整'
    ]
  },
  {
    title: '提升高度',
    answer: [
      '认知。(对晋升，前端工程师几项要求的认知。对前端的认知，出来才发现那么多厉害的人，业务可以做那么多改进。)',
      '格局。(前端Leader该做好哪些事情)',
      '远见。(对前端未来思考，技术未来，产业未来)'
    ]
  },
  {
    title: '好的方法',
    answer: [
      '更专业的方法。(打篮球时好的教练，健身时正确的姿势。别人的晋升要求)',
      '都是针对问题，提出更好的方法。(设计解决自身自制力问题)'
    ]
  },
  {
    title: 'Stay Foolish(质疑)',
    answer: [
      '不要自以为是，在面试前的自以为是',
      '质疑自己当下的判断或方向，找专家帮助审查'
    ]
  },
  {
    title: 'Stay Hungry',
    answer: [
      '保持饥饿，像高人学习思考和方法(从阎王学到对Weex的看法)',
    ]
  },
  {
    title: 'Refresh',
    answer: [
      '新的要求',
      '新的习惯才能迎接新的挑战'
    ]
  },
  {
    title: '难点和问题',
    answer: [
      '努力是没用的，最重要解决当下的问题，或称之为那道墙',
      '对自身问题的刻不容缓'
    ]
  },
  {
    title: '目标',
    answer: [
      '职业规划，伟大目标',
      '短期目标',
      '挑战是什么？'
    ]
  }
];

const methodQuestions = [
  {
    title: '要求'
  },
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
    answer: [
      '当下的难点和挑战',
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
  {
    title: '行动的原则',
    answer: [
      '都是在解决问题，不断锻炼和提升解决问题能力',
      '首先，勇敢直面残酷问题，而非逃避。(逃避面试残酷问题，直接去学React，Webpack等)',
      '1 目标，问题是什么？想要的结果是什么? (结果是通过面试，找到好的岗位)',
      '2 核心方案？如何做好，关键点是什么？计划方案？(分析面试问题，应该SWOT，发挥优势)',
      '3 风险是什么？如何解决风险。总是不如预期，底线是什么？',
      '4 when 一定是现在做吗？(买脚垫，可以618再做)',
      '过程中，多问为什么？多问我在做什么(电梯测试)',
      '过程中，快速试错，切换其它路线',
      '过程中，抬头看路，质疑自己',
      '@解题状态',
      '要求，限定时间'
    ]
  }
]

const solveQuestions = [
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
    title: '状态',
    answer: [
      '情绪，压力和焦虑会让自己视野变窄',
      '信念，相信自己可以解决好',
      '心流，目标，挑战区，反馈'
    ]
  }
]

export default class AppContainer extends React.Component {
  state = {
    answers: []
  }

  showAnswer = qa => {
    this.setState({
      answers: [...this.state.answers, qa.answer]
    }, function callback(){
      console.log(this.state.answers)
    });
  }

  showAnswerByTitle = title => {
    let qa = questions.find(question => question.title === title);
    if(qa) {
      this.setState({
        answers: [...this.state.answers, qa.answer]
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
            <span className={styles.sectionTitle}>成长方法</span>
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
            <span className={styles.sectionTitle}>解决问题22333</span>
            <div className={styles.qaList}>
              {solveQuestions.map(qa => {
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
