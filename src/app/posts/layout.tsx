import type { Metadata } from 'next';

import { TocProvider } from '@/components/post/toc-context';

export const metadata: Metadata = {
  title: 'Posts',
  description: 'Posts',
};

export default function PostsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TocProvider>
      <div className="flex justify-center pb-12">
        <div className="w-full max-w-[1400px]">{children}</div>
      </div>
    </TocProvider>
  );
}
