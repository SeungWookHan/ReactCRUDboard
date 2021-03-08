// redux-toolkit의 default middleware는 redux-thunk이기 때문에
// safaMiddleware로 덮어씌워줘야 함

// generate 함수 만들기. saga는 generate 함수를 바탕으로 만들어야 함
import { articleActions } from "../slice/articleSlice";
export function* registerArticleAsync(action) {
  console.log(action);
  debugger;
  yield console.log("finish");
}
