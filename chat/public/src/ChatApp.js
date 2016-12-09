import React from 'react';
import LoginPage from './LoginPage.js';
import MessageBox from './MessageBox.js';

class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }

  setLoggedIn( username ) {
    this.setState({
      loggedIn: true,
      username
    })
  }

  render() {
    if ( this.state.loggedIn ) {
      return (
        <div className="panel panel-default">
          <div className="panel-heading">Welcome <strong>{this.state.username}</strong></div>
          <div className="panel-body">
            <MessageBox />
          </div>
        </div>
      );
    } else {
      return <LoginPage />
    }
  }
}

export default ChatApp;
