'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import { CursorProvider } from '../components/cursor-provider';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Ashkan Yazdi Zadeh | Portfolio</title>
        <meta
          name="description"
          content="Personal portfolio of Ashkan Yazdi Zadeh, Full Stack Developer & Builder"
        />
        <Script
          src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={inter.className}>
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
