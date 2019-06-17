
import React from 'react';

import styles from './skill.css';

import { connect } from 'dva';

function Skill(props) {
  console.log(props.skill);
  return (
    <div className={styles.normal}>
      <h1>Page skill</h1>
      <h2>This is {props.skill}</h2>
    </div>
  );
}

export default connect(({ skill }) => ({ skill }))(Skill);
