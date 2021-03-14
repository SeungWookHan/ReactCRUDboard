import { createSlice } from "@reduxjs/toolkit";

export const articleSlice = createSlice({
  name: "article",
  initialState: {
    id: 0,
    title: "",
    content: "",
    views: 0,
    date: new Date(Date.now()),
    editDate: new Date(Date.now()),
  },
  // json-server는 자동으로 id를 생성해주기에 id 필드가 꼭 숫자로 있어야함(안그럼 오류)
  // 어떤 숫자를 써놔도 json-server에서는 자동으로 시퀀스를 매겨 들어감
  reducers: {
    registerArticle: (state, { payload: article }) => {
      // saga에서 감시할 액션
      console.log(article);
      // return {
      //   ...article,
      //   id: state.id,
      // };
    },
    getArticle: (state, { payload: id }) => {
      console.log(id); // saga에서 감시용
    },
    getArticleAsync: (state, { payload: article }) => {
      console.log(article); // saga에서 호출용
      return {
        ...state,
        id: article.id,
        title: article.title,
        content: article.content,
        date: article.date,
        editDate: article.editDate,
        views: article.views,
      };
    },
  },
});

export const articleReducers = articleSlice.reducer;
export const articleActions = articleSlice.actions;
