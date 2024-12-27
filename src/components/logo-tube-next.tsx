import { Tv } from 'lucide-react';
import Link from 'next/link';

import { slackey } from '@/app/layout';

export function LogoTubeNext() {
  return (
    <Link
      href={'/'}
      className={`${slackey.className} my-auto flex h-fit select-none text-2xl hover:cursor-pointer`}
    >
      <span>T</span>
      <div className="relative flex text-primary">
        <Tv strokeWidth={4} className="h-7 w-7" />
        <span className="absolute left-[7px] top-0.5 text-lg">u</span>
      </div>
      <span>beNext</span>
    </Link>
  );
}
