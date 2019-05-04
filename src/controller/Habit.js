import React from 'react';
import styles from './Habit.scss';
import QA from '@/components/QA';
import { Router } from 'react-router';

const questions = [
  {
    title: '晨起冥想',
    answer: [
      '想象未来的自己，伟大的目标，成为原则等作者大牛，技术上P7，P8',
      '痛苦的意义，人生苦难重重，苦难让你成本，勇敢直面痛苦',
      '自身积极的品质，专业，可靠'
    ]
  },
  {
    title: '痛苦&直面&解决问题',
    answer: [
      '太过轻松就是逃避问题了',
      '@对自己苛刻的要求'
    ]
  },
  {
    title: '目标清晰挑战',
    answer: [
      '清晰说出自己的目标',
      '目标能够触动人心的',
      '有10倍挑战的目标'
    ]
  }, {
    title: '聪明&多思考&战略勤奋',
    answer: [
      '不要埋头做事，多思考',
      '做个聪明的人'
    ]
  },
  {
    title: '严苛要求 计划&做事',
    answer: [
      ''
    ]
  },
  {
    title: '跑步',
    answer: [
      '一周跑10次能坚持下来吗'
    ]
  }
];

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
