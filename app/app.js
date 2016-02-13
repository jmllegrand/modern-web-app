/**
 * Created by jmlegrand on 13/02/16.
 */

var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
  render: function(){
   return (
     <div>
       <p>Hello {this.props.name} !!! </p>
     </div>
   )
  }
});

ReactDOM.render(<Hello name="Pitchou"/>, document.body);