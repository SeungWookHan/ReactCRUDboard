import React, { useState } from "react";

function RegisterPage() {
  const [TitleValue, setTitleValue] = useState("");
  const [ContentValue, setContentValue] = useState("");
  const onTitleChange = (event) => {
    setTitleValue(event.currentTarget.value);
  };
  console.log(TitleValue);
  const onContentChange = (event) => {
    setContentValue(event.currentTarget.value);
  };
  console.log(ContentValue);

  return (
    <div>
      <form onSubmit>
        <br />
        <label>Title: </label>
        <input
          onChange={onTitleChange}
          value={TitleValue}
          type="text"
          name="title"
        />
        <hr></hr>
        <div>
          <textArea
            onChange={onContentChange}
            value={ContentValue}
            name="content"
          />
        </div>
        <button onClick>Submit</button>
      </form>
    </div>
  );
}

export default RegisterPage;
