import React from 'react';

class UpdateContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      title: this.props.title,
      desc: this.props.desc
    }

    this.inputFormHandler = this.inputFormHandler.bind(this);
  }

  inputFormHandler(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <article>
        <h1>Update</h1>
        <form onSubmit={function(e) {        
            e.preventDefault();
            this.props.updateContent(
                this.state.id,
                this.state.title,
                this.state.desc
            );
        }.bind(this)}>
            {/* <input type="hidden" name="id" value={this.state.id} /> */}
            <p>
              <input 
                type="text"
                name="title" 
                placeholder="title" 
                value={this.state.title}
                onChange={this.inputFormHandler}
              />
            </p>
            <p>
              <textarea 
                onChange={this.inputFormHandler}
                name="desc" 
                placeholder="description"                 
                value={this.state.desc}
              ></textarea>
            </p>
            <input type="submit" value="제출" />
        </form>
      </article>
    );
  }
}


export default UpdateContent;