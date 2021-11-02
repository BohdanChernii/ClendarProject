import React from "react";

const DeleteEvent = ({ deleteEvent, id }) => {
  return (
    <div className="delete-event-btn" onClick={() => deleteEvent(id)}>
      Delete Event ?!
    </div>
  );
};
export default DeleteEvent;
