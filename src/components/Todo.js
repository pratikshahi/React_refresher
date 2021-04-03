import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [showModal, setModal] = useState(false); //useState return an array with 2 elements 1st value second function

  function deleteHandler() {
    setModal(true);
  }
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="action">
        <button className="btn" onClick={deleteHandler}>
          DELETE
        </button>
      </div>
      {showModal && <Modal />}
      {showModal && <Backdrop />}
    </div>
  );
}
export default Todo;
