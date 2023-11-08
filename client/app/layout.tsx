import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'

const inter = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mrc Uni Members',
  description: 'uni members',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
      
    </html>
  )
}