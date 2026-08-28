import { getPostBySlug, getPosts } from '@/lib/cms/service';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

import { PostThumbnail } from '@/components/post/post-thumbnail';
import { Tag } from '@/components/ui/tag';
import { RegisterToc } from '@/components/post/register-toc';
import { TocSidebar } from '@/components/post/toc-sidebar';
import { renderMarkdown } from '@/lib/markdown';
import { extractToc } from '@/lib/toc';

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  const { html, headings } = extractToc(renderMarkdown(post.content));

  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px]">
      <article className="w-full max-w-[800px]  min-w-0">
        <RegisterToc title={post.title} headings={headings} />

        <Link
          href="/posts"
          className="mb-4 mb:mb-8 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>목록으로</span>
        </Link>

        <PostThumbnail className="mb-8" />

        <header className="mb-8 pb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-1 md:mb-4 leading-tight">
            {post.title}
          </h1>
          {post.description && (
            <p className="text-xl font-medium text-muted-foreground mb-3 md:mb-6">
              {post.description}
            </p>
          )}

          <div className="flex flex-col  gap-3">
            <time dateTime={post.date} className="block text-sm font-semibold">
              {new Date(post.date).toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Tag key={tag} asChild>
                  <Link href={`/posts?tag=${tag}`}>{tag}</Link>
                </Tag>
              ))}
            </div>
          </div>
        </header>

        <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
      </article>

      <TocSidebar />
    </div>
  );
}
