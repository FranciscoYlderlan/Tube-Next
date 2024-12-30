import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { Header } from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';

import './globals.css';

export const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

export const slackey = localFont({
  src: './fonts/Slackey-Regular.woff',
  variable: '--font-slackey',
  weight: '400 700',
});
export const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'TubeNext',
  description: 'Repositório de vídeos',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" style={{ colorScheme: 'light' }} className={'light'}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${slackey.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          themes={['light', 'dark']}
          value={{
            light: 'light',
            dark: 'dark',
          }}
          disableTransitionOnChange={false}
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
