'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import * as React from 'react';

import { Button } from '@/components/ui/button';

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  function handleChangeTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <Button
      className="rounded-full p-2.5 transition-none"
      variant={'outline'}
      onClick={handleChangeTheme}
    >
      {theme === 'dark' || theme === undefined ? (
        <Sun size={16} className="text-foreground" />
      ) : (
        <Moon size={16} className="text-foreground" />
      )}
    </Button>
  );
}
