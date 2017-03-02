import React from 'react';
import Results from './results.js';

class Main extends React.Component {
  render() {
    return (
      <ul>
        <Results message="what" />
        <Results message="hey" />
      </ul>
    );
  }
}

export default Main;
