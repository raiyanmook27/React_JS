import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalOpen, setModalOpen] = useState(false);

  function onDeleteHandler() {
    setModalOpen(true);
  }

  function onCancelHandler() {
    setModalOpen(false);
  }

  return (
    <div>
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn btn--alt" onClick={onDeleteHandler}>
          Delete
        </button>
      </div>
      {modalOpen && (
        <Modal onCancel={onCancelHandler} onConfirm={onCancelHandler} />
      )}
      {modalOpen && <Backdrop onClick={onCancelHandler} />}
    </div>
  );
}

export default Todo;
