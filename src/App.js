import TOC from "./components/TOC";
import Content from "./components/Content";
import Header from "./components/Header";
import './main.css';

function App() {
  return (
    <div className="App">
      <Header title="WEB" subject="React"/>
      <TOC />
      <Content title="HTML" des="HTML is ..."/>
    </div>
  );
}

export default App;
