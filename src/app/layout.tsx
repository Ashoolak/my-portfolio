'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import { CursorProvider } from '../components/cursor-provider';
import { cn } from '../lib/utils';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Ashkan Yazdi Zadeh | Full Stack Developer</title>
        <meta
          name="description"
          content="Full Stack Developer & Builder based in Vancouver, BC"
        />
        <meta
          property="og:title"
          content="Ashkan Yazdi Zadeh | Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Full Stack Developer & Builder based in Vancouver, BC"
        />
        <meta property="og:image" content="/me.png" />
        <meta property="og:url" content="https://ashkan.dev" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ashkan Yazdi Zadeh | Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Full Stack Developer & Builder based in Vancouver, BC"
        />
        <meta name="twitter:image" content="/me.png" />
        <link rel="icon" href="/me.png" />
        <Script
          src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background antialiased',
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CursorProvider>{children}</CursorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
