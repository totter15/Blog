import { getPostBySlug, getPosts } from '@/lib/cms/service';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
	const posts = await getPosts();
	return posts.map((post) => ({
		slug: post.slug,
	}));
}

export default async function PostDetail({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const post = await getPostBySlug(slug);
	if (!post) {
		return notFound();
	}

	return (
		<article className="max-w-4xl mx-auto px-4 py-8">
			{/* 뒤로가기 버튼 */}
			<Link
				href="/posts"
				className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 mb-8 transition-colors"
			>
				<ArrowLeft className="w-4 h-4" />
				<span>목록으로</span>
			</Link>

			{/* 헤더 */}
			<header className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-800">
				{/* 카테고리 */}
				<div className="mb-4">
					<span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-sm font-medium">
						{post.category}
					</span>
				</div>

				{/* 제목 */}
				<h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
					{post.title}
				</h1>

				{/* 설명 */}
				{post.description && (
					<p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
						{post.description}
					</p>
				)}

				{/* 메타 정보 */}
				<div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
					<time dateTime={post.date}>
						{new Date(post.date).toLocaleDateString('ko-KR', {
							year: 'numeric',
							month: 'long',
							day: 'numeric',
						})}
					</time>

					{/* 태그 */}
					{post.tags && post.tags.length > 0 && (
						<>
							<span>·</span>
							<div className="flex flex-wrap gap-2">
								{post.tags.map((tag) => (
									<span
										key={tag}
										className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs"
									>
										#{tag}
									</span>
								))}
							</div>
						</>
					)}
				</div>
			</header>

			{/* 본문 콘텐츠 */}
			<div
				className="prose"
				dangerouslySetInnerHTML={{ __html: post.content }}
			/>
		</article>
	);
}
