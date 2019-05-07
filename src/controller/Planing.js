import React from 'react';
import styles from '@/controller/Planing.scss';
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
        <div className={styles.dayListx}></div>
        <section className={styles.daySection}>
          <span className={styles.sectionTitle}>对标内容</span>
          <table className={[styles.pureTable, styles.pureTableBordered].join(" ")}>
            <thead>
              <tr>
                <td>对标内容</td>
                <td>理想的我</td>
                {/* <td>现在的我</td> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>聪明度</td>
                {/* <td></td> */}
                <td>低</td>
              </tr>
              <tr>
                <td>领导力</td>
                {/* <td></td> */}
                <td>低</td>
              </tr>
              <tr>
                <td>业务思考</td>
                {/* <td></td> */}
                <td>无</td>
              </tr>
              <tr>
                <td>发现&分析&解决问题</td>
                <td>阎王能针对当下的招聘问题，想出各种解法</td>
                {/* <td>中等</td> */}
              </tr>
              <tr>
                <td>规划能力</td>
                <td></td>
                <td>无</td>
              </tr>
              <tr>
                <td>视野&判断</td>
                <td>视野广阔</td>
                <td>低</td>
              </tr>
              <tr>
                <td>架构能力</td>
                <td></td>
                <td>低</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className={styles.daySection}>
          <span className={styles.sectionTitle}>Action</span>
          <table className={[styles.pureTable, styles.pureTableBordered].join(" ")}>
            <thead>
              <tr>
                <td>对标内容</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>技术视野</td>
                <td>
                  <ul>
                    <li>足够广，计划内容列表，每天有计划的学习那些关键内容，RXJS，React等</li>
                    <li>足够高，一个组件该如何进行设计？</li>
                    <li>关键词扩展，</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>聪明(多输入，多提问，多思考，多钻研)</td>
                <td>
                  <ul>
                    <li></li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>解决问题</td>
                <td>可以把每件事都看成解决问题，如职业规划，如何选择公司，如何赢得面试，锻炼自己</td>
              </tr>
              <tr>
                <td>思考力</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}
