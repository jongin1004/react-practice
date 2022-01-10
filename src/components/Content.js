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

export default Content;