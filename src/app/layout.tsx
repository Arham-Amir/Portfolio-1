import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import StoreProvider from '@redux/storeProvider'

const inter = Inter({ subsets: ['latin'] })

const SFMono = localFont({
  src: './SFMono-Regular.woff2',
  display: 'swap',
  variable: '--font-SFMono'
})

export const metadata: Metadata = {
  title: 'Arham Amir',
  description: 'Computer Scientist & Full Stack Web Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${SFMono.variable} bg-bg-grad custom-scrollbarY`}>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}
