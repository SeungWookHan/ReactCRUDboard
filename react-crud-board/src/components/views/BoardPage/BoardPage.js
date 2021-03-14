import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BoardList from "./Sections/BoardList";
import { Button, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { boardActions } from "../../../slice/boardSlice";

const { Title } = Typography;

function BoardPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(boardActions.getBoard());
  }, [dispatch]);

  const board = useSelector((state) => state.boardReducers.board);

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div>
        <Title>Board Title</Title>
      </div>
      <div>
        <Link to="/register">
          <Button type="primary">New Post</Button>
        </Link>
      </div>
      <div>
        <BoardList board={board} />
      </div>
    </div>
  );
}

export default BoardPage;
