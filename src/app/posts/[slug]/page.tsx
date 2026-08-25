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
    <div className="grid grid-cols-1 gap-[60px] lg:grid-cols-[1000px_300px]">
      <article className="w-full min-w-0">
        <RegisterToc title={post.title} headings={headings} />

        <Link
          href="/posts"
          className="mb-8 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>목록으로</span>
        </Link>

        <PostThumbnail className="mb-8" />

        <header className="mb-8 pb-8 border-b border-border">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {post.title}
          </h1>
          {post.description && (
            <p className="text-xl text-muted-foreground mb-6">
              {post.description}
            </p>
          )}
          <time
            dateTime={post.date}
            className="mb-3 block text-sm text-muted-foreground"
          >
            {new Date(post.date).toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Tag key={tag} selected>
                {tag}
              </Tag>
            ))}
          </div>
        </header>

        <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
      </article>

      <TocSidebar />
    </div>
  );
}
