import React from "react";

function ArticlePage({ match, location }) {
  console.log(match.params.articleId);
  return <div>ArticlePage - id: {match.params.articleId}</div>;
}
export default ArticlePage;
