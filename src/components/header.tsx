import { Suspense } from 'react';

import { LogoTubeNext } from './logo-tube-next';
import { ModeToggle } from './mode-theme-toggle';
import { SearchBar } from './search-bar';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

export function Header() {
  return (
    <header className="sticky left-0 right-0 top-0 z-50 mb-6 flex items-center justify-between gap-6 border-b border-muted px-8 py-3 backdrop-blur">
      <div className="flex gap-6">
        <LogoTubeNext />
        <Separator orientation="vertical" className="h-9" />
      </div>
      <Suspense>
        <SearchBar />
      </Suspense>
      <div className="flex items-center gap-6">
        <Separator orientation="vertical" className="h-9" />
        <ModeToggle />
        <Button type="button" size={'lg'} className="rounded font-bold">
          Login
        </Button>
      </div>
    </header>
  );
}
