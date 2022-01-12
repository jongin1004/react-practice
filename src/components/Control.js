import React from 'react';

class Control extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeMode = this.onChangeMode.bind(this);
  }
  onChangeMode(e) {
    e.preventDefault();
    this.props.onChangeMode(e.target.outerText);
  }

  render() {
    return (
      <ul>
        <li><a href="!#" onClick={this.onChangeMode}>create</a></li>
        <li><a href="!#" onClick={this.onChangeMode}>update</a></li>
        <li><button onClick={this.onChangeMode} type="submit">delete</button></li>
      </ul>
    );
  }
}

export default Control;