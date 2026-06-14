import type { Metadata } from 'next';
import { Righteous } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import StoreProvider from '@/providers/StoreProvider';
import { ErrorBoundary } from '@/components/ErrorState/ErrorState';

const righteous = Righteous({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-righteous',
  display: 'swap',
});

const rufina = localFont({
  src: [
    {
      path: '../public/fonts/Rufina/Rufina-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Rufina/Rufina-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-rufina',
  display: 'swap',
});

const rubikVinyl = localFont({
  src: '../public/fonts/Rubik_Vinyl/RubikVinyl-Regular.ttf',
  weight: '400',
  style: 'normal',
  variable: '--font-rubik-vinyl',
  display: 'swap',
});

import SiteLoader from '@/components/Loader/SiteLoader';

export const metadata: Metadata = {
  title: 'Simi | Product & UX Designer Portfolio',
  description:
    'Explore the UX/UI designs, digital products, and product strategy of Simi.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${righteous.variable} ${rufina.variable} ${rubikVinyl.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#030303] overflow-x-hidden">
        <SiteLoader />
        <StoreProvider>
          <ErrorBoundary>{children}</ErrorBoundary>
        </StoreProvider>
      </body>
    </html>
  );
}
