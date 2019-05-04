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
                <td>现在的我</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>聪明度</td>
                <td></td>
                <td>低</td>
              </tr>
              <tr>
                <td>领导力</td>
                <td></td>
                <td>低</td>
              </tr>
              <tr>
                <td>业务思考</td>
                <td></td>
                <td>无</td>
              </tr>
              <tr>
                <td>发现&分析&解决问题</td>
                <td></td>
                <td>中等</td>
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
      </div>
    );
  }
}
