import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider" // Note: path is relative to src

export const metadata: Metadata = {
  title: 'GoldenPocket',
  description: 'Best DEX trading journal',
  generator: 'merdussss',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}