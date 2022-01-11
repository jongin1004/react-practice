import React from 'react';
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import Header from "./components/Header";
import Control from "./components/Control";
import './main.css';

class App extends React.Component {
  constructor(props) {    
    super(props);    
    this.state = { 
      mode: "welcome",
      selected_content_id: 2,
      header: {title: 'WEB', subject: 'WORLD WIDE WEB'},
      welcome: {title: 'Welcome', subject: 'Hello, React'},
      contents: [
        {id: 1, title: "HTML", desc: "HTML IS ..."},
        {id: 2, title: "CSS", desc: "CSS IS ..."},
        {id: 3, title: "JAVASCRIPT", desc: "JAVASCRIPT IS ..."}
      ]
    };
    this.max_content_id = this.state.contents.length + 1;
    this.onChangePage = this.onChangePage.bind(this);    
  }

  onChangePage(id = null) {
    this.setState({
        mode: 'read',
        selected_content_id: id
    });  
  }

  render() {
    let _title, _desc, _article = null;
    if(this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.subject;
      _article = <ReadContent title={_title} des={_desc}/>;
    } else if (this.state.mode === "read") {
      _title = this.state.contents[this.state.selected_content_id].title;
      _desc = this.state.contents[this.state.selected_content_id].desc;
      _article = <ReadContent title={_title} des={_desc}/>;
    } else if (this.state.mode === "create") {
      _article = <CreateContent onSubmit={function(_title, _desc) {
        let _content = this.state.contents.concat(
          {id: this.max_content_id, title: _title, desc: _desc}
        );
        this.setState({
          contents: _content
        });
      }.bind(this)} title={_title} des={_desc}/>;
    }

    return (
      <div className="App">
        <Header 
          title={this.state.header.title} 
          subject={this.state.header.subject}
          onChangePage = {function() {
            this.setState({ mode: 'welcome'});
          }.bind(this)}
        />
        <TOC 
          content={this.state.contents}
          onChangePage = {this.onChangePage}
        />
        <Control onChangeMode={function(_mode) {
          this.setState({mode: _mode})
        }.bind(this)} />
        {_article}
      </div>
    );
  }
}                     

export default App;
