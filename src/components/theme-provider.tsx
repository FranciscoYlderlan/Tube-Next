'use client';

import { ThemeProviderProps } from 'next-themes';
import dynamic from 'next/dynamic';
import * as React from 'react';

const DynamicThemeProvider = dynamic(
  () => import('next-themes').then((mod) => mod.ThemeProvider),
  { ssr: false }
);

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <DynamicThemeProvider {...props}>{children}</DynamicThemeProvider>;
}
