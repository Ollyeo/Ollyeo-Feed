import React, { Component } from 'react';
import { Post } from 'components'
import { FeedContainer } from 'containers'

class App extends Component {

  render() {
    return (
      <div className="App">
        <FeedContainer />
        <Post/>
      </div>
    );
  }
}

export default App;
