import React, { useState } from "react";
import RegisterOrEdit from "./Sections/RegisterOrEdit";

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
    <>
      <RegisterOrEdit
        titleValue={TitleValue}
        contentValue={ContentValue}
        handleTitleChange={onTitleChange}
        handleContentChange={onContentChange}
      />
    </>
  );
}

export default RegisterPage;
