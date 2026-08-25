import { cn } from '@/lib/utils';
import type { TocHeading } from '@/lib/toc';

export function Toc({
	title,
	headings,
}: {
	title: string;
	headings: TocHeading[];
}) {
	if (headings.length === 0) return null;

	return (
		<nav className="flex w-full flex-col gap-3 border-l border-primary pl-4">
			<span className="text-lg font-bold">{title}</span>
			<ul className="flex flex-col gap-2">
				{headings.map((heading) => (
					<li key={heading.id} className={cn(heading.depth === 3 && 'pl-4')}>
						<a
							href={`#${heading.id}`}
							className="text-sm text-muted-foreground hover:text-foreground hover:underline"
						>
							{heading.text}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
