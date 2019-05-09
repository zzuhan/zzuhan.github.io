import React from 'react';
import styles from '@/controller/Planing.scss';
import Plan from '@/components/Plan';
import { Router } from 'react-router';
import Collapse from '@/components/Collapse';
import { GoChevronUp, GoChevronDown, GoChevronRight } from "react-icons/go";

export default class AppContainer extends React.Component {
  state = {
    openRequirment: false,
    openLearn: true
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

  toggleRequirement = () => {
    this.setState({
      openRequirment: !this.state.openRequirment 
    });
  }

  toggleLearn = () => {
    this.setState({
      openLearn: !this.state.openLearn 
    });
  }

  render() {
    const {openRequirment, openLearn} = this.state;

    return (
      <div className={styles.dayList}>
        <div className={styles.dayListx}></div>
        <section className={styles.daySection}>
          <p className={styles.sectionTitle} onClick={this.toggleRequirement}> {openRequirment ? <GoChevronDown className={styles.toggleIcon} /> : <GoChevronRight className={styles.toggleIcon}/> } 对自己的9条基本原则</p>
          {
            openRequirment ? 
            <table className={[styles.requiredTable, styles.pureTable, styles.pureTableBordered].join(" ")}>
              <thead>
                <tr>
                  <td>要求</td>
                  <td>why</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1 运动，冥想，休息</td>
                  <td>运动好处太多，自律的根源</td>
                  <td>
                    <Collapse data={[
                      '运动，让自己大脑清醒，自制力增强，才能严格自律执行。',
                      '运动。一周三次运动，跑步，HIIT，骑行？',
                      '冥想。早晚进行冥想。我的梦想，道路上的困难，失败困难与成长。',
                      '休息。学会休息，小休息和大休息'
                    ]} />
                  </td>
                </tr>
                <tr>
                  <td>2 让自己痛苦</td>
                  <td>舒服成长太少，人总是选择轻松，让自己熟悉痛苦</td>
                  <td>
                    <Collapse data={[
                        '痛苦的绞尽脑汁去想如何做到，而非随便想想为止。',
                        '必须思维。复盘，梦想6步，职业规划都是必须做的。',
                        '难题思维。明天Leader，面leetcode，375成绩。',
                        '专家，自我归责。专家不该出问题，做到专家标准',
                        '担当。工作的担当，家庭的担当。个人成长担当。',
                        '苛责。和别人的对比，6年了P6。'
                      ]} />
                  </td>
                </tr>
                <tr>
                  <td>3 价值就是解决问题</td>
                  <td>最重要是解决问题</td>
                  <td>
                    <Collapse data={[
                        '工作。最后沉淀的就是分析解决问题能力。',
                        '直面问题。(不直面面试问题，用学习React等来逃避)',
                        '解决分析问题。(如何赢得面试。掌握技术不唯一，还有广度，程序设计能力。)',
                        '价值就是解决问题。(玉伯，最后在不断解决问题，完成自己的几个梦)'
                    ]} />
                  </td>
                </tr>
                <tr>
                  <td>4 战略勤奋</td>
                  <td></td>
                  <td>
                    <Collapse data={[
                      '即聪明，公司需要的是聪明的人。。。。。',
                      '多停下来思考。也即勤思考，聪明，最重要了',
                      '勤思考，聪明的人。(如何超越面试，如何成为前端工程化专）',
                      ]} />
                  </td>
                </tr>
                <tr>
                  <td>5 质疑，否定，风险</td>
                  <td>一定存在诸多的问题的</td>
                  <td>
                    <Collapse data={[
                      '总是会犯很多错误，如何少犯错误。。。',
                      '质疑。质疑个人助手的价值，用xmind是否也可以替代？',
                      '否定。推翻自己当下的行为',
                      '风险。可能有什么风险',
                    ]} />
                  </td>
                </tr>
                <tr>
                  <td>6 心理上的塑造和要求</td>
                  <td></td>
                  <td>
                    <Collapse data={[
                      '心理上决定能否大的成就，并保证自己的快乐',
                      '1 目标感。伟大的梦想，清晰的目标感，并充满信心信念(相信自己)。有伟大成就的都是有长期且坚定的梦想。(两年成为前端架构师)',
                      '2 积极乐观思考的习惯。信心和信念。到35岁还有非常多可能，不用惧怕未来。做10个人中top，375。如何才能做好Leader，带团队成功。如何拿下面试好offer，争抢的。@自我激励的方法',
                      '3 勇气。被讨厌的勇气，直面困难勇气。自我接纳。强大的内心？',
                      '4 逆商。对失败的思考。@失败的思考',
                      '5 压力和焦虑。',
                      '5 快乐幸福心理学。追求认真的生活，工作的快乐和意义。',
                      '6 不服输。任性。自尊。面试被直接赶出的自尊心。',
                    ]} />
                  </td>
                </tr>
                <tr>
                  <td>6 同理心</td>
                  <td>也即能换角度思考，很多都能豁然开朗</td>
                  <td>
                    <Collapse data={[
                      '多站在华茵角度为她思考，站在老板的角度思考',
                    ]} />
                  </td>
                </tr>
                <tr>
                  <td>7 高效能</td>
                  <td>6年我沉淀下来了什么？就是想要的太多了。</td>
                  <td>
                    <Collapse data={[
                        '少。才有时间去精进自己的原则，停下来审视。',
                        '重要。职业规划，解决当下难点最重要的事。',
                        '以终为始。对结果的价值',
                        '风险。总想做更多。Action。不做会怎样。'
                      ]} />
                  </td>
                </tr>
                <tr>
                  <td>8 学习和提升的习惯</td>
                  <td></td>
                  <td>
                    <ul>
                      <li>有正确的方法，不断的提升自己</li>
                      <li>Foolish，推翻和否定自己。(面试发现过去的自以为是，5.8搜面经发现与别人的差距)</li>
                      <li>Hungry，学习新方法。()</li>
                      <li>寻找导师，求助。(寻找导师，或者有问题多向别人求助)</li>
                    </ul>
                  </td>
                </tr>  
                <tr>
                  <td>9 寻找和做你想做</td>
                  <td>找到你最大的兴趣才会充满激情，可能成功</td>
                  <td>
                    <ul>
                      <li>把玩手机，看电影等事件替换为你想做的事情</li>
                      <li>对代码背后原理的好奇心</li>
                    </ul>
                  </td>
                </tr>              
              </tbody>
            </table> : null
          }
        </section>
        <section className={styles.daySection}>
          <p className={styles.sectionTitle}  onClick={this.toggleLearn}>  {openLearn ? <GoChevronDown className={styles.toggleIcon}/> : <GoChevronRight className={styles.toggleIcon} /> }学习的几项内容</p>
          { openLearn ? 
            <table className={[styles.pureTable, styles.pureTableBordered].join(" ")}>
              <thead>
                <tr>
                  <td>项目</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
              <tr>
                  <td className={styles.statusError}>组织和表达能力</td>
                  <td>
                    <Collapse data={[
                        '如何把一个技术给陌生人讲清楚(如将React讲给陌生人听)',
                      ]} />
                  </td>
                </tr>
                <tr>
                  <td className={styles.statusError}>技术的广度</td>
                  <td>
                    <Collapse data={[
                        '补充技术广度的方法，如何保证充足的和领先的',
                        '对想要阅读的，使用工具记录，有零碎时间可拿出来阅读',
                        '每天或每周阅读的习惯'
                      ]} />
                  </td>
                </tr>
                <tr>
                  <td className={styles.statusError}>技术的日常</td>
                  <td>
                    <Collapse data={[
                        '技术好奇心。思考判断，作为每天的日常',
                        '技术理解其思想，而非死记硬背，有体感',
                        '问题考虑的全面性。(一个Dialog设计和考虑什么)',
                        '系统化的思考。(由点及面，扩展和延伸)',
                        '工程化和高阶化。(当代前端的helloword)'
                      ]} />
                  </td>
                </tr>
                <tr>
                  <td className={styles.statusError}>思考力</td>
                  <td>
                    <Collapse data={[
                      '商业的思考。商业发展的思考。',
                      '业务的思考。业务',
                      '思考太少，行业发展，前端发展，技术产品，前端工程化。',
                    ]} />
                  </td>
                </tr>
                <tr>
                  <td className={styles.statusError}>架构&编程能力</td>
                  <td>
                    <Collapse  data={[
                        '先探究架构和编程能力是什么，什么样的补充方法',
                        '暂时想到看那些架构方案，自己能否实现，写出思路即可，如果实现不了就学习'
                      ]} />
                  </td>
                </tr>
                <tr>
                  <td className={styles.statusError}>领导力</td>
                  <td>
                    <Collapse data={[
                      '领导力即管理能力，把目标做成的能力。。。。。',
                      '先要领导自己，把自己的面试问题解决掉'
                    ]} />
                  </td>
                </tr>
                <tr>
                  <td className={styles.statusError}>解决问题能力</td>
                  <td>
                    <Collapse data={[
                      '最重要能发现问题，分析问题和解决问题',
                      '从公司团队看有哪些问题，如何解决'
                    ]} />
                  </td>
                </tr>
                <tr>
                  <td className={styles.statusError}>技术规划能力</td>
                  <td>
                    <Collapse data={[
                      '先去增加自己的视野吧？',
                    ]} />
                  </td>
                </tr>
                
              </tbody>
            </table> : null }
        </section>
      </div>
    );
  }
}
