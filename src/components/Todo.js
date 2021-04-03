function Todo(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="action">
        <button className="btn">DELETE</button>
      </div>
    </div>
  );
}
export default Todo;
