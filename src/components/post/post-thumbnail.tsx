import { cn } from '@/lib/utils';

export function PostThumbnail({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative aspect-video w-full overflow-hidden rounded-[18px] bg-gradient-to-br from-brand-blue via-brand-lightgrey to-brand-green',
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/20 to-transparent opacity-0 backdrop-grayscale transition-opacity duration-300 ease-out [mask-image:linear-gradient(to_top,black,transparent)] group-hover:opacity-100" />
    </div>
  );
}
