import React from "react";
import { Link } from "react-router-dom";

function BoardList(props) {
  console.log(props.board);

  return (
    <div>
      {" "}
      <table>
        {" "}
        <colgroup>
          {" "}
          <col width="10%" /> <col width="10%" /> <col width="40%" />{" "}
          <col width="40%" />{" "}
        </colgroup>{" "}
        <tr>
          {" "}
          <th>번호</th> <th>제목</th> <th>조회수</th>{" "}
        </tr>{" "}
        {props.board.map((article) => (
          <tr>
            {" "}
            <td>{article.id}</td>{" "}
            <Link to={`/article/${article.id}`}>
              {" "}
              <td>{article.title}</td>{" "}
            </Link>{" "}
            <td>{article.views}</td>{" "}
          </tr>
        ))}{" "}
      </table>{" "}
    </div>
  );
}

export default BoardList;
