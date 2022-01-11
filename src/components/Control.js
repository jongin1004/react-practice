function Control(props) {
  return (
    <ul>
        <li><a href="!#" onClick={function(e) {
            e.preventDefault();
            props.onChangeMode('create');
        }}>create</a></li>
        <li><a href="!#" onClick={function(e) {
            e.preventDefault();
            props.onChangeMode('update');
        }}>update</a></li>
        <li><input onClick={function(e) {
            e.preventDefault();
            props.onChangeMode('delete');
        }} type="submit" value="delete" /></li>
    </ul>
  );
}

export default Control;