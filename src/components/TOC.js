function TOC(props) {
  let lists = [];
  let data = props.content;
  for (let i = 0; i < data.length; i++) {
    lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
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