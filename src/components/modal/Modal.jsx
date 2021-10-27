import React,{useState} from "react";
import "./modal.scss";

function Modal () {
  const [hide, setHide] = useState(false);

  const hideModal = () =>{
    setHide(null);
  }
  if(hide === null){
    return null;
  }
    return (
      <div className="modal overlay">
        <div className="modal__content">
          <div className="create-event">
            <button className="create-event__close-btn" onClick={hideModal}>+</button>
            <form className="event-form">
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="event-form__field"
              />
              <div className="event-form__time">
                <input type="date" name="date" className="event-form__field" />
                <input
                  type="time"
                  name="startTime"
                  className="event-form__field"
                  // onChange={this.handleChange}
                />
                <span>-</span>
                <input
                  type="time"
                  name="endTime"
                  className="event-form__field"
                />
              </div>
              <textarea
                name="description"
                placeholder="Description"
                className="event-form__field"
              ></textarea>
              <button type="submit" className="event-form__submit-btn">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }


export default Modal;
