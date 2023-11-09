import React, { useState } from "react";

function Create(props) {
  // State is an object with two fields
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleInput(event) {
    //Extract the name and value of field
    const { name, value } = event.target;

    //Add the extracted field
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submit(event) {
    //Add the note
    props.Add(note);

    //Reset the note state
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleInput}
          value={note.title}
          placeholder="Title"
        />

        <textarea
          name="content"
          placeholder="Take a note..."
          onChange={handleInput}
          value={note.content}
        />
        <button onClick={submit}>Add</button>
      </form>
    </div>
  );
}

export default Create;
