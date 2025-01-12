import React from 'react';
import blogs from '@/app/_libs/BlogsMock';
import ReactMarkdown from "react-markdown";
import { Clock, ThumbsUp, MessageCircle, Calendar, User, Tag, RefreshCw } from 'lucide-react';

type BlogData = {
  id: string;
  title: string;
  category: string;
  author: string;
  publishedDate: string;
  updatedDate: string;
  readTime: number;
  content: string;
  likes: number;
  comments: { user: string; comment: string; date: string }[];
  reviews: { reviewer: string; rating: number; review: string }[];
  tags: string[];
};

type BlogPageProps = {
  params: {
    blogId: string;
  };
};

const BlogPage = async ({ params }: BlogPageProps) => {
  const { blogId } = params;  // Destructuring the blogId directly from params
  // console.log(params);
  // console.log(blogId);

  const blogData = await fetchBlogData(blogId);

  if (!blogData) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="w-full max-w-2xl bg-gray-800 text-white p-6 rounded-lg">
          <p className="text-xl">Blog not found</p>
        </div>
      </div>
    );
  }

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4">
      <article className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-emerald-400 mb-4">
            <Tag className="w-4 h-4" />
            <span className="text-sm">{blogData.category}</span>
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">
            {blogData.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-gray-400 text-sm mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{blogData.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(blogData.publishedDate)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{blogData.readTime} min read</span>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4" />
              <span>Updated: {formatDate(blogData.updatedDate)}</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-gray-800 rounded-xl shadow-lg mb-8 p-8">
          <div className="prose prose-lg prose-invert max-w-none">
          <ReactMarkdown>{blogData.content}</ReactMarkdown>
          </div>
        </div>

        {/* Engagement Section */}
        <div className="flex flex-wrap gap-8 items-center text-gray-400">
          <button className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
            <ThumbsUp className="w-5 h-5" />
            <span>{blogData.likes} likes</span>
          </button>
          <button className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span>{blogData.comments.length} comments</span>
          </button>
        </div>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-2">
          {blogData.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-700 text-emerald-400 rounded-full text-sm hover:bg-gray-600 transition-colors cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Comments Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Comments</h2>
          {blogData.comments.map((comment, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-4 mb-4 hover:bg-gray-750 transition-colors">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-emerald-400 font-medium">{comment.user}</p>
                  <p className="text-gray-300 mt-2">{comment.comment}</p>
                </div>
                <span className="text-gray-500 text-sm">
                  {formatDate(comment.date)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Reviews Section */}
        <div className="mt-12 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Reviews</h2>
          {blogData.reviews.map((review, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-4 mb-4 hover:bg-gray-750 transition-colors">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-emerald-400 font-medium">{review.reviewer}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-gray-300">{review.rating}/5</span>
                  </div>
                  <p className="text-gray-300 mt-2">{review.review}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};

const fetchBlogData = async (blogId: string): Promise<BlogData | null> => {
  const mockDatabase = blogs; // Assuming `blogs` is an array of blog objects
  return mockDatabase.find(blog => blog.id === blogId) || null;
};

export default BlogPage;
