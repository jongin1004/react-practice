import React from 'react';

class UpdateContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      des: this.props.data.desc
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
            this.props.onSubmit(
                this.state.id,
                this.state.title,
                this.state.des
            );
        }.bind(this)}>
            <input type="hidden" name="id" value={this.state.id} />
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
                name="des" 
                placeholder="description"                 
                value={this.state.des}
              ></textarea>
            </p>
            <input type="submit" value="제출" />
        </form>
      </article>
    );
  }
}


// function UpdateContent(props) {  
//   return (
//     <article>
//       <h1>Update</h1>
//       <form onSubmit={function(e) {        
//           e.preventDefault();
//           props.onSubmit(
//               e.target.title.value,
//               e.target.desc.value
//           );
//       }}>
//           <p><input type="text" name="title" placeholder="title" value={props.title} /></p>
//           <p><textarea name="desc" placeholder="description">{props.des}</textarea></p>
//           <input type="submit" value="제출" />
//       </form>
//     </article>
//   );
// }

export default UpdateContent;