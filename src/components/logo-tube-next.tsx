import { Tv } from 'lucide-react';

import { slackey } from '@/app/layout';

export default function LogoTubeNext() {
  return (
    <div className={`${slackey.className} flex text-2xl`}>
      <span>T</span>
      <div className="relative flex text-primary">
        <Tv strokeWidth={4} className="h-7 w-7" />
        <span className="absolute left-[7px] top-0.5 text-lg">u</span>
      </div>
      <span>beNext</span>
    </div>
  );
}
