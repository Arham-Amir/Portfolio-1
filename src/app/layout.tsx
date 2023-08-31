import './globals.css'
import type { Metadata } from 'next'
import { Inter, Fira_Mono} from 'next/font/google'
import StoreProvider from '@redux/storeProvider'

const inter = Inter({ subsets: ['latin'] })
const fira = Fira_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-fira'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${fira.variable}  bg-bg-grad`}>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}
