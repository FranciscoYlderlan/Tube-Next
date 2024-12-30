'use client';

import { Search } from 'lucide-react';
import Form from 'next/form';

import { Input } from './ui/input';

export function SearchBar() {
  return (
    <Form
      action="/"
      className="relative inline-flex w-fit max-w-md items-center justify-start gap-2 whitespace-nowrap rounded-full border border-input bg-muted/30 p-2.5 text-sm font-medium text-muted-foreground shadow-sm transition-colors transition-none hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:w-full [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
    >
      <Search size={14} />
      <Input
        id="search"
        name="search"
        className="absolute right-0 z-10 h-full w-full rounded-full border-none pl-8"
      />
    </Form>
  );
}
