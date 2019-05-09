import React from 'react';
import styles from './Collapse.scss';
import Plan from '@/components/Plan';
import { Router } from 'react-router';
import { GoChevronUp, GoChevronDown } from "react-icons/go";

export default class Collapse extends React.Component {
  state = {
    open: false
  }

  toggle = ()=>{
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
        <div className={styles.container}>
          <ul className={[styles.list, this.state.open? styles.open : ''].join(" ")}>
              {
                  this.props.data.map((item)=>{
                      return <li>{item}</li>
                  })
              }
          </ul>
          <div className={styles.triggerContainer} onClick={this.toggle}>{this.state.open ? <GoChevronUp/> : <GoChevronDown/>}</div>
        </div>
    );
  }
}
