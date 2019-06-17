
import React from 'react';

import styles from './item.css';

import { connect } from 'dva';

function Item(props) {
  console.log(props.item);
  return (
    <div className={styles.normal}>
      <h1>Page item</h1>
      <h2>This is {props.item}</h2>
    </div>
  );
}

export default connect(({ item }) => ({ item }))(Item);
