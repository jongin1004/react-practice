function CreateContent(props) {
  return (
    <article>
      <h1>Create</h1>
      <form onSubmit={function(e) {
          e.preventDefault();
          props.saveContent(
              e.target.title.value,
              e.target.desc.value
          );
      }}>
          <p><input type="text" name="title" placeholder="title"/></p>
          <p><textarea name="desc" placeholder="description"></textarea></p>
          <input type="submit" value="제출" />
      </form>
    </article>
  );
}

export default CreateContent;