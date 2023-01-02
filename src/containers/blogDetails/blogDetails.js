import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import AnimatedButton from "../../components/common/button/animatedButton";
import {
  Instagram,
  FacebookIcon,
  Twitter,
  Loading,
} from "../../assets/svgicon/svgIcons";

import * as S from "./blogDetails.styles";
import { Navbar, Footer } from "../../components/common";
// import { LinearProgress } from "../../components/common";

const BlogDetails = (props) => {
  const [slugUrl, setSlugUrl] = React.useState(props.match.params.slugUrl);
  const { pathname } = useLocation();

  React.useEffect(() => {
    setSlugUrl(props.match.params.slugUrl);
  }, [props.match.params.slugUrl]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const mainQuery = gql`
    query ($slugUrl: String) {
      blogCollection(
        limit: 1
        order: sys_publishedAt_ASC
        where: { slugUrl: $slugUrl }
      ) {
        items {
          title
          description {
            json
            links {
              assets {
                block {
                  sys {
                    id
                  }
                  title
                  description
                  url
                }
              }
            }
          }
          image {
            title
            url
          }
          sys {
            publishedAt
          }
          authorName
          authorImage {
            title
            url
          }
        }
      }
    }
  `;
  // eslint-disable-next-line
  const { loading, data } = useQuery(mainQuery, {
    variables: { slugUrl: slugUrl },
  });
  function renderOptions(links) {
    // create an asset map
    const assetMap = new Map();
    // loop through the assets and add them to the map
    for (const asset of links.assets.block) {
      assetMap.set(asset.sys.id, asset);
    }

    return {
      renderMark: {
        [MARKS.BOLD]: (text) => <S.BoldText>{text}</S.BoldText>,
        [MARKS.CODE]: (text) => (
          <pre className="bg-gold w-full p-4 text-black   rounded ">
            <code className="w-full text-sm ">{text}</code>
          </pre>
        ),
      },

      renderNode: {
        [BLOCKS.HEADING_2]: (node, children) => {
          return (
            <>
              <S.Heading2>{children}</S.Heading2>
              <br />
            </>
          );
        },
        [BLOCKS.UL_LIST]: (node, children) => {
          return (
            <S.UL>
              {children}
              <br />
            </S.UL>
          );
        },
        [BLOCKS.OL_LIST]: (node, children) => {
          return (
            <S.OL>
              {children}
              <br />
            </S.OL>
          );
        },

        [BLOCKS.PARAGRAPH]: (node, children) => {
          return (
            <>
              <S.Paragraph>{children}</S.Paragraph>
              <br />
            </>
          );
        },

        [INLINES.HYPERLINK]: (node, children) => {
          return <S.HyperLink href={node.data.uri}>{children}</S.HyperLink>;
        },
        [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
          // find the asset in the assetMap by ID
          const asset = assetMap.get(node.data.target.sys.id);

          // render the asset accordingly
          return (
            <S.EmbeddedAssetImageWrapper>
              <S.EmbeddedAssetImage src={asset.url} alt={asset.title} />
              <S.Source href={asset.description} target="blank">
                Source
              </S.Source>
            </S.EmbeddedAssetImageWrapper>
          );
        },
      },
    };
  }

  return (
    <div>
      {loading ? (
        <div className="w-full h-screen flex justify-center items-center p-10">
          <Loading />
        </div>
      ) : (
        <>
          <Navbar />
          <S.Container>
            <S.BlogWrapper>
              <S.Title>{data?.blogCollection?.items[0].title}</S.Title>
              <S.ProfileWrapper>
                <S.SocialMedia>
                  <S.Icon>
                    <Instagram />
                  </S.Icon>
                  <S.Icon>
                    <FacebookIcon />
                  </S.Icon>
                  <S.Icon>
                    <Twitter />
                  </S.Icon>
                </S.SocialMedia>
              </S.ProfileWrapper>
              <S.ImageWrapper className="border border-gold rounded-lg p-2">
                <S.Image
                  src={data?.blogCollection?.items[0].image.url}
                  alt={data?.blogCollection?.items[0].image.title}
                />
              </S.ImageWrapper>
              <S.Content>
                {documentToReactComponents(
                  data?.blogCollection?.items[0].description.json,
                  renderOptions(
                    data?.blogCollection?.items[0].description.links
                  )
                )}
              </S.Content>
            </S.BlogWrapper>
            
            <Footer marginLeftZero />
          </S.Container>
          <S.QuestionWrapper>
              <S.Question>
                <S.QuestionText>
                  <p> Have A Question ? We Are Happy to Help</p>
                </S.QuestionText>
                <Link to={`/#contact`}>
                  <AnimatedButton buttonname="Contact Us">
                    Contact Us
                  </AnimatedButton>
                </Link>
              </S.Question>
            </S.QuestionWrapper>
        </>
      )}
    </div>
  );
};
export default BlogDetails;
