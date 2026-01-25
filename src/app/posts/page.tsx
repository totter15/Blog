import PostItem from '@/components/post/post-item';
import { getPosts } from '@/lib/cms/service';
import Link from 'next/link';

export default async function Posts() {
	const posts = await getPosts();

	return (
		<div >
			{/* 헤더 */}
			<div className="mb-12">
				<h1 className="text-4xl font-bold mb-3">POSTS</h1>
				<p className="text-gray-600 dark:text-gray-400">
					총 {posts.length}개의 글
				</p>
			</div>

			{/* 포스트 목록 */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{posts.map((post) => (
					<Link
						key={post.slug}
						href={`/posts/${post.slug}`}
						className="block group"
					>
						<PostItem post={post} />

					</Link>
				))}
			</div>

			{/* 포스트가 없을 때 */}
			{posts.length === 0 && (
				<div className="text-center py-20">
					<p className="text-gray-500 dark:text-gray-400 text-lg">
						아직 작성된 글이 없습니다.
					</p>
				</div>
			)}
		</div>
	);
}
