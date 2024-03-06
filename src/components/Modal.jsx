import "./Modal.css";

function Modal({ modalTitle, onTodoCancel, onTodoConfirm }) {

  return (
    <>
      <div className="modal">
        <p className="modal__title">{modalTitle}</p>
        <div className="modal__buttons">
          <button className="btn btn__cancel" onClick={onTodoCancel}>
            Cancel
          </button>
          <button className="btn" onClick={onTodoConfirm}>
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}

export default Modal;
