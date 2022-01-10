import './main.css';

function Header() {
  return (
    <header>
      <h1>WEB</h1>
      <div>React</div>    
    </header>
  );
}

function TOC() {
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

function Content() {
  return (
    <article>
      <div>
        안녕하세요.
      </div>
    </article>
  );
}


function App() {
  return (
    <div className="App">
      <Header />
      <TOC />
      <Content />
    </div>
  );
}

export default App;
