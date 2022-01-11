function Header(props) {
  return (
    <header>
      <h1><a href="/" onClick={function(e){
        console.log('안녕');
        e.preventDefault();
        }}>{ props.title }</a></h1>
      <div>{ props.subject }</div>    
    </header>
  );
}

export default Header;