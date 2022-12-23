import React from "react";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import * as S from "./BlogCard.styles";
import { Link, withRouter } from "react-router-dom";
import "./BlogCard.css";

const BlogCard = (props) => {
  // const RICH_TEXT_OPTIONS = {
  //   renderMark: {
  //     [MARKS.BOLD]: (text) => <p className="text-white text-lg">{text}</p>,
  //   },
  //   renderNode: {
  //     [BLOCKS.PARAGRAPH]: (node, children) => {
  //       return <p className="text-lg text-white font-light">{children}</p>;
  //     },
  //     [INLINES.HYPERLINK]: (node, children) => {
  //       return (
  //         <a href={node.data.uri} className="text-gold underline">
  //           {children}
  //         </a>
  //       );
  //     },
  //   },
  // };

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
            {/* {documentToReactComponents(blog.description.json, RICH_TEXT_OPTIONS)} */}
            {blog.description.json.content[0].content[0].value}
          </S.Description>
        </S.Details>
      </S.Card>
    </Link>
  );
};

export default withRouter(BlogCard);
