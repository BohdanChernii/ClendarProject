import React, { useState } from "react";
import "./modal.scss";

function Modal({ hideModal }) {
  const [title, setTitle] = useState("");
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const [text, setText] = useState("");
  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const [date, setDate] = useState("");
  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  const [startTime, setStartTime] = useState("00:00");
  const handleChangeStartTime = (e) => {
    setStartTime(e.target.value);
  };
  const [endTime, setEndTime] = useState("00:00");
  const handleChangeEndTime = (e) => {
    setEndTime(e.target.value);
  };
  const event = { title, date, startTime, endTime, text };
  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={hideModal}>
            +
          </button>
          <form className="event-form">
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              value={title}
              onChange={handleChangeTitle}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                onChange={handleChangeDate}
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                onChange={handleChangeStartTime}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                onChange={handleChangeEndTime}
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              onChange={handleChangeText}
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
