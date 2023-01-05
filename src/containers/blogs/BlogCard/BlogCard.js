import React from "react";
import * as S from "./BlogCard.styles";
import { Link, withRouter } from "react-router-dom";
import "./BlogCard.css";

const BlogCard = (props) => {
  const { blog } = props;

  return (
    <Link
      className="link"
      to={`/blogs/${blog.slugUrl}`}
      target="_self"
      style={{ minWidth: "14%", maxHeight: "100%" }}
    >
      <S.Card>
        <S.ImageWrapper>
          <S.Image src={blog.image.url} alt={blog.image.title} />
        </S.ImageWrapper>
        <S.Details>
          <S.Title>{blog.title}</S.Title>
          <S.Description>
            {blog.description.json.content[0].content[0].value}
          </S.Description>
        </S.Details>
      </S.Card>
    </Link>
  );
};

export default withRouter(BlogCard);
