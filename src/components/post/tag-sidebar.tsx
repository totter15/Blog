'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { Tag } from '@/components/ui/tag';

export function TagSidebar({ tags }: { tags: string[] }) {
  const searchParams = useSearchParams();
  const activeTag = searchParams.get('tag');

  return (
    <aside className="flex w-full flex-col gap-3">
      <span className="text-[14px] sm:text-lg font-extrabold underline">
        Tag
      </span>
      <div className="flex flex-wrap gap-x-1 gap-y-1">
        {tags.map((tag) => {
          const selected = activeTag === tag;
          return (
            <Tag key={tag} asChild selected={selected}>
              <Link href={selected ? '/posts' : `/posts?tag=${tag}`}>
                {tag}
              </Link>
            </Tag>
          );
        })}
      </div>
    </aside>
  );
}
