'use client';

import { useTheme } from 'next-themes';

import { Tag } from '@/components/ui/tag';
import { useMounted } from '@/lib/use-mounted';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  const isDark = mounted && resolvedTheme === 'dark';
  const nextTheme = isDark ? 'light' : 'dark';

  return (
    <Tag
      type="button"
      aria-label={`Switch to ${nextTheme} mode`}
      onClick={() => setTheme(nextTheme)}
      className={
        isDark
          ? 'bg-brand-lightgrey text-brand-primary hover:bg-brand-lightgrey hover:text-brand-primary font-semibold'
          : 'bg-brand-primary text-brand-lightgrey hover:bg-brand-primary hover:text-brand-lightgrey font-semibold'
      }
    >
      {isDark ? 'Light' : 'Dark'}
    </Tag>
  );
}
