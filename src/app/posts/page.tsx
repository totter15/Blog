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
    <div className="grid grid-cols-1 grid-cols-[100px_1fr] gap-[10px] md:gap-[20px] lg:grid-cols-[250px_1fr]">
      <Suspense fallback={null}>
        <TagSidebar tags={tags} />
      </Suspense>

      <div className="w-full min-w-0">
        <div className="flex flex-wrap justify-start gap-[12px]">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="block group w-full  md:w-[calc(50%-7.5px)] lg:min-w-[300px] lg:w-[calc(33.333%-10px)]"
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
