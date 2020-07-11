import React from 'react';
import PropTypes from 'prop-types';
import StyledContainer, { StyledContent } from './styles';
import Layout from '../Layout';
import BlogPostHeader from '../BlogPostHeader';
import SEO from '../seo';

const BlogPost = ({ data }) => {
  const {
    html,
    frontmatter: { title, date, author, authorPhoto },
    fields: {
      readingTime: { text: readingTimeString },
    },
  } = data.markdownRemark;
  return (
    <Layout>
      <SEO title={`Blog | ${title}`} />
      <StyledContainer>
        <BlogPostHeader
          title={title}
          date={date}
          author={author}
          authorPhoto={authorPhoto}
          readingTimeString={readingTimeString}
        />
        <StyledContent dangerouslySetInnerHTML={{ __html: html }} />
      </StyledContainer>
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape(() => ({
    html: PropTypes.string.isRequired,
    frontmatter: PropTypes.shape(() => ({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      authorPhoto: PropTypes.object.isRequired,
    })),
    fields: PropTypes.shape(() => ({
      readingTime: PropTypes.shape(() => ({
        text: PropTypes.string.isRequired,
      })),
    })),
  })),
};

export default BlogPost;
