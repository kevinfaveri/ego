import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import StyledContainer, {
  StyledPost,
  StyledContent,
  StyledAnchor,
  StyledLink,
} from './styles';
import Layout from '../Layout';
import BlogPostHeader from '../BlogPostHeader';
import SEO from '../seo';
import Hero from '../Hero';

const BlogPostList = ({
  data: {
    allMarkdownRemark: { edges: postList },
  },
  pageContext: { currentPage, numPages },
}) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  return (
    <Layout>
      <SEO title="Blog" />
      <StyledContainer>
        {postList.map((el, index) => {
          const {
            excerpt,
            frontmatter: { id, title, date, author, authorPhoto },
            fields: {
              readingTime: { text: readingTimeString },
              slug,
            },
          } = el.node;
          return (
            <StyledPost key={index} isOdd={index % 2}>
              <BlogPostHeader
                slug={slug}
                title={title}
                date={date}
                author={author}
                authorPhoto={authorPhoto}
                readingTimeString={readingTimeString}
              />
              <StyledContent>{excerpt}</StyledContent>
              <StyledAnchor
                className="hover-link"
                href={`/blog${slug}`}
                title="Continue reading..."
              >
                Continue reading...
              </StyledAnchor>
            </StyledPost>
          );
        })}
        <Hero bgColor="secondary">
          {!isFirst && (
            <StyledLink to={`/blog/${prevPage}`} rel="prev">
              ← Previous Page
            </StyledLink>
          )}
          {!isLast && (
            <StyledLink to={`/blog/${nextPage}`} rel="next">
              Next Page →
            </StyledLink>
          )}
        </Hero>
      </StyledContainer>
    </Layout>
  );
};

BlogPostList.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default BlogPostList;

export const query = graphql`
  query blogPostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(blog-pages)/" } }
      sort: { order: DESC, fields: [frontmatter___id] }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          excerpt
          frontmatter {
            id
            title
            date
            author
            authorPhoto {
              childImageSharp {
                fixed(width: 100, quality: 100, cropFocus: CENTER) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          fields {
            readingTime {
              text
            }
            slug
          }
        }
      }
    }
  }
`;
