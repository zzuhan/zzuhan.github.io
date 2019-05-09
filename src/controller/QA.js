import React from 'react';
import styles from './QA.scss';
import QA from 'qa';
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
      '有明确目标(要如何面试成功)，自主性(完全是为自己)，有计划(前端工程化的内容)，造就的执行力，难度hold住，有挑战，有正反馈。',
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
},
{
  title: '不愿改变怎么办',
  answer: [
   
  ]
}
];

const threeGansQuestions = [
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
    status: 'error',
    answer: [
      '一件事总是U型曲线，从初始高昂，挫折的低谷，再走出低谷。(项目是，面试过程也是)',
      '成长就是提出一个目标，失败，吸取教训(决定不同人的差异)，再提出更高目标，螺旋上升的',
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
    title: '就是精进',
    status: 'error',
    answer: [
      '当下的这个个人助手，通过不断精进达到专家，而非只写一版'
    ]
  },
  {
    title: '就是解决问题',
    status: 'error',
    answer: [
      '最重要的不是掌握多少技术，多少技术难点，而是发现，分析和解决问题能力，最终创造价值。着一定很难。',
      '案例，当下的面试，你有尝试分析问题，解决问题，求助等方法了吗？而是埋头去补充技术'
    ]
  },
  {
    title: '重要的是方法(导师)',
    status: 'error',
    answer: [
      '寻找一个人生导师的重要意义，少犯错误',
      '更专业的方法。(打篮球时好的教练，健身时正确的姿势。别人的晋升要求)',
      '都是针对问题，提出更好的方法。(设计解决自身自制力问题)'
    ]
  },
  {
    title: '成长利器-复盘',
    status: 'error',
    answer: [
      '复盘是快速成长方法',
      '发现自身最大的问题，刻不容缓，获得巨大提升',
      '复盘方法，目标是什么？结果差距是什么？再来一次如何避免？'
    ]
  },
  {
    title: '梦想5步',
    status: 'error',
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
    title: '突破当下难点',
    status: 'error',
    answer: [
      '努力是没用的，最重要解决当下的问题，或称之为那道墙。(如程序设计这道坎，现在最重要的，把它睬平了，变成你的优势项)',
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

let questions = [].concat(BaseQuestions).concat(solveQuestions).concat(threeGansQuestions).concat(growQuestions).concat(methodQuestions);

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
            <span className={styles.sectionTitle}>解决问题</span>
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
