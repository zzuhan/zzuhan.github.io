import React from 'react'
import styles from '@/controller/System.scss'
import Plan from '@/components/Plan'
import { Router } from 'react-router'
import Collapse from '@/components/Collapse'
import { GoChevronUp, GoChevronDown, GoChevronRight } from 'react-icons/go'
import { Tooltip, Popover } from 'antd'

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

    const wantable = (
      <ul>
        <li>动机是最重要的了，你想要什么？旅行？可持续的工作？</li>
        <li>
          跑步是为了健身，有好的身材，才会那么努力。有时看到特别漂亮心动的美女，
          也会特别有力量
        </li>
        <li>所以花时间寻找动机</li>
      </ul>
    )

    const happy = (
      <ul>
        <li>从解决一直未解的问题，思考解决问题，都能获得快乐</li>
        <li>飞轮效应，让你主动想做事，后面有细讲</li>
        <li>做自己感情趣的事情</li>
      </ul>
    )

    const inspire = (
      <ul>
        <li>
          总有办法，将大脑的注意力放在自己想要实现什么这样的思考。如当下差距这么大
          ，想要需要保证到S级，与同时还有较大差距
        </li>
        <li>
          Grow(当下和目标差距)，Woop(Outcome想要什么，Obstacle)，为什么等方法
        </li>
        <li>自我激励，触发点，榜样的力量，对比，重塑大脑信念</li>
        <li>想要什么，S级表现，客户能买单付费</li>
        <li>如跑步变瘦一样，想要结果，就要付出几倍努力</li>
        <li>反问自己想要什么，当前做这个(看视频，)有什么意义</li>
      </ul>
    )

    const goal = (
      <ul>
        <li>目标管理，靠着明确的内容持续</li>
        <li>计划和任务，每月，每周每天靠着任务来保持高效</li>
      </ul>
    )

    const fearDiffcult = (
      <ul>
        <li>逃避困难问题，做看起来重要的事情</li>
      </ul>
    )

    const diffcultGoal = (
      <ul>
        <li>成为P7级工程师</li>
        <li>当下是C级表现，如何成为S级表现</li>
      </ul>
    )

    const learnSpace = (
      <uL>
        <li>做那些觉得自己做不到的事，而不是整天重复舒适区</li>
      </uL>
    )

    const flyWheel = (
      <ul>
        <li>刻意练习，对缺失技能的补充</li>
        <li>充足的准备，事前验尸(可能的困难)，化解困难</li>
        <li>事前计划</li>
        <li>优秀的习惯，保持自己的成长，获得成就快乐</li>
        <li>重点是解决当下的难点，把卡点解决掉</li>
      </ul>
    )

    return (
      <div>
        <h2>最佳动力系统</h2>
        <p>特别想去做相应的事情，依靠信念，目标，梦想，而不是依赖习惯在做事</p>
        <div className={styles.wrapper}>
          <ul className={styles.container}>
            <li>
              精力
              <ul className={styles.container}>
                <li className={styles.error}>睡眠</li>
                <li>运动</li>
                <li>冥想</li>
                <li className={styles.error}>全情训练</li>
              </ul>
            </li>
            <li>
              <Tooltip
                placement="bottom"
                title="只有在正向积极思考时，才能有积极的行为"
              >
                自律性
                <ul className={styles.container}>
                  <Popover content="可以运动，断网，去厕所，洗完等放开专注模式的行为">
                    <li>发散思维</li>
                  </Popover>
                  <li>freedom</li>
                  <li>用进废退</li>
                </ul>
              </Tooltip>
            </li>
            <li>
              燃料
              <ul className={styles.container}>
                <Popover content={wantable}>
                  <li className={styles.error}>梦想，信念(动机)</li>
                </Popover>
                <Popover content={happy}>
                  <li>飞轮，快乐</li>
                </Popover>
                <li>超积极</li>
                <Popover content={inspire}>
                  <li>自我激励方法</li>
                </Popover>
                <Popover content={goal}>
                  <li className={styles.error}>目标管理 计划</li>
                </Popover>
              </ul>
            </li>
            <li>
              润滑
              <ul className={styles.container}>
                <li>形成习惯</li>
              </ul>
            </li>
            <li>
              克服人性弱点
              <ul className={styles.container}>
                <li>恐惧</li>
                <li>害怕沟通</li>
                <Popover content={fearDiffcult}>
                  <li className={styles.error}>困难拖延 不直面</li>
                </Popover>
              </ul>
            </li>
          </ul>
        </div>

        <h2>最佳成长系统</h2>
        <p>保证最快速的成长，时刻能来此处找到最该做的事(对成长最快的事)</p>
        <div className={styles.wrapper}>
          <ul className={styles.container}>
            <li>
              快速成长
              <ul className={styles.container}>
                <Popover content={diffcultGoal}>
                  <li className={styles.error}>设定难以实现目标</li>
                </Popover>
                <Popover content={learnSpace}>
                  <li className={styles.error}>学习区</li>
                </Popover>
                <li>几个升级</li>
                <li>战略计划</li>
                <li>当下最大的阻碍</li>
                <li>高效能</li>
                <Popover content={flyWheel}>
                  <li>飞轮效应</li>
                </Popover>
              </ul>
            </li>
            <li>
              成长方法
              <ul className={styles.container}>
                <li>输入</li>
                <li>刻意练习</li>
                <li>复盘，总结</li>
                <li>认知升级</li>
                <li>方法升级</li>
              </ul>
            </li>
            <li>
              发现问题
              <ul className={styles.container}>
                <li>监控系统</li>
                <li>复盘</li>
              </ul>
            </li>
            <li>
              管理
              <ul className={styles.container}>
                <li className={styles.error}>目标管理(OKR)</li>
                <li className={styles.error}>计划管理</li>
                <li className={styles.error}>时间(任务)管理</li>
                <li>状态管理</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
