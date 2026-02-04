'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import { services } from '@/lib/constants';

const routeMapping: Record<string, string> = {
  'about': '关于我们',
  'services': '服务项目',
  'contact': '联系我们',
  'blog': '资讯中心',
};

// Create a map for service IDs to Titles
const serviceMapping = services.reduce((acc, service) => {
  acc[service.id] = service.title;
  return acc;
}, {} as Record<string, string>);

export function Breadcrumb() {
  const pathname = usePathname();

  // Don't show on home page
  if (pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);

  const breadcrumbs = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join('/')}`;
    
    let label = routeMapping[segment] || serviceMapping[segment] || segment;

    // Special handling for blog posts (last segment under blog)
    if (segments[index - 1] === 'blog' && !routeMapping[segment]) {
      // For blog posts, we might not have the title here easily without props.
      // We can display "正文" or try to format the slug.
      // Let's format the slug for now (replace hyphens with spaces)
      // or just show "文章详情" (Article Details) to be safe and clean.
      label = '文章详情';
    }

    // Special handling for service details if not found in mapping (fallback)
    if (segments[index - 1] === 'services' && !serviceMapping[segment]) {
       // It should be in mapping if loaded from constants, but just in case
    }

    return {
      href,
      label,
      isLast: index === segments.length - 1,
    };
  });

  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 py-3 border-b border-gray-100">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <ol role="list" className="flex items-center space-x-2">
          <li>
            <div>
              <Link href="/" className="text-gray-400 hover:text-gray-500">
                <Home className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                <span className="sr-only">首页</span>
              </Link>
            </div>
          </li>
          {breadcrumbs.map((crumb) => (
            <li key={crumb.href}>
              <div className="flex items-center">
                <ChevronRight className="h-4 w-4 flex-shrink-0 text-gray-300" aria-hidden="true" />
                {crumb.isLast ? (
                  <span className="ml-2 text-sm font-medium text-gray-700" aria-current="page">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                  >
                    {crumb.label}
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
