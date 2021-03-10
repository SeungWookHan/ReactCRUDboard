import React, { useState } from "react";
import RegisterOrEdit from "./Sections/RegisterOrEdit";
import { useDispatch, useSelector } from "react-redux";
import { articleActions } from "../../../slice/articleSlice";

function RegisterPage() {
  const [TitleValue, setTitleValue] = useState("");
  const [ContentValue, setContentValue] = useState("");
  const [IsForUpdate, setIsForUpdate] = useState(false);

  const dispatch = useDispatch(); // dispatch 훅 생성

  // const views = useSelector((state) => state.articleReducers.views);
  const { views, date, editDate } = useSelector((state) => ({
    views: state.articleReducers.views,
    date: state.articleReducers.date,
    editDate: "",
  }));

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

    if (TitleValue === "" || TitleValue === null || TitleValue === undefined) {
      alert("제목을 작성하십시오.");
      return false;
    }

    if (
      ContentValue === "" ||
      ContentValue === null ||
      ContentValue === undefined
    ) {
      alert("내용을 작성하십시오.");
      return false;
    }

    const article = {
      title: TitleValue,
      content: ContentValue,
      views: views,
      date: date,
      editDate: editDate,
    };
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
