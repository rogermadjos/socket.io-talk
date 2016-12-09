import React from 'react';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channel: ''
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeChannel = this.handleChangeChannel.bind(this);
    this.login = this.login.bind(this);
  }

  login() {
    if (this.state.username) {
    }
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.login();
    }
  }

  handleChange(event) {
    this.setState({username: event.target.value});
  }

  handleChangeChannel(event) {
    this.setState({channel: event.target.value});
  }

  render() {
    return (
      <div className="row" style={ {'margin-top': '50px'} }>
        <div className="col-md-4 col-md-offset-4">
          <div className="input-group">
            <input type="text" className="form-control" id="username" placeholder="Username" onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
            <span className="input-group-btn">
              <button className="btn btn-default" type="button" onClick={this.login}>Login</button>
            </span>
          </div><br/>
        </div>
      </div>
    )
  }
}

export default LoginPage;
