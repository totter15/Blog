import { PostSummary } from "@/lib/cms/types";
import { Badge } from "../ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const PostItem = ({ post }: { post: PostSummary }) => {
    return (
        <Card className="relative mx-auto w-full max-w-md pt-0">
            <div className="p-4 pb-0">
                <img
                    src="https://avatar.vercel.sh/shadcn1"
                    alt="Event cover"
                    className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                /></div>
            <CardHeader className="gap-4">
                <div className="flex flex-col gap-2">
                    <CardTitle className="text-2xl font-bold">{post.title}</CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                </div>

                <div className="flex flex-row flex-wrap gap-2">
                    <Badge variant="secondary">javascript</Badge>
                    <Badge variant="secondary">typescript</Badge>
                    <Badge variant="secondary">react</Badge>
                    <Badge variant="secondary">next.js</Badge>
                    <Badge variant="secondary">tailwindcss</Badge>

                </div>
                <div className="flex flex-row justify-between mt-2">
                    <span className="text-sm font-bold dark:text-gray-400">{post.category}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                </div>
            </CardHeader>
        </Card>
    );
}

export default PostItem;