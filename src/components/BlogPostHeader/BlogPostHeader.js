import React, { memo } from 'react';
import PropTypes from 'prop-types';
import StyledContainer, {
  StyledTitle,
  StyledPostDetails,
  StyledAuthorAvatar,
  StyledAuthorName,
  StyledPostData,
  StyledPostInfo,
} from './styles';
import LazyImage from '../LazyImage';
import { getSingleImageFixed } from '../../utils/graphql-utils';

function BlogPostHeader({
  title,
  date,
  author,
  authorPhoto,
  readingTimeString,
}) {
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledAuthorAvatar>
        <LazyImage
          imageFixed={getSingleImageFixed(authorPhoto)}
          style={{ borderRadius: '50px', margin: '20px 0' }}
        />
      </StyledAuthorAvatar>
      <StyledPostInfo>
        <StyledAuthorName>{author}</StyledAuthorName>
        <StyledPostData>
          {date} - {readingTimeString}
        </StyledPostData>
      </StyledPostInfo>
    </StyledContainer>
  );
}

BlogPostHeader.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorPhoto: PropTypes.object.isRequired,
  readingTimeString: PropTypes.string.isRequired,
};

export default memo(BlogPostHeader);
