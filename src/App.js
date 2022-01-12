import React from 'react';
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import Header from "./components/Header";
import Control from "./components/Control";
// import './main.css';

class App extends React.Component {
  constructor(props) {    
    super(props);    
    this.state = { 
      mode: 'read',
      selected_content_id: 0,
      header: {title: 'WEB', subject: 'WORLD WIDE WEB'},
      contents: [
        {id: 1, title: "HTML", desc: "HTML IS ..."},
        {id: 2, title: "CSS", desc: "CSS IS ..."},
        {id: 3, title: "JAVASCRIPT", desc: "JAVASCRIPT IS ..."}
      ]
    };
    this.max_content_id = this.state.contents.length + 1;
    this.onChangePage = this.onChangePage.bind(this);    
    this.onChangeMode = this.onChangeMode.bind(this);
    this.saveContent = this.saveContent.bind(this);
    this.updateContent = this.updateContent.bind(this);
  }

  onChangePage(id) {
    this.setState({
        mode: 'read',
        selected_content_id: id
    });  
  }

  onChangeMode(_mode) {
    this.setState({
        mode: _mode
    });  
  }

  saveContent(_title, _desc) {
    let _contents = this.state.contents.concat(
      {id: this.max_content_id, title: _title, desc: _desc}
    )
    this.setState({
      contents: _contents,
      mode: 'read',
      selected_content_id: this.max_content_id
    })
    this.max_content_id = this.max_content_id + 1;
  }

  updateContent(_id, _title, _desc) {
    let _content = Array.from(this.state.contents);
    for (let i = 0; i < _content.length; i++) {
      if (_content[i].id === _id) {
        _content[i] = {id: _id, title: _title, desc: _desc}
      }
    }
    this.setState({
      contents: _content,
      mode: 'read',
    })
  }

  deleteContent(_id) {
    let _contents = Array.from(this.state.contents);
    for (let i = 0; i < _contents.length; i++) {
      if (_contents[i].id === _id) {
        _contents.splice(i, 1)
      }
    }
    this.setState({
      contents: _contents,
      mode: 'read',
      selected_content_id: 0,
    })
  }

  getData() {
    let _data = null;
    let contents = this.state.contents;
    let selected_content_id = this.state.selected_content_id;
    for (let i = 0; i < contents.length; i++) {
      if (contents[i].id === selected_content_id) {
        _data = contents[i];
        break;
      }
    }

    if (_data === null) {
      _data = {id: 0, title: "WELCOME", desc: "Hello, world"};
    }

    return _data;
  }

  getArticle(_data) {
    let _article = null;
    let _mode = this.state.mode;
    if (_mode === 'read') {
      _article = <ReadContent title={_data.title} desc={_data.desc}/>
    } else if (_mode === 'create') {
      _article = <CreateContent saveContent={this.saveContent} />
    } else if (_mode === 'update') {
      _article = <UpdateContent 
        updateContent={this.updateContent}
        id={this.state.selected_content_id}
        title={_data.title}
        desc={_data.desc}
       />
    } else if (_mode === 'delete') {
      this.deleteContent(this.state.selected_content_id);
    }

    return _article;
  }
  
  render() {    
    let _data = this.getData();
    
    return (
      <div>
        <Header title={this.state.header.title} subject={this.state.header.subject}/>
        <TOC 
          content={this.state.contents} 
          onChangePage = {this.onChangePage} 
        />
        <Control onChangeMode={this.onChangeMode} />
        {this.getArticle(_data)}
      </div>
    );
  }
}                     

export default App;
