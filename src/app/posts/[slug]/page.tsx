import { getPostBySlug, getPosts } from "@/lib/cms/service";
import { notFound } from "next/navigation";

export async function generateStaticParams() {

	const posts = await getPosts();
	return posts.map((post) => ({
		slug: post.slug,
	}));
}
export default async function PostDetail({ params }: { params: Promise<{ slug: string }> }) {
	const {slug} = await params;
	const post = await getPostBySlug(slug);
	if (!post) {
		return notFound();
	}
	return (
		<div>
			<h1>{post.title}</h1>
			<p>{post.description}</p>
			<p>{post.date}</p>
			<p>{post.tags.join(', ')}</p>
			<p>{post.category}</p>
			<div dangerouslySetInnerHTML={{ __html: post.content }} />
		</div>
	);
}
