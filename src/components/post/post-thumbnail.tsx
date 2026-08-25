import { cn } from '@/lib/utils';

export function PostThumbnail({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'aspect-video w-full rounded-[18px] bg-gradient-to-br from-brand-blue via-brand-lightgrey to-brand-green',
        className
      )}
    />
  );
}
