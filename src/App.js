import React from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Header from "./components/Header";
import './main.css';

class App extends React.Component {
  constructor(props) {    
    super(props);
    this.state = { 
      mode: "welcome",
      header: {title: 'WEB', subject: 'WORLD WIDE WEB'},
      welcome: {title: 'Welcome', subject: 'Hello, React'},
      contents: [
        {id: 1, title: "HTML", desc: "HTML IS ..."},
        {id: 2, title: "CSS", desc: "CSS IS ..."},
        {id: 3, title: "JAVASCRIPT", desc: "JAVASCRIPT IS ..."}
      ]
    };
    this.onChangePage = this.onChangePage.bind(this);    
  }

  onChangePage() {    
    this.setState({mode: 'read'});
  }

  render() {
    let _title, _desc = null;
    if(this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.subject;
    } else if (this.state.mode === "read") {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }

    return (
      <div className="App">
        <Header 
          title={this.state.header.title} 
          subject={this.state.header.subject}
          onChangePage = {this.onChangePage}
        />
        <TOC content={this.state.contents}/>
        <Content title={_title} des={_desc}/>
      </div>
    );
  }
}                     

export default App;
