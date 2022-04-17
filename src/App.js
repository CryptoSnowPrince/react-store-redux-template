import React from 'react';
import { connect } from 'react-redux';
function App ( props ) {
  console.log( "props = ", props );
  return (
    <div>
      <h1>Redux Hello World</h1>
      <h3>State Value from Props = { props.stateValue }</h3>
    </div>
  );
}

const mapStateToProps = state => {
  console.log( "mapStateToProps - State = ", state );
  return {
    stateValue : state
  }
}

export default connect(mapStateToProps)(App);

