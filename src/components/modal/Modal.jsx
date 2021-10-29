import React, { useState } from "react";
import "./modal.scss";

function Modal({ hideModal, createEvent }) {
  const [eventData, setEvent] = useState({
    title: "",
    description: "",
    date: "",
    startTime: "00:00",
    endTime: "00:00",
  });

  const { title, description, date, startTime, endTime } = eventData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEvent({
      ...eventData,
      [name]: value,
    });
  };

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={hideModal}>
            +
          </button>
          <form
            className="event-form"
            onSubmit={(e) => {
              createEvent(e, eventData);
              hideModal(e);
            }}
          >
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              value={title}
              onChange={handleChange}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                value={date}
                onChange={handleChange}
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                value={startTime}
                onChange={handleChange}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                value={endTime}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              value={description}
              onChange={handleChange}
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
