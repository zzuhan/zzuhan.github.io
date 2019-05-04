import React from 'react';
import styles from './QA.scss';
import QA from '@/components/QA';
import { Router } from 'react-router';

const questions = [{
  title: '自制力问题，想要正确做事时。',
  answer: [
    '早上不要粘在床上，起来洗脸穿好衣服',
    '断开网络，暂停下来。切断网络，离开手机，离开电脑',
    '发散的环境，下去走走',
    '做下运动',
    '@自我苛责'
  ]
}, {
  title: '习惯养成问题',
  answer: [
    '就像工作中的按时上班，是成为专家必须执行的，勇敢直面痛苦，演员的自律',
    '@直面痛苦的勇气'
  ]
}, {
  title: '直面痛苦的勇气',
  answer: [
    '人生苦难重重，每天从解决问题获得快乐'
  ]
}, {
  title: '学习原则和要求',
  answer: [
    '明确的目标结果，要解决什么问题，投入产出比',
    '严苛的要求，讲给老板同事听',
    '先制定思路，大纲',
    '有限的时间，无限时间会陷入低效',
    '状态重要，对自己有信心'
  ]
}, {
  title: '思维',
  answer: [
    '精要思维，只读精品文章，只做事一件轰动的事。如魔影',
    '极致思维，事情做到极致，而非就这样吧。',
    '导师专家求助，质疑自己，像专家请教，跨平台理解RN等',
    '专家思维，深度优先，在工程化，React上与专家区别',
    'hack思维，突破自我，克服困难，接触新事物',
    '竞争思维，如何超越周围的人'
  ]
}, {
  title: '自我苛责',
  answer: [
    '突破自己，新的高要求，按新的原则，新的习惯和要求行动了么',
    '给别人专家的感觉了吗',
    '工作担当，可靠了吗',
    '说出去是阿里，手淘工程师，对比别人',
    '家庭担当了吗',
    '6年了还是P6，这么低的薪资，对比阎王等P7'
  ]
}, {
  title: '做事前',
  answer: [
    '是解决问题，战略勤奋。反面用学习等来逃避问题，面试',
    '结构化问题'
  ]
}, {
  title: '最重要的事',
  answer: [
    '当下的难点和挑战',
    '如何在1年后P7',
    '梦想的六步'
  ]
}];

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
            <div className={styles.qaList}>
              {questions.map(qa => {
                return <QA onClick={this.showAnswer} qa={qa} />;
              })}
            </div>
            {answers.map(answer => {
              return <ul className={styles.answerList}>
                { answer.map(a => <li onClick={()=>{this.onAnwserClick(a)} }>{a}</li>)}
              </ul>;
            })}
        </div>
    );
  }
}
