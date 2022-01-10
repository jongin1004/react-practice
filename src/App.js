import './main.css';

function Header(props) {
  return (
    <header>
      <h1>{ props.title }</h1>
      <div>{ props.subject }</div>    
    </header>
  );
}

function TOC(props) {
  return (
    <nav>
      <ul>
        <li><a href="#">HTML</a></li>
        <li><a href="#">CSS</a></li>
        <li><a href="#">JAVASCRIPT</a></li>        
      </ul>
    </nav>
  );
}

function Content(props) {
  return (
    <article>
      <h3>{ props.title }</h3>
      <div>
        { props.des }
      </div>
    </article>
  );
}


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
