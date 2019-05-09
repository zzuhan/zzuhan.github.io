import React from 'react';
import styles from './default.scss';
import QAController from '@/controller/QA';
import PlanController from '@/controller/Plan';
import PlaningController from '@/controller/Planing';
import HabitController from '@/controller/Habit';
import DreamController from '@/controller/Dream';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class DefaultContainer extends React.Component {
  render() {
    return (
    <Router>
      <div className={styles.container}>
        <div className={styles.inner}>
          <section className={styles.header}>
            <div className={styles.logo}>logo</div>
            <div className={styles.rightBar}>头像</div>
          </section>
          <section className={styles.body}>
            <Route path="/" exact component={QAController}></Route>
            {/* <Route path="/plan" component={PlanController}></Route> */}
            <Route path="/planing" component={PlaningController}></Route>
            <Route path="/dream" component={DreamController}></Route>
            <Route path="/habit" component={HabitController}></Route>
            <div className={styles.bottomReplace}></div>
          </section>
          <section className={styles.bottom}>
            <div className={styles.bottomItem}><Link to="/">问答</Link></div>
            <div className={styles.bottomItem}><Link to="/planing">计划</Link></div>
            {/* <div className={styles.bottomItem}><Link to="/plan">周计划</Link></div> */}
            <div className={styles.bottomItem}><Link to="/dream">实现梦想</Link></div>
            <div className={styles.bottomItem}><Link to="/habit">习惯</Link></div>
          </section>
        </div>
      </div>
       
    </Router>
    );
  }
}
