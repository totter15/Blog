import Link from 'next/link';
import { Suspense } from 'react';

import PostCard from '@/components/post/post-card';
import { TagSidebar } from '@/components/post/tag-sidebar';
import { getPosts } from '@/lib/cms/service';

export default async function Posts({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const { tag } = await searchParams;
  const posts = await getPosts();
  const tags = Array.from(new Set(posts.flatMap((post) => post.tags))).sort();
  const filteredPosts = tag
    ? posts.filter((post) => post.tags.includes(tag))
    : posts;

  return (
    <div className="grid grid-cols-1 grid-cols-[100px_1fr] gap-[10px] md:gap-[40px] lg:grid-cols-[300px_1fr]">
      <Suspense fallback={null}>
        <TagSidebar tags={tags} />
      </Suspense>

      <div className="w-full min-w-0">
        <div className="mb-4 sm:mb-8">
          <h1 className="text-2xl font-bold lg:mb-2 lg:text-4xl">POST</h1>
          <p className="text-muted-foreground">
            총 {filteredPosts.length}개의 글
          </p>
        </div>

        <div className="flex flex-wrap justify-start gap-[12px]">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="block group w-full  md:w-[calc(50%-7.5px)] lg:min-w-[350px] lg:w-[calc(33.333%-10px)]"
            >
              <PostCard post={post} />
            </Link>
          ))}
        </div>
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              아직 작성된 글이 없습니다.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
