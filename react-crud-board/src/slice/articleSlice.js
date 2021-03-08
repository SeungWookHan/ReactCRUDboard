import { createSlice } from "@reduxjs/toolkit";

export const articleSlice = createSlice({
  name: "article",
  initialState: { id: 0, title: "", content: "", views: 0 }, 
  // json-server는 자동으로 id를 생성해주기에 id 필드가 꼭 숫자로 있어야함(안그럼 오류)
  // 어떤 숫자를 써놔도 json-server에서는 자동으로 시퀀스를 매겨 들어감
  reducers: {
    registerArticle: (state, article) => { // saga에서 감시할 액션
      console.log(article);
      return {
        ...article,
        id: state.id,
      };
    },
    registerArticleAsync: (state, { payload }) => { // 서버 저장 후 게시물을 불러오는데 사용
      console.log(payload);
      debugger;
      return {
        ...state,
        id: payload.id,
      };
    },
  },
});

export const articleReducers = articleSlice.reducer;
export const articleActions = articleSlice.actions;
