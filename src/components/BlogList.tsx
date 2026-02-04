'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BlogPost } from '@/lib/blog';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogListProps {
  posts: BlogPost[];
}

const categories = [
  { id: 'all', name: '全部资讯' },
  { id: 'company', name: '公司动态' },
  { id: 'knowledge', name: '知识百科' },
  { id: 'industry', name: '行业信息' },
];

export function BlogList({ posts }: BlogListProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filteredPosts = activeCategory === 'all' 
    ? posts 
    : posts.filter(post => {
        // Map category names to IDs if necessary, or assume post.category matches the name
        // Let's assume post.category stores the Chinese name directly for simplicity in markdown
        const categoryMap: Record<string, string> = {
            'company': '公司动态',
            'knowledge': '知识百科',
            'industry': '行业信息'
        };
        return post.category === categoryMap[activeCategory];
    });

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setCurrentPage(1); // Reset to first page when category changes
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Optional: Scroll to top of list
      const listElement = document.getElementById('blog-list-top');
      if (listElement) {
        listElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div id="blog-list-top">
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
              activeCategory === category.id
                ? "bg-blue-600 text-white shadow-lg scale-105"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            )}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {currentPosts.map((post) => (
          <article key={post.slug} className="flex flex-col items-start justify-between bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="relative w-full">
              <div className="aspect-[16/9] w-full rounded-2xl bg-gray-100 overflow-hidden">
                {post.coverImage ? (
                    <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-50 text-gray-400">
                        <span className="text-4xl">📦</span>
                    </div>
                )}
              </div>
            </div>
            <div className="max-w-xl w-full">
              <div className="mt-8 flex items-center gap-x-4 text-xs">
                <time dateTime={post.date} className="text-gray-500">
                  {post.date}
                </time>
                <span className={cn(
                    "relative z-10 rounded-full px-3 py-1.5 font-medium hover:bg-opacity-80 transition-colors",
                    post.category === '公司动态' ? "bg-blue-50 text-blue-600" :
                    post.category === '知识百科' ? "bg-green-50 text-green-600" :
                    "bg-orange-50 text-orange-600"
                )}>
                  {post.category}
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.excerpt}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredPosts.length > 0 && totalPages > 1 && (
        <div className="mt-16 flex justify-center items-center gap-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={cn(
                  "w-8 h-8 rounded-full text-sm font-medium transition-colors",
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                )}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Next page"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      )}

      {filteredPosts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">暂无该分类的文章。</p>
        </div>
      )}
    </div>
  );
}