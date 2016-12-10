import React from 'react';

class MessageBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.send = this.send.bind(this);

    socket.on('message', data => {
      let messages = this.state.messages.slice(0);
      messages.push(data);
      this.setState({
        current: '',
        messages
      });
    });
  }

  send() {
    if (this.state.current) {
      this.setState({current: ''});
      socket.emit('message', {message: this.state.current});
    }
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.send();
    }
  }

  handleChange(event) {
    this.setState({current: event.target.value});
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-10 col-md-offset-1" style={ {'margin-top': '50px'} }>
          <div className="input-group" >
            <input type="text" className="form-control" placeholder="Message" value={this.state.current} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
            <span className="input-group-btn">
              <button className="btn btn-default" type="button" onClick={this.send}>Send</button>
            </span>
          </div>
          <ul className="list-group">
            {this.state.messages.map(message =>
              <li className="list-group-item"><span className="label label-default">{message.username}</span> {message.message}</li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default MessageBox;
