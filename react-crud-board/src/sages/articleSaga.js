// redux-toolkit의 default middleware는 redux-thunk이기 때문에
// safaMiddleware로 덮어씌워줘야 함

// generate 함수 만들기. saga는 generate 함수를 바탕으로 만들어야 함
import { put } from "redux-saga/effects";
import Axios from "axios";
import { articleActions } from "../slice/articleSlice";

export function* registerArticleAsync(action) {
  const data = action.payload;

  const postedData = yield Axios.post(`http://localhost:4000/board/`, data);

  yield alert("저장되었습니다.");
  
  console.log(postedData);
}

//action.payload에 article 객체 값이 들어가 있음.
// RegisterPage의 onSubmitArticle에서 설정해준 article임.

// data라는 객체에 action.payload를 보관하고 registerArticleAsync 액션함수를 호출하면서
// 해당 액션의 payload로 data를 다시 보내줌
// put은 redux-saga 의 dispatch임
