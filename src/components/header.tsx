import { Search } from 'lucide-react';

import LogoTubeNext from './logo-tube-next';
import { ModeToggle } from './mode-theme-toggle';
import { Button } from './ui/button';

export default function Header() {
  return (
    <header className="itens-center fixed left-0 right-0 top-0 flex justify-between border-b border-muted px-8 py-3 backdrop-blur">
      <LogoTubeNext />
      <button className="flex w-full max-w-md items-center gap-3 whitespace-nowrap rounded-full border border-muted bg-foreground/5 px-3 py-1.5 text-xs text-muted-foreground">
        <Search size={14} />
        <span>Find something ...</span>
      </button>
      <div className="flex items-center">
        <div className="ml-6 flex items-center gap-6 border-l border-muted-foreground/10 pl-6">
          <ModeToggle />
          <Button type="button" size={'lg'} className="rounded font-bold">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
}
