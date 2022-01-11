import React from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Header from "./components/Header";
import './main.css';

class App extends React.Component {
  constructor(props) {    
    super(props);
    this.state = {      
      header: {title: 'WEB', subject: 'WORLD WIDE WEB'},
      contents: [
        {id: 1, title: "HTML", desc: "HTML IS ..."},
        {id: 2, title: "CSS", desc: "CSS IS ..."},
        {id: 3, title: "JAVASCRIPT", desc: "JAVASCRIPT IS ..."}
      ]
    };    
  }

  render() {
    return (
      <div className="App">
        <Header title={this.state.header.title} subject={this.state.header.subject}/>
        <TOC content={this.state.contents}/>
        <Content title="HTML" des="HTML is ..."/>
      </div>
    );
  }
}

export default App;
