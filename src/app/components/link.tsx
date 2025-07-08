import Link from 'next/link';

interface Args {
  darkMode: boolean;
}

export default function LinkList(params: Args) {
  const links = [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com' },
    { label: 'Facebook', href: 'https://www.facebook.com' },
    { label: 'Blog', href: 'https://www.blogger.com' },
  ];
  
  return (
    <ul role="list" className={params.darkMode ? "divide-y divide-neutral-800" : "divide-y divide-gray-100"}>
      {links.map(link => (
        <li key={link.href} className="flex justify-center gap-x-6 py-5">
          <Link href={link.href} className="rounded-full bg-sky-500 px-5 py-2 text-sm leading-5 font-semibold text-white hover:bg-sky-700">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
