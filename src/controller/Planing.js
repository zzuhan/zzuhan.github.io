import React from 'react'
import styles from '@/controller/Planing.scss'
import Plan from '@/components/Plan'
import { Router } from 'react-router'
import Collapse from '@/components/Collapse'
import { GoChevronUp, GoChevronDown, GoChevronRight } from 'react-icons/go'

export default class AppContainer extends React.Component {
  state = {
    openRequirment: false,
    openLearn: true,
    openHabit: false
  }

  showAnswer = qa => {
    this.setState(
      {
        answers: [...this.state.answers, qa.answer]
      },
      function callback() {
        console.log(this.state.answers)
      }
    )
  }

  showAnswerByTitle = title => {
    let qa = questions.find(question => question.title === title)
    if (qa) {
      this.setState(
        {
          answers: [...this.state.answers, qa.answer]
        },
        function callback() {
          console.log(this.state.answers)
        }
      )
    }
  }

  onAnwserClick = title => {
    if (title.indexOf('@') !== -1) {
      this.showAnswerByTitle(title.slice(1))
    }
  }

  toggleRequirement = () => {
    this.setState({
      openRequirment: !this.state.openRequirment
    })
  }

  toggleLearn = () => {
    this.setState({
      openLearn: !this.state.openLearn
    })
  }

  toggleHabit = () => {
    this.setState({
      openHabit: !this.state.openHabit
    })
  }

  render() {
    const { openRequirment, openLearn, openHabit } = this.state

    return (
      <div className={styles.dayList}>
        <div className={styles.dayListx}></div>
        <section className={styles.daySection}>
          <p className={styles.sectionTitle} onClick={this.toggleRequirement}>
            {' '}
            {openRequirment ? (
              <GoChevronDown className={styles.toggleIcon} />
            ) : (
              <GoChevronRight className={styles.toggleIcon} />
            )}{' '}
            对自己的几项要求
          </p>
          {openRequirment ? (
            <table
              className={[
                styles.requiredTable,
                styles.pureTable,
                styles.pureTableBordered
              ].join(' ')}
            >
              <thead>
                <tr>
                  <td>标题</td>
                  <td>要求</td>
                  <td>当下和Obstacle</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ width: '180px' }} class={styles.statusError}>
                    0 目标感，成为P7坚定信念，为了能达到需要付超乎常人努力
                  </td>
                  <td>
                    只有成为P7级别，才能在行业站稳脚跟，现在每天学一点指定淘汰，想着换行业也是在逃避问题。
                    大脑能积极思考，P7坚定的信念，但P7不是现在这样随便努力下就可以的，要能时刻在脑中，并为之付出2~3倍努力拼搏。()
                    目标感，即一直挂在心头，就想办法全力去做，早上醒来后做，做汽车做，做正向推演逆向推演，
                  </td>
                  <td>
                    <ul>
                      <li>
                        当下每天就是周末学一点，状态不好算了，每天早晚学一点，工作中突破一点，做的不好也没啥。这完全不行。
                        <strong>
                          只是学习看书的习惯，而不是下定决心，为了成为P7而疯狂的努力
                        </strong>
                      </li>
                      <li>
                        早上玩手机，早晚地铁时间没有很好利用，不做长期故事性，表现不好也不做认真的复盘，工作中并没有特别突破难点
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        动力来自于哪里？来自于家庭责任感，对未来的危机感，想要有延续的稳定的工作和生活。
                      </li>
                      <li>
                        去运动。必须提供好的精力，自制力才可以。坚持运动，冥想，休息，每天的全清训练。(9.29
                        骑车触发的这些思考)
                      </li>
                      <li>
                        超积极，心理暗示我可以做的很好？提出伟大挑战，要做到业内领先的监控系统。可实现，
                      </li>
                      <li>
                        目标感，期望值理论，OKR管理。实现目标核心路径(期望值)，OKR
                      </li>
                      <li>
                        什么叫极大努力，是真破头皮的想做好，付出努力，而不是现在的习惯性每天多看一点。正向推演，反向推演thanos，故事性是如何的，如何分配到每天去达成。
                      </li>
                      <li>
                        突破自己舒适区，如找专家提升认知找解法，突破自己的恐惧
                      </li>
                    </ul>
                  </td>
                </tr>
                {/* <tr>
                  <td>0 改变自私，家的责任担当，追求幸福</td>
                  <td>付出是责任和义务，改变自私，追求幸福意义</td>
                  <td>
                    <Collapse
                      data={[
                        '1 改变自私，追求他人快乐，处处为他人着想，追求内心真正的快乐。1 把自己放在最后考虑，他人放在第一位的思维习惯。2 主动理解体会他人的想法和需求。3 少用”我“这个自，多用”你”。4 多帮助朋友，不求回报 (不断尝试，成为习惯。我为他人带来什么？)',
                        '2 明确义务责任要求，为家庭工作做点什么，多做一点，主动愿意付出(不愿付出还是自私，只看到自己会牺牲什么)，避免一点点就伟大要死。(1 分担家务，自己整理衣物，洗碗，2 买东西 3 长辈多谈话开心。我为家庭带来了什么？4 感恩，别人做了那么多)',
                        '3 自我苛责，直面问题，承担责任，不找理由。(工作太忙，没时间照顾家。面试好难，好怕这个问题。害怕未来失业，不努力想怎么解决。)',
                        '4 Owner，担当。承担更多，为家承担更多。',
                        '5 感悟幸福。最快乐的人是广泛而令人满意的人际关系。爱的幸福。(1 注意力放到理解对方，对方的价值，想法，期望 2 用心去爱，爱是经营出来的  3 )'
                        // '5 思考存在的意义',
                        // '6 生长和释放自己的本性。爱生命能量尽量伸展它，想做的事情尽量努力去做。'
                      ]}
                    />
                  </td>
                </tr> */}
                {/* <tr>
                  <td>2 心理上的塑造和要求</td>
                  <td></td>
                  <td>
                    <Collapse data={[
                      '心理上决定能否大的成就，并保证自己的快乐',
                      '1 目标感。伟大的梦想，清晰的目标感，并充满信心信念(相信自己)。有伟大成就的都是有长期且坚定的梦想。(两年成为前端架构师)',
                      '2 积极乐观思考的习惯。信心和信念。到35岁还有非常多可能，不用惧怕未来。做10个人中top，375。如何才能做好Leader，带团队成功。如何拿下面试好offer，争抢的。@自我激励的方法',
                      '3 勇气。被讨厌的勇气，直面困难勇气。自我接纳。强大的内心。(敢于直面简历不足去修正，敢于直面自己不足去请教别人)？',
                      '4 逆商，反弹力。即使逆境，也要心存希望。对失败的思考。@失败的思考',
                      '5 压力和焦虑。',
                      '5 快乐幸福心理学。追求认真的生活，工作的快乐和意义。',
                      '6 不服输。任性。自尊。面试被直接赶出的自尊心。',
                    ]} />
                  </td>
                </tr> */}
                {/* <tr>
                  <td class={styles.statusError}>
                    1 让自己痛苦(提出高要求，价值观等)
                  </td>
                  <td>舒服成长太少，人总是选择轻松，让自己熟悉痛苦</td>
                  <td>
                    <Collapse
                      data={[
                        '痛苦的绞尽脑汁去想如何做到，而非随便想想为止。',
                        '为什么习惯之后愿意痛苦，即吴东相对论讲的，痛苦成为习惯，感受解决问题快乐，感受痛苦后的反馈和结果',
                        '当下的目标和要求要明确写下来，不写的化也没有参考，还是一纸白字',
                        '1 高目标，十倍思维。总是满足于进步了一点点。转为提出伟大目标，如在几号拿到各厂offer，可选择想去的公司。',
                        '2 一定要思维。总是遇到挫折就消极放弃高目标。下定决心一定要。每天必定要付出很多，做出计划，聪明的思考，复盘当下问题，进度达不到如何改变，有勇气请教别人。',
                        '3 必须思维。复盘，梦想6步，职业规划都是必须做的。',
                        '4 难题思维。明天Leader，面leetcode，375成绩。',
                        '5 价值观专家，自我归责。专家不该出问题，做到专家标准',
                        '6 担当。工作的担当，家庭的担当。个人成长担当。',
                        '7 苛责。和别人的对比，6年了P6。'
                      ]}
                    />
                  </td>
                </tr>
                <tr>
                  <td class={styles.statusError}>几项要求</td>
                  <td></td>
                  <td>
                    <Collapse
                      data={[
                        '1 直面问题，解决问题。1 多问问当下问题是什么？我在做什么？是否在逃避问题而学习(记录)等。2 问题更好的解法是什么?',
                        '2 聪明。战略勤奋，勤于思考，问题更好的解法是什么?',
                        '3 领导力。领导自己达成设定的目标，执行力，承诺',
                        '4 专业认真。做到一个专业人的水准。(假想成明天要给老板讲)',
                        '5 可靠。值得信赖的，承诺达成',
                        '6 担当Owner。敢于担当更大的责任。要先有能力',
                        '4 Stay Foolish。反馈和推翻自己。',
                        '5 Stay Hungry。像高人学习思维和方法。'
                      ]}
                    />
                  </td>
                </tr> */}
                {/* <tr>
                  <td>4 个人价值观</td>
                  <td>你想成为什么样的人</td>
                  <td>
                    <Collapse data={[
                        '负责。对自己负责，对工作负责，对家人负责。'
                      ]} />
                  </td>
                </tr> */}
                {/* <tr>
                  <td>2 价值就是解决问题</td>
                  <td>最重要是解决问题</td>
                  <td>
                    <Collapse data={[
                        '工作。最后沉淀的就是分析解决问题能力。',
                        '直面问题。(不直面面试问题，用学习React等来逃避)',
                        '解决分析问题。(如何赢得面试。掌握技术不唯一，还有广度，程序设计能力。)',
                        '价值就是解决问题。(玉伯，最后在不断解决问题，完成自己的几个梦)'
                    ]} />
                  </td>
                </tr> */}
                {/* <tr>
                  <td>6 战略勤奋</td>
                  <td></td>
                  <td>
                    <Collapse data={[
                      '即聪明，公司需要的是聪明的人。。。。。',
                      '多停下来思考。也即勤思考，聪明，最重要了',
                      '勤思考，聪明的人。(如何超越面试，如何成为前端工程化专）',
                      ]} />
                  </td>
                </tr> */}
                {/* <tr>
                  <td>7 质疑，否定，风险</td>
                  <td>一定存在诸多的问题的</td>
                  <td>
                    <Collapse data={[
                      '总是会犯很多错误，如何少犯错误。。。',
                      '质疑。质疑个人助手的价值，用xmind是否也可以替代？',
                      '否定。推翻自己当下的行为',
                      '风险。可能有什么风险',
                    ]} />
                  </td>
                </tr> */}
                {/* <tr>
                  <td> 同理心</td>
                  <td>也即能换角度思考，很多都能豁然开朗</td>
                  <td>
                    <Collapse data={[
                      '多站在华茵角度为她思考，站在老板的角度思考',
                    ]} />
                  </td>
                </tr> */}
                {/* <tr>
                  <td>9 学习和提升的习惯</td>
                  <td></td>
                  <td>
                    <Collapse data={[
                        '有正确的方法，不断的提升自己',
                        'Foolish，极度开放，推翻和否定自己。(面试发现过去的自以为是，5.8搜面经发现与别人的差距)',
                        'Hungry，学习新方法。',
                        '寻找导师，求助。(寻找导师，或者有问题多向别人求助)'
                      ]} />
                  </td>
                </tr>   */}
                {/* <tr>
                  <td>10 寻找和做你想做</td>
                  <td>找到你最大的兴趣才会充满激情，可能成功</td>
                  <td>
                    <Collapse data={[
                      '把玩手机，看电影等事件替换为你想做的事情。工作中做更多事情。'
                    ]} />
                  </td>
                </tr> */}
              </tbody>
            </table>
          ) : null}
        </section>
        <section className={styles.daySection}>
          <p className={styles.sectionTitle} onClick={this.toggleLearn}>
            {' '}
            {openLearn ? (
              <GoChevronDown className={styles.toggleIcon} />
            ) : (
              <GoChevronRight className={styles.toggleIcon} />
            )}
            学习的几项内容 (想想将来出去
            的产品是什么，不再尴尬，而是选自己想要的所选)
          </p>
          {openLearn ? (
            <table
              className={[styles.pureTable, styles.pureTableBordered].join(' ')}
            >
              <thead>
                <tr>
                  <td>项目</td>
                  <td>时间要求</td>
                  <td>内容</td>
                  <td>How</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>底层的管理</td>
                  <td>
                    <Collapse
                      data={[
                        '10月',
                        '当下非常重要，要求是否为了目标付出超乎常人的努力，2~3倍努力，才可能成为P7，成为hacker',
                        '还有可能成为第二职业',
                        'OKR：最后创造出一个可用的Web系统，输出一系列文章？'
                      ]}
                    />
                  </td>
                  <td>
                    <Collapse
                      data={[
                        ' ',
                        '心力，人生想要什么，期望值，足够想，全情训练，飞轮效应，心流',
                        '如果就，激励方法，自信，恐惧，逃避困难(拖延)，逃避思考，自律',
                        '目标感，执行力的管理(目标管理，OKR，推演)',
                        '分解到任务管理，方便随手执行的，并是有定数的',
                        '价值观，责任心，目标感，意义'
                      ]}
                    />
                  </td>
                  <td>
                    <Collapse
                      data={[
                        '用什么时间来做呢？还有什么书或内容可以阅读？',
                        '人为什么总是喜欢逃避思考'
                      ]}
                    />
                  </td>
                </tr>
                <tr>
                  <td>逻辑思考 解题能力</td>
                  <td></td>
                  <td></td>
                  <td>
                    <ul>
                      <li>
                        多看技术类架构，最后都可抽象为逻辑或算法，或抽象为。New
                        Relic
                      </li>
                      <li>多看逻辑题《迷人的逻辑题》《》</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>编程能力</td>
                  <td>10月</td>
                  <td>
                    <Collapse
                      data={[
                        '基础编程能力，Redux原理，前端Tree组件',
                        '程序架构能力 Faas，Vscode(程序，language)，Superset，',
                        '程序架构能力 可视化搭建，CMS，工程化，组件库管理',
                        '抽象设计能力 Hugiin，Vue的文档，New Relic，'
                      ]}
                    />
                  </td>
                  <td>只是阅读源码可行吗？</td>
                </tr>
                <tr>
                  <td>学习能力</td>
                  <td>
                    <Collapse
                      data={[
                        '最重要的学习能力，即从0到1快速学习并解决遇到的问题，如快速学习产品经理到高级产品经理'
                      ]}
                    />
                  </td>
                  <td>
                    <Collapse data={['']} />
                  </td>
                </tr>
                <tr>
                  <td>技术产品能力 B端产品</td>
                  <td>
                    <Collapse
                      data={[
                        'github gitlab(workflow，project，)',
                        'superset',
                        '数据监控 newrelic 听云 ',
                        '监控 前端监控 logrocket sentry'
                      ]}
                    />
                  </td>
                </tr>
                <tr>
                  <td>自己发展系统</td>
                  <td>
                    <Collapse data={['拓展 格局 认知 方法', '学习能力']} />
                  </td>
                </tr>
                {/* <tr>
                  <td className={styles.statusError}>组织和表达能力</td>
                  <td>
                    <Collapse
                      data={[
                        '如何把一个技术给陌生人讲清楚(如将React讲给陌生人听)'
                      ]}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={styles.statusError}>技术的广度</td>
                  <td>
                    <Collapse
                      data={[
                        '补充技术广度的方法，如何保证充足的和领先的',
                        '对想要阅读的，使用工具记录，有零碎时间可拿出来阅读',
                        '每天或每周阅读的习惯'
                      ]}
                    />
                  </td>
                </tr>
                <tr> */}
                {/* <td className={styles.statusError}>技术的日常</td>
                  <td>
                    <Collapse
                      data={[
                        '技术好奇心。思考判断，作为每天的日常',
                        '技术理解其思想，而非死记硬背，有体感',
                        '问题考虑的全面性。(一个Dialog设计和考虑什么)',
                        '系统化的思考。(由点及面，扩展和延伸)',
                        '工程化和高阶化。(当代前端的helloword)'
                      ]}
                    />
                  </td>
                </tr> */}
                {/* <tr>
                  <td className={styles.statusError}>思考力</td>
                  <td>
                    <Collapse
                      data={[
                        '商业的思考。商业发展的思考。',
                        '业务的思考。业务',
                        '思考太少，行业发展，前端发展，技术产品，前端工程化。'
                      ]}
                    />
                  </td>
                </tr> */}
                {/* <tr>
                  <td className={styles.statusError}>架构&编程能力</td>
                  <td>
                    <Collapse
                      data={[
                        '先探究架构和编程能力是什么，什么样的补充方法',
                        '暂时想到看那些架构方案，自己能否实现，写出思路即可，如果实现不了就学习'
                      ]}
                    />
                  </td>
                </tr> */}
                {/* <tr>
                  <td className={styles.statusError}>领导力</td>
                  <td>
                    <Collapse
                      data={[
                        '领导力即管理能力，把目标做成的能力。。。。。',
                        '先要领导自己，把自己的面试问题解决掉'
                      ]}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={styles.statusError}>解决问题能力</td>
                  <td>
                    <Collapse
                      data={[
                        '最重要能发现问题，分析问题和解决问题',
                        '从公司团队看有哪些问题，如何解决'
                      ]}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={styles.statusError}>技术规划能力</td>
                  <td>
                    <Collapse data={['先去增加自己的视野吧？']} />
                  </td>
                </tr> */}
              </tbody>
            </table>
          ) : null}
        </section>
        <section className={styles.daySection}>
          <p className={styles.sectionTitle} onClick={this.toggleHabit}>
            {' '}
            {openLearn ? (
              <GoChevronDown className={styles.toggleIcon} />
            ) : (
              <GoChevronRight className={styles.toggleIcon} />
            )}
            习惯
          </p>
          {openHabit ? (
            <table
              className={[styles.pureTable, styles.pureTableBordered].join(' ')}
            >
              <thead>
                <tr>
                  <td>习惯</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.statusError}>目标和意义</td>
                  <td>
                    <Collapse
                      data={[
                        '提供精神能量，提升执行力。',
                        '能清晰的说出我的目标，几个属性。(1 个人属性，前端工程化专家，前端架构师，为公司解决业务特点问题，价值。2 家庭属性，为家庭带来幸福快乐生活，不用担忧。3 交际属性。)',
                        '个人梦想，拳击和肌肉，心理学，',
                        '清晰说出自己的核心方案和计划是什么'
                      ]}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={styles.statusError}>
                    精力管理(运动&冥想&休息&当下)
                  </td>
                  <td>
                    <Collapse
                      data={[
                        '太重要了，保证自己所有的工作和思考的基础',
                        '睡眠最重要了',
                        '冥想。精神能量。每天早晚两次冥想，冥想的内容是什么？梦想抱负，人生意义？在前端行业留下有意义的产品。积极品质，我的责任和担当，工作的专家和可靠，支撑起一个家。',
                        '运动。大运动，一周三次运动，运动的内容是什么? 不是特别累时就坚持去做',
                        '休息。1 有时间则短休息，厕所等 2小时则长休息 2 周末大休息到大自然。',
                        '精力曲线。好时解决困难(早上)。不好时一般问题或休息。',
                        '情绪，精神活力，清除大脑垃圾。运动(每次打球时清晰)，睡眠。',
                        '时间管理。困难问题使用连续的时间',
                        '活在当下。'
                      ]}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={styles.statusError}>
                    暂停给自己思考时间(慢就是快)
                  </td>
                  <td>
                    <Collapse
                      data={[
                        '埋头工作时，总是无法发现自身的问题，需要停下梳理和思考',
                        '给自己独立思考时间，断网暂停，开车，或快步走。',
                        '思考目标和未来，如何才能成为自己想成为的【卓越架构师】',
                        '重点6步的第二步，正视现实-自我评估，发现存在的障碍'
                      ]}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={styles.statusError}>
                    复盘，每天的几个提问，发现问题
                  </td>
                  <td>
                    <Collapse
                      data={[
                        '今天为目标冲刺做了什么？今天那些挑战？进步比昨天?',
                        '预期达到了吗。为什么，有什么问题，如何解决这些问题？',
                        '当下有哪些难点，阻碍(发现问题)？如何解决这些难点(解决问题)',
                        '我自身还有哪些问题，期待机器人那样做到了吗?',
                        '我尽最大努力去追求快乐了吗？解决存在的问题，个人成长，工作的贡献，爱和人际关系',
                        '我是否伸展自己，尽力做自己想做的事情',
                        '我是否寻求反馈'
                      ]}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={styles.statusError}>高效能</td>
                  {/* <td>6年我沉淀下来了什么？就是想要的太多了。</td> */}
                  <td>
                    <Collapse
                      data={[
                        '少。才有时间去精进自己的原则，停下来审视。',
                        '6年我沉淀了什么东西？',
                        '重要。职业规划，解决当下难点最重要的事。',
                        '以终为始。对结果的价值',
                        '风险。总想做更多。Action。不做会怎样。'
                      ]}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={styles.statusError}>坚持常执行梦想6步</td>
                  <td>
                    <Collapse data={['常常去复盘和执行梦想6步']} />
                  </td>
                </tr>
                {/* <tr>
                  <td className={styles.statusError}>坚持做事前的做事步骤</td>
                  <td>
                    <Collapse data={[
                      '坚持做事前的做事步骤'
                    ]} />
                  </td>
                </tr> */}
              </tbody>
            </table>
          ) : null}
        </section>
      </div>
    )
  }
}
