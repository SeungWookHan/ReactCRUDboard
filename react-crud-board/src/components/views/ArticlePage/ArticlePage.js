import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { articleActions } from "../../../slice/articleSlice";
import ArticleDetail from "./Sections/ArticleDetail";

function ArticlePage({ match, location }) {
  const dispatch = useDispatch();

  useEffect(() => {
    // 추후 조회수 증가에도 쓰임
    dispatch(articleActions.getArticle(match.params.articleId));
  }, [match.params.articleId]);
  // 게시글 id가 바뀔때마다 dispatch로 id를 보내 내용을 조회

  const { id, title, content } = useSelector((state) => ({
    id: state.articleReducers.id,
    title: state.articleReducers.title,
    content: state.articleReducers.content,
  }));

  const date = useSelector((state) => state.articleReducers.date);
  const views = useSelector((state) => state.articleReducers.views);
  // articleReducers에서 바뀐 state를 들고 와야 하므로
  return (
    <div>
      <ArticleDetail
        id={id}
        title={title}
        content={content}
        views={views}
        date={date}
      />
    </div>
  );
}
export default ArticlePage;
