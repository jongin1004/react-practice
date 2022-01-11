function TOC(props) {
  let lists = [];
  for (let i = 0; i < props.content.length; i++) {
    lists.push(<li key={props.content[i].id}><a href={"/content/"+props.content[i].id}>{props.content[i].title}</a></li>);
  }
  return (
    <nav>
      <ul>        
        {lists}
      </ul>
    </nav>
  );
}

export default TOC;