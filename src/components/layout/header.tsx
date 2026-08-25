'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';
import { useMounted } from '@/lib/use-mounted';
import { useScrolled } from '@/lib/use-scrolled';

const NAV_ITEMS = [
  { label: 'POST', href: '/posts' },
  { label: 'PROJECT', href: '/project' },
  { label: 'RESUME', href: '/resume' },
];

export function Header() {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();
  const scrolled = useScrolled();

  const logoSrc =
    mounted && resolvedTheme === 'dark' ? '/logo-white.svg' : '/logo-black.svg';

  return (
    <header
      className={cn(
        'sticky top-0 z-10 flex flex-row items-center justify-between gap-4 px-16 py-6 transition-[background-color,box-shadow,border-color] duration-200',
        scrolled
          ? 'border-b border-black/[0.06] bg-background/60 shadow-[0_4px_16px_rgba(0,0,0,0.09)] backdrop-blur-md dark:border-white/[0.06]'
          : 'border-b border-transparent bg-background'
      )}
    >
      <Link href="/">
        <Image
          src={logoSrc}
          alt="JINA HOME"
          width={76}
          height={43}
          className="h-auto w-[76px]"
          priority
        />
      </Link>
      <div className="flex flex-row items-center gap-8">
        <nav className="flex flex-row items-center gap-6 text-xl font-semibold">
          {NAV_ITEMS.map((item) => {
            const active = pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'underline-offset-4 hover:underline',
                  active && 'underline'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
