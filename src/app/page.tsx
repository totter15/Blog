import Link from 'next/link';

const NAV_LINKS = [
  { label: 'POST', href: '/posts' },
  { label: 'PROJECT', href: '/project' },
  { label: 'RESUME', href: '/resume' },
];

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/Jina-00' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/%EC%A7%84%EC%95%84-%EC%B2%9C-1135b6394/',
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col pb-[4vh]">
      <div className="flex flex-1 flex-col justify-center">
        <h1 className="-mt-6 text-[clamp(1.75rem,8vw,3.5rem)] font-medium leading-[1.15] tracking-tight md:-mt-12 md:text-[clamp(1.5rem,3vw_+_4vh,6rem)]">
          안녕하세요
          <br />
          프론트엔드 개발자
          <br />
          천진아입니다.
        </h1>
      </div>

      <div className="flex  gap-8 flex-row items-end justify-between sm:gap-0">
        <nav className="flex flex-col gap-2 text-[clamp(1.1rem,5.5vw,1.75rem)] font-medium leading-tight sm:gap-3 md:text-[clamp(1.2rem,3.5vh,3rem)]">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="underline underline-offset-6 transition-colors hover:text-brand-blue-text"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-1 text-[clamp(0.9rem,3.5vw,1.25rem)] font-semibold items-end md:text-[clamp(1rem,2.4vh,2rem)]">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-5 transition-colors hover:text-brand-green"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
