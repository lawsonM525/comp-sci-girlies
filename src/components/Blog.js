import React from 'react';

const BlogPost = ({ title, author, date, excerpt }) => (
  <div className="border-b pb-4 mb-4">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-gray-600">By {author} on {date}</p>
    <p>{excerpt}</p>
    <a href="#" className="text-blue-500 hover:underline">Read more</a>
  </div>
);

const Blog = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold mb-6">Computer Science Girlies Blog</h1>
    <BlogPost 
      title="Navigating the Tech Industry as a Woman"
      author="Jane Doe"
      date="April 10, 2024"
      excerpt="In this post, we explore the challenges and opportunities for women in the tech industry, and share strategies for success."
    />
    <BlogPost 
      title="The Future of AI: Trends and Predictions"
      author="Emily Smith"
      date="March 25, 2024"
      excerpt="Dive into the latest developments in artificial intelligence and what they mean for the future of technology and society."
    />
    <BlogPost 
      title="Getting Started with Open Source Contributions"
      author="Sarah Johnson"
      date="March 15, 2024"
      excerpt="Learn how to make your first contribution to open source projects and build your coding portfolio."
    />
  </div>
);

export default Blog;