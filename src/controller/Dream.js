import React from 'react';
import styles from '@/controller/Dream.scss';
import Plan from '@/components/Plan';
import { Router } from 'react-router';

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
    return (
      <div className={styles.dayList}>
        <section className={[styles.dreamSection, styles.statusError].join(" ")}>
          <span className={styles.sectionTitle}>目标是什么</span>
          {/* <ul>
            <li>需要有10倍挑战和明确的目标</li>
          </ul> */}
          <div>
            需要有10倍挑战和明确的目标，尽最大努力去寻找目标
          </div>
        </section>
        <section className={[styles.dreamSection, styles.statusError].join(" ")}>
          <span className={styles.sectionTitle}>挑战是什么</span>
          <ul>
              <li>看不清楚，如何到专家，达到P7，P8路径是什么，职业规划</li>
          </ul>
        </section>
        <section className={[styles.dreamSection, styles.statusError].join(" ")}>
            <span className={styles.sectionTitle}>阻碍和短板</span>
            <ul>
                <li>不能像设定机器人那样，坚持原则</li>
                <li>战略懒惰，战术勤奋(埋头干活)</li>
                <li>不聪明，思考和输入太少了</li>
                <li>不敢直面困难，承担责任改变自己</li>
                <li>目标和核心方案不明确</li>
                <li>不按新习惯苛刻要求自己</li>
                <li>选择盲目乐观，计划不切实际</li>
            </ul> 
        </section>
        <section className={[styles.dreamSection, styles.statusError].join(" ")}>
            <span className={styles.sectionTitle}>核心方案</span>
            <ul>
            </ul> 
        </section>
        <section className={[styles.dreamSection, styles.statusError].join(" ")}>
            <span className={styles.sectionTitle}>计划</span>
            <ul>
            </ul>
        </section>
        <section className={[styles.dreamSection, styles.statusError].join(" ")}>
            <span className={styles.sectionTitle}>复盘和调整</span>
            <div>
              做了这么久还没做过什么复盘和调整
            </div>
        </section>
      </div>
    );
  }
}
