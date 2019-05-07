import React from 'react';
import styles from '@/controller/Plan.scss';
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
        <section className={styles.daySection}>
          <span className={styles.sectionTitle}>星期五</span>
          <section className={styles.sectionList}>
            <Plan qa={{ title: '坏习惯' }} />
            <Plan qa={{ title: '工程' }} status='error' />
            <Plan qa={{ title: 'Flutter' }} status='success' />
          </section>
          <section className="error">
            这一天进度有点少，恐怕明天也不太乐观，要做好预估，要想出策略
          </section>
        </section>
        <section className={styles.daySection}>
          <span className={styles.sectionTitle}>星期六</span>
          <section className={styles.sectionList}>
            <Plan qa={{ title: '工程&性能' }} status='error'/>
            <Plan qa={{ title: '目标问题' }} status='success' />
            <Plan qa={{ title: 'React & Vue' }} status='success' />
            <Plan qa={{ title: '开放问题' }} status='error'/>
            <Plan qa={{ title: '梦想几步' }} status='error'/>
            <Plan qa={{ title: 'leetcode如何准备' }} status='error' />
          </section>    
        </section>
        <section className={styles.daySection}>
          <span className={styles.sectionTitle}>星期日</span>
          <section className={styles.sectionList}>
            <Plan qa={{ title: '深度js' }} status='error' />
            <Plan qa={{ title: '性能优化' }} status='error' />
            <Plan qa={{ title: '项目管理' }} status='error' />
            <Plan qa={{ title: 'Koa & Express原理' }} status='success' />
            <Plan qa={{ title: '职业规划' }} status='warning' />
            <Plan qa={{ title: '个人助手' }} status='success' />
          </section>   
        </section>
        <section className={styles.daySection}>
          <span className={styles.sectionTitle}>星期一</span>
          <section className={styles.sectionList}>
            <Plan qa={{ title: '性能优化' }} />
            <Plan qa={{ title: 'Webpack' }} />
            <Plan qa={{ title: 'React & Vue' }}  />
            <Plan qa={{ title: '算法 & 智力题' }}  />
            <Plan qa={{ title: '面试' }} />
          </section>   
        </section>
        <section className={styles.daySection}>
          <span className={styles.sectionTitle}>星期二</span>
          <section className={styles.sectionList}>
            <Plan qa={{ title: '面试' }} />
          </section>   
        </section>
      </div>
    );
  }
}
