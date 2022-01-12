function ReadContent(props) {
  return (
    <article>
      <h3>{ props.title }</h3>
      <div>
        { props.desc }
      </div>
    </article>
  );
}

export default ReadContent;