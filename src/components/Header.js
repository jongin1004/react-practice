function Header(props) {
  return (
    <header>
      <h1>{ props.title }</h1>
      <div>{ props.subject }</div>    
    </header>
  );
}

export default Header;