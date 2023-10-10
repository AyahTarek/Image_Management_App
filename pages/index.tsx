import React from "react";
import { PostCard } from "@/components";
import { usePostsContext } from "@/hooks/usePostsContext";

const Home = () => {
  const { posts } = usePostsContext();
  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
