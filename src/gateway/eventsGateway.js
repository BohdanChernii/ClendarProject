const baseUrl = "https://614b503de4cc2900179eb033.mockapi.io/calendar";
export const fetchCreate = (eventData) => 
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  }).then((response) => {
    if (!response.ok) {
      throw Error(alert("'Internal Server Error. Can't display events"));
    }
  });


export const fetchEvents = () =>
  fetch(baseUrl).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });

export const fetchDelete = (eventId) =>
  fetch(`${baseUrl}/${eventId}`, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) {
      throw new Error(alert("'Internal Server Error. Can't delete events"));
    }
  });
