export interface TocHeading {
	depth: 2 | 3;
	id: string;
	text: string;
}

export interface TocResult {
	html: string;
	headings: TocHeading[];
}

function slugify(text: string, usedSlugs: Map<string, number>): string {
	const base =
		text
			.trim()
			.toLowerCase()
			.replace(/[^\p{L}\p{N}\s-]/gu, '')
			.replace(/\s+/g, '-') || 'section';
	const count = usedSlugs.get(base) ?? 0;
	usedSlugs.set(base, count + 1);
	return count === 0 ? base : `${base}-${count}`;
}

/**
 * Extracts h2/h3 headings from post HTML and injects `id` attributes so the
 * TOC can link to each section.
 */
export function extractToc(html: string): TocResult {
	const usedSlugs = new Map<string, number>();
	const headings: TocHeading[] = [];

	const resultHtml = html.replace(
		/<h([23])([^>]*)>([\s\S]*?)<\/h\1>/g,
		(_match, level: string, attrs: string, inner: string) => {
			const depth = Number(level) as 2 | 3;
			const text = inner.replace(/<[^>]+>/g, '').trim();
			const id = slugify(text, usedSlugs);
			headings.push({ depth, id, text });
			return `<h${level}${attrs} id="${id}">${inner}</h${level}>`;
		}
	);

	return { html: resultHtml, headings };
}
