import { Search } from 'lucide-react';

import { LogoTubeNext } from './logo-tube-next';
import { ModeToggle } from './mode-theme-toggle';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

export function Header() {
  return (
    <header className="sticky left-0 right-0 top-0 z-50 mb-6 flex items-center justify-between gap-6 border-b border-muted px-8 py-3 backdrop-blur">
      <div className="flex gap-6">
        <LogoTubeNext />
        <Separator orientation="vertical" className="h-9" />
      </div>
      <Button
        variant={'outline'}
        className="w-fit max-w-md justify-start rounded-full bg-muted/30 p-2.5 text-muted-foreground transition-none sm:w-full"
      >
        <Search size={14} />
        <span className="hidden sm:flex">Find something ...</span>
      </Button>
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
