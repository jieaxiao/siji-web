import React from 'react';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white py-24 sm:py-32 min-w-[1200px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="mb-10">
          <Link
            href="/blog"
            className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500 flex items-center gap-1"
          >
            <ArrowLeft className="h-4 w-4" />
            返回列表
          </Link>
        </div>

        <article className="prose prose-lg prose-blue mx-auto max-w-none">

          <h1>{post.title}</h1>
          <div className="text-gray-500 text-sm mb-8">{post.date}</div>

          {post.coverImage && (
            <img
              src={post.coverImage}
              alt={post.title}
              className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover"
            />
          )}

          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
}

