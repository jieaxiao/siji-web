import { getAllPosts } from '@/lib/blog';
import { BlogList } from '@/components/BlogList';

export const metadata = {
  title: '资讯中心 | 康翔幸运物流',
  description: '了解康翔幸运物流的最新公司动态、物流知识百科及行业最新资讯。',
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">资讯中心</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            洞察行业趋势，分享专业知识，传递公司动态。
          </p>
        </div>
        
        <BlogList posts={posts} />
      </div>
    </div>
  );
}