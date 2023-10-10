import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { FaHome, FaHeart } from "react-icons/fa";
import Link from "next/link";
import { ROUTES } from "@/routes";
import { Avatar, Header, PostCard } from "@/components";
import { usePostsContext } from "@/hooks/usePostsContext";

const Favorites = () => {
  const { posts } = usePostsContext();

  const likedPosts = posts.filter((post) => post.isLiked);
  return (
    <div>
      {likedPosts.length === 0 && <b>No Liked Post(s) Yet.</b>}
      {likedPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Favorites;
