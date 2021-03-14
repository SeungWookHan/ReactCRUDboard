// saga도 기능별로 다양하게 만들 수 있으므로 rootSaga 둠
// rootSaga로 사용할 함수 역시 generate 함수여야 함

// generate 함수는 function 뒤에 *이 붙은 모양이고 함수내 yield 필수

import { takeEvery, takeLatest } from "redux-saga/effects";
import { articleActions } from "../slice/articleSlice";
import { registerArticleAsync, getArticleAsync } from "./articleSaga";

const { registerArticle, getArticle } = articleActions;

export default function* rootWatcher() {
  yield takeLatest(registerArticle.type, registerArticleAsync);
  yield takeEvery(getArticle.type, getArticleAsync);
}

// registerArticle 액션 생성함수로 호출된 것을 캐치하여 registerArticleAsync 호출되게

// 뷰에서 registerArticle 액션생성함수를 dispatch하게 되면
// articleSaga의 registerArticleAsync함수를 호출
