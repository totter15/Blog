'use client';

import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';
import type { TocHeading } from '@/lib/toc';

type TocData = { title: string; headings: TocHeading[] };

type TocContextValue = TocData & {
	setToc: (toc: TocData) => void;
};

const EMPTY_TOC: TocData = { title: '', headings: [] };

const TocContext = createContext<TocContextValue | null>(null);

export function TocProvider({ children }: { children: ReactNode }) {
	const [toc, setTocState] = useState<TocData>(EMPTY_TOC);
	const setToc = useCallback((next: TocData) => setTocState(next), []);

	return (
		<TocContext.Provider value={{ ...toc, setToc }}>
			{children}
		</TocContext.Provider>
	);
}

export function useToc() {
	const ctx = useContext(TocContext);
	if (!ctx) throw new Error('useToc must be used within TocProvider');
	return ctx;
}
