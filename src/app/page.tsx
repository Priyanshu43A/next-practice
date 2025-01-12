import React from 'react'
import blogs from './_libs/BlogsMock';
import BlogCard from './_components/BlogCard';

const page = () => {
  return (
    <div className="w-11/12 min-h-screen mx-auto px-4 py-12" >
      <h1 className='text-8xl font-semibold'>Blogs</h1>
      <p className='text-slate-400 text-sm mt-8'>Here are the best and selected blogs based on your intrests...</p>
      <div className='flex flex-col mt-32 space-y-10 flex-wrap' >
        {blogs.map(blog => (
          <BlogCard key={blog.id} 
          blogId={blog.id}
          title={blog.title}
          author={blog.author}
          category={blog.category}
          publishedDate={blog.publishedDate}
          readTime={blog.readTime}
           />
        ))}
      </div>
    </div>
  )
}

export default page;
