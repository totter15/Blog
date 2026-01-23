import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Posts',
	description: 'Posts',
};

export default function PostsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<h1>Posts</h1>
			{children}
		</div>
	);
}