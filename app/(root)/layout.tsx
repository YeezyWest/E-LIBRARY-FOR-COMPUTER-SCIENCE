import SideNav from '@app/components/side-nav';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@app/components/header';
import HeaderMobile from '@app/components/header-mobile';
import PageWrapper from '@app/components/page-wrapper';
import MarginWidthWrapper from '@app/components/margin-width-wrapper';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Computer science library',
  description: 'coming soon',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-white ${inter.className}`}>
        <div className="flex">
          <SideNav />
          <main className="flex-1">
            <MarginWidthWrapper>
              <Header />
              <HeaderMobile />
              <PageWrapper>{children}</PageWrapper>
            </MarginWidthWrapper>
          </main>
        </div>
      </body>
    </html>
  );
}