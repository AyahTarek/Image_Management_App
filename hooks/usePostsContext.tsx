import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockedPosts } from '@/mocks';
import { Post } from '@/types';

type PostsContextType = {
  posts: Post[];
  toggleLike: (postId: number) => void;
};

const PostsContext = createContext<PostsContextType | undefined>(undefined);

export const usePostsContext = (): PostsContextType => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error('usePostsContext must be used within a PostsProvider');
  }
  return context;
};

type PostsProviderProps = {
  children: React.ReactNode;
};

export const PostsProvider: React.FC<PostsProviderProps> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const toggleLike = (postId: number) => {
    const newPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          isLiked: !post.isLiked,
          likers: post.isLiked
            ? post.likers.slice(0, -1)
            : [...post.likers, {}],
        };
      }
      return post;
    });

    const newFavorites = newPosts
      .filter((post) => post.isLiked)
      .map((post) => post.id);

    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setPosts(newPosts);
  };

  useEffect(() => {
    const favorites: number[] = JSON.parse(
      localStorage.getItem('favorites') || '[]',
    );

    const allPosts = mockedPosts.map((post) => {
      const isPostLiked = favorites.includes(post.id);
      return {
        ...post,
        isLiked: isPostLiked,
        likers: isPostLiked ? [...post.likers, {}] : post.likers,
      };
    });
    setPosts(allPosts);
  }, []);

  const contextValue = {
    posts,
    toggleLike,
  };

  return (
    <PostsContext.Provider value={contextValue}>
      {children}
    </PostsContext.Provider>
  );
};
