// function Header(props) {
//   return (
//     <header>
//       <h1><a href="/" onClick={function(e){                
//         e.preventDefault();      
//         props.onChangePage();
//         }}>{ props.title }</a></h1>
//       <div>{ props.subject }</div>    
//     </header>
//   );
// }

// export default Header;


function Header(props) {
  console.log(props);
  return (
    <header>
      <h1><a href="/">{props.title}</a></h1>
      <div>{props.subject}</div>    
    </header>
  );
}

export default Header;