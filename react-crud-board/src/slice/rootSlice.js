// rootReducer라고 보면 되지만 slice 디렉토리 안에 있어서 rootSlice로
import { combineReducers } from "redux";
import { articleReducers } from "./articleSlice";
import { boardReducers } from "./boardSlice";

const rootReducer = combineReducers({ articleReducers, boardReducers }); // 리듀셔들을 묶어줌

export default rootReducer;
