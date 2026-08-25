'use client';

import { useToc } from '@/components/post/toc-context';
import { Toc } from '@/components/post/toc';

export function TocSidebar() {
	const { title, headings } = useToc();

	if (headings.length === 0) return null;

	return (
		<aside className="sticky top-24 hidden w-full self-start lg:block">
			<Toc title={title} headings={headings} />
		</aside>
	);
}
