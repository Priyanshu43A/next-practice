import React from 'react';
import { Clock, ArrowRight, Calendar } from 'lucide-react';

interface BlogCardProps {
  blogId: string,
  title: string;
  author: string;
  category: string;
  publishedDate: Date;
  readTime: number;
}

const BlogCard: React.FC<BlogCardProps> = ({
  blogId,
  title,
  author,
  category,
  publishedDate,
  readTime,
}) => {
  return (
    <div className="group w-1/2 mx-auto relative overflow-hidden rounded-xl bg-gray-900 p-6 transition-all hover:bg-gray-800">
      {/* Category Badge */}
      <div className="mb-4">
        <span className="inline-block rounded-full bg-indigo-500/10 px-3 py-1 text-sm text-indigo-400">
          {category}
        </span>
      </div>

      {/* Title */}
      <h2 className="mb-3 text-xl font-semibold text-white transition-colors group-hover:text-indigo-400">
        {title}
      </h2>

      {/* Metadata Row */}
      <div className="mb-6 flex items-center gap-4 text-sm text-gray-400">
        {/* Author */}
        <span>{author}</span>

        {/* Date */}
        <div className="flex items-center gap-1">
          <Calendar size={14} />
          <span>
            {new Date(publishedDate).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
        </div>

        {/* Read Time */}
        <div className="flex items-center gap-1">
          <Clock size={14} />
          <span>{readTime} min read</span>
        </div>
      </div>

      {/* Read More Button */}
      <div className="flex items-center">
       <a href={`/blog/${blogId}`}> <button className="flex items-center gap-2 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300">
          Read Article 
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </button>
        </a>
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </div>
  );
};

export default BlogCard;