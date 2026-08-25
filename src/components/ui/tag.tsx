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
        'inline-flex items-center justify-center rounded-full px-3 py-1.5 text-base font-semibold whitespace-nowrap transition-colors',
        selected
          ? 'bg-primary text-primary-foreground'
          : 'bg-muted text-muted-foreground hover:text-foreground',
        className
      )}
      {...props}
    />
  );
}

export { Tag };
