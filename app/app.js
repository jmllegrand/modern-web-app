/**
 * Created by jmlegrand on 13/02/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import styles from './../styles/main.css';

const Hello = React.createClass({
  render () {
   return (
     <div>
       <p>Hello {this.props.name} !!! </p>
     </div>
   )
  }
});

ReactDOM.render(<Hello name="Pitchou"/>, document.body);