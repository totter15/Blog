import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

function Tag({
  className,
  selected = false,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> & {
  selected?: boolean;
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="tag"
      data-selected={selected}
      className={cn(
        'inline-flex items-center justify-center rounded-full px-2.5 py-1.5 text-[12px] sm:text-sm font-medium whitespace-nowrap transition-colors',
        selected
          ? 'bg-tag-selected text-tag-selected-foreground font-semibold'
          : 'bg-tag text-tag-foreground hover:bg-tag-hover hover:text-tag-hover-foreground',
        className
      )}
      {...props}
    />
  );
}

export { Tag };
