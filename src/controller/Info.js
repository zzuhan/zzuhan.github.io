import React from 'react'
import styles from '@/controller/Info.scss'
import Plan from '@/components/Plan'
import { Router } from 'react-router'
import Collapse from '@/components/Collapse'
import { GoChevronUp, GoChevronDown, GoChevronRight } from 'react-icons/go'
import { Tooltip, Popover, Row, Col } from 'antd'

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

    const navs = [
      {
        title: '基本原则',
        content: ['机会成本', '挑剔，只读经典', '追随大师', '大量的筛选']
      },
      {
        title: '行为',
        content: [
          '主动问题探索',
          '公司内学习',
          '沟通求助(同事老板)',
          'later内容',
          '订阅内容'
        ]
      },
      {
        title: '重要性',
        content: ['格局升级', '战略升级', '认知升级', '方法升级']
      },
      {
        title: '认知升级',
        content: ['对比下级别', '沟通求助', '好团队', '行业问题', '面试']
      },
      {
        title: '方法升级',
        content: ['专业图书']
      },
      {
        title: '自我成长',
        content: ['']
      },
      {
        title: '思维思考',
        content: []
      },
      {
        title: '心理学',
        content: []
      },
      {
        title: '系统的',
        content: ['知乎推荐', '语雀精选', '']
      },
      {
        title: '编程',
        content: ['freecodecamp', '']
      },
      {
        title: '提升',
        content: ['TED', '', '']
      }
    ]

    return (
      <div>
        {/* <h2>最佳动力系统</h2> */}
        {/* <p>特别想去做相应的事情，依靠信念，目标，梦想，而不是依赖习惯在做事</p> */}

        {navs.map(nav => {
          return (
            <Row type="flex" align="middle">
              <Col span="2">
                <span>{nav.title}</span>
              </Col>
              <Col>
                <ul className={styles.container}>
                  {nav.content.map(content => {
                    return <li>{content}</li>
                  })}
                </ul>
              </Col>
            </Row>
          )
        })}
      </div>
    )
  }
}
