'use client';

import { services } from '@/lib/constants';
import { notFound } from 'next/navigation';

// Next.js 15+ compatible PageProps interface
interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ServiceDetail({ params }: PageProps) {
  // Await params for Next.js 15+ compatibility
  const { id } = await params;
  const service = services.find(s => s.id === id);
  
  if (!service) {
    notFound();
  }

  const IconComponent = service.icon;

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 mb-8">
          <IconComponent className="h-8 w-8 flex-none text-blue-600" aria-hidden="true" />
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{service.title}</h2>
        </div>
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: service.content }}
        />
        <div className="mt-12 bg-gray-50 p-8 rounded-2xl">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">服务特点</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.features.map((feature, index) => (
              <li key={index} className="flex gap-x-3 text-sm text-gray-600">
                <span className="h-1.5 w-1.5 mt-2.5 rounded-full bg-blue-600 flex-none" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
