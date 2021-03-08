import React, { useState } from "react";
import RegisterOrEdit from "./Sections/RegisterOrEdit";
import { useDispatch } from "react-redux";
import { articleActions } from "../../../slice/articleSlice";

function RegisterPage() {
  const [TitleValue, setTitleValue] = useState("");
  const [ContentValue, setContentValue] = useState("");
  const [IsForUpdate, setIsForUpdate] = useState(false);

  const dispatch = useDispatch(); // dispatch 훅 생성

  const onTitleChange = (event) => {
    setTitleValue(event.currentTarget.value);
  };
  console.log(TitleValue);

  const onContentChange = (event) => {
    setContentValue(event.currentTarget.value);
  };
  console.log(ContentValue);

  const onSubmitArticle = (event) => {
    event.preventDefault();
    const article = { title: TitleValue, content: ContentValue };
    dispatch(articleActions.registerArticle(article));
  }; // 게시물 등록화면에서 내용 입력 후 등록을 누르면
  // 위 onSubmitArticle 이벤트를 타고 입력한 내용이 article로 담긴다.
  // 이후에 registerArticle 액션 생성 함수를 호출하고 action payload로 article 객체를 가져간다.

  return (
    <>
      <RegisterOrEdit
        titleValue={TitleValue}
        contentValue={ContentValue}
        handleTitleChange={onTitleChange}
        handleContentChange={onContentChange}
        handleSubmit={onSubmitArticle}
        updateRequest={IsForUpdate}
      />
    </>
  );
}

export default RegisterPage;
