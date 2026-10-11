import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = { title: 'Your new site', description: 'Built with Searcheek' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
