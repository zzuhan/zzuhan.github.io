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
          <span className={styles.sectionTitle}>阶段目标</span>
            <ul>
              <li>前端工程化专家，要搭建复杂场景的前端工程化</li>
              <li>程序架构和设计能力</li>
              <li>考虑问题的深度</li>
              <li>解决问题能力</li>
              <li>超强的独挡一面，前端专家是如何的？需要探索的</li>
            </ul>
        </section>
        <section className={[styles.dreamSection, styles.statusError].join(" ")}>
          <span className={styles.sectionTitle}>挑战是什么</span>
          <ul>
              <li>看不清楚，如何到专家，达到P7，P8路径是什么，职业规划</li>
              <li>超强的独挡一面是如何的？需要去探索</li>
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
              <li>前端工程化，当下的个人助手产品</li>
              <li>阅读更多的问题域，学习</li>
              <li>问题深度，淘首页改版等</li>
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
