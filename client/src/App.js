import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Portal from './pages/portal';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/" component={Portal}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
