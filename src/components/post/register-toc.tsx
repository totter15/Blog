'use client';

import { useEffect } from 'react';
import { useToc } from '@/components/post/toc-context';
import type { TocHeading } from '@/lib/toc';

/** Registers this page's title/headings into the shared TOC sidebar slot rendered by the layout. */
export function RegisterToc({
	title,
	headings,
}: {
	title: string;
	headings: TocHeading[];
}) {
	const { setToc } = useToc();

	useEffect(() => {
		setToc({ title, headings });
		return () => setToc({ title: '', headings: [] });
	}, [title, headings, setToc]);

	return null;
}
