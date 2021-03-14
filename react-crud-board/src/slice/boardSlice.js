import { createSlice } from "@reduxjs/toolkit";

export const boardSlice = createSlice({
  name: "board",
  initialState: { board: [], isLoading: true, isSuccess: false, error: null },
  reducers: {
    getBoard: (state, { payload }) => {
      console.log("getBoard 액션 호출");
    }, // view에서 dispatch할 액션
    getBoardAsync: (state, { payload: data }) => {
      return { ...state, board: data, isSuccess: true, isLoading: false };
    }, // saga에서 put할 액션,
    // put할 때 변경될 state는 데이터가 성공적으로 조회된 상태만 내보내므로 getBoardAsync의 success는 true, loading은 false
  },
});

//initialState는 board 배열 리스트를 가져오는 것이어서 state를 하나하나 지정할 필요가 없음
// 조회 내용인 board, loading, success, error만 지정

export const boardReducers = boardSlice.reducer;
export const boardActions = boardSlice.actions;
// reducer와 action을 export 해줄 코드
