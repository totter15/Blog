import { getPosts } from "@/lib/cms/service";
import Link from "next/link";

export default async function Posts() {
	const posts = await getPosts();

	return (
		<div>
			<h1>Posts</h1>
			{posts.map((post) => (
				<div key={post.slug}>
					<Link href={`/posts/${post.slug}`}>{post.title}</Link>
				</div>
			))}
		</div>
	);
}
