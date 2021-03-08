// redux-saga를 미들웨어로 쓸 것이기 때문에 createStore가 아닌 toolkit의 configureStore 활용
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"; // 사용할 미들웨어 import
import logger from "redux-logger";
import rootReducer from "./slice/rootSlice";
import rootSaga from "./sages/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const initialState = {};

const store = configureStore({
  //configureStore 함수 내에 필요한 데이터를 집어넣고 store 변수로 받음
  reducer: rootReducer,
  middleware: [sagaMiddleware, logger], //logger도 다른 종류의 미들웨어.
  // prevState, action, nextState를 console창에 보여주는 기능을 함
  devTools: true, // 웹의 devTool과 연결할 것인지 여부를 적음
  preloadedState: initialState, // reducer에서 정해준 initialState보다 더 앞서 prefix될 state
});

sagaMiddleware.run(rootSaga); // saga가 제대로 돌아가기 위해 꼭 필요

export default store;
