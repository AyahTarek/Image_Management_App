import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';
import Image from 'next/image';
import { Post } from '@/types';
import { usePostsContext } from '@/hooks/usePostsContext';

const PostContainer = styled.div`
  border: 1px solid #e1e1e1;
  margin: 16px;
  padding: 16px;
  background: transparent;
  position: relative; /* Container for positioning avatar and name */
  max-width: 500px; /* Limit the width of the container for responsiveness */
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute; /* Positioning within the container */
  top: 24px;
  left: 24px;
  z-index: 1;
`;

const AuthorAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 8px;
`;

const AuthorName = styled.span`
  font-weight: bold;
`;

const ImageWrapper = styled.div`
  max-width: 100%;
`;
const LikeButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  width: 19px;
  height: 19px;
`;

const Likes = styled.div`
  font-weight: bold;
`;

const LikesWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  margin-top: 4px;
  margin-bottom: 4px;
`;

const Caption = styled.p`
  margin-top: 8px;
  margin-bottom: 8px;
`;

const CommentsWrapper = styled.div`
  cursor: pointer;
  margin-top: 8px;
  font-weight: bold;
`;

type PostProps = {
  post: Post;
};

export const PostCard = ({ post }: PostProps) => {
  const { author, image, isLiked, likers, caption, comments } = post;
  const { toggleLike } = usePostsContext();

  const handleOnLikeClick = () => {
    toggleLike(post.id);
  };

  return (
    <PostContainer>
      <AuthorContainer>
        <AuthorAvatar src={author.avatar} alt={author.name} />
        <AuthorName>{author.name}</AuthorName>
      </AuthorContainer>
      <ImageWrapper>
        <Image
          src={image}
          alt="Picture of the author"
          sizes="100vw"
          priority
          style={{
            width: '100%',
            height: 'auto',
            opacity: 0.8,
          }}
          width={500}
          height={300}
        />
      </ImageWrapper>
      <LikesWrapper>
        <LikeButton onClick={handleOnLikeClick}>
          <FaHeart color={isLiked ? 'red' : 'white'} />
        </LikeButton>
        <Likes>{likers.length} likes</Likes>
      </LikesWrapper>
      <Caption>{caption}</Caption>
      <CommentsWrapper>
        {comments.length ? `View ${comments.length} comments` : 'No Comments'}
      </CommentsWrapper>
    </PostContainer>
  );
};
