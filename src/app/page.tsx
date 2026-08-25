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
    <div className="flex flex-1 flex-col px-20 py-18 pb-[12vh]">
      <div className="flex flex-1 flex-col justify-center">
        <h1 className="-mt-12 text-[clamp(2rem,8vh,7rem)] font-semibold leading-[1.15] tracking-tight">
          안녕하세요
          <br />
          프론트엔드 개발자
          <br />
          천진아입니다.
        </h1>
      </div>

      <div className="flex flex-row items-end justify-between">
        <nav className="flex flex-col gap-3 text-[clamp(1.2rem,4vh,3rem)] font-medium leading-tight">
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

        <div className="flex flex-col items-end gap-1 text-[clamp(1rem,2.4vh,2rem)] font-semibold">
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
