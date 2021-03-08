import React from "react";

function RegisterOrEdit(props) {
  return (
    <div>
      <form onSubmit>
        <br />
        <label>Title: </label>
        <input
          onChange={props.handleTitleChange}
          value={props.titleValue}
          type="text"
          name="title"
        />
        <hr></hr>
        <div>
          <textArea
            onChange={props.handleContentChange}
            value={props.contentValue}
            name="content"
          />
        </div>
        <button onClick>Submit</button>
      </form>
    </div>
  );
}

export default RegisterOrEdit;
