import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";
function App() {
  return (
    <div>
      <h1>My todos</h1>
      <Todo title="my title" />
      <Todo title="my title 2" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
