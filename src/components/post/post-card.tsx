import { PostSummary } from '@/lib/cms/types';
import { PostThumbnail } from '@/components/post/post-thumbnail';

const PostCard = ({ post }: { post: PostSummary }) => {
  return (
    <div className="flex flex-col gap-2 sm:gap-4 rounded-[20px] border border-border bg-card p-2 shadow-[0_4px_16px_rgba(2,4,15,0.06)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
      <PostThumbnail />
      <div className="flex flex-col gap-0.5 sm:gap-2 px-2 pb-2">
        <h3 className="line-clamp-2 text-xl sm:text-2xl text-brand-card-foreground font-bold">
          {post.title}
        </h3>
        <p className="line-clamp-3 text-sm sm:text-base font-medium text-brand-card-foreground">
          {post.description}
        </p>
        <span className="self-end text-[12px] sm:text-sm font-medium text-brand-card-foreground">
          {post.date}
        </span>
      </div>
    </div>
  );
};

export default PostCard;
