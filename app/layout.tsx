import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import {  Inter } from 'next/font/google'
import '@app/styles/globals.css'



const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: 'Computer science Library',
  description: 'coming soon',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <ClerkProvider appearance={{
      elements: {
        formButtonPrimary:
          "bg-black hover:bg-slate-700 text-sm normal-case",
      },
    }}>
    <html lang="en" suppressHydrationWarning>
    <body className={`bg-background min-h-screen  antialiased ${inter.className}`}>   
      {children}</body>
    </html>
    </ClerkProvider>
  )
}
