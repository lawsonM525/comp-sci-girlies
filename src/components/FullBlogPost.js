import React from 'react';
import { useParams } from 'react-router-dom';

const FullBlogPost = () => {
  const { id } = useParams();
  // Fetch the full blog post content using the id
  // This is a placeholder, you'll need to implement the actual data fetching
  const post = { title: 'Blog Post Title', content: 'Full blog post content...' };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 font-['Press_Start_2P'] text-white">{post.title}</h1>
      <div className="text-white">{post.content}</div>
    </div>
  );
};

export default FullBlogPost;