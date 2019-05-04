import React from 'react';
import styles from './qa.scss';

export default class AppContainer extends React.Component {
  state = {
    expand: false
  }

  onClick = () => {
    this.props.onClick &&  this.props.onClick(this.props.qa);
  }
  render() {
    const {qa} = this.props;

    return (
      <div className={styles.item} onClick={this.onClick}>
        <span className={styles.title} onClick={this.toggle}>{qa.title}</span>
        {this.state.expand ?
          <div className="answer">
            <ul>
              {qa.answer.map((a)=>{
                  return <li>{a}</li>
              })}
            </ul>
          </div> : null}
      </div>
    );
  }
}
