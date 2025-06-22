import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SafeKrok",
  description: "Humanitarian Mine Clearance Dashboard",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <header className="p-2 border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
              <nav className="flex items-center justify-center gap-4 text-sm font-medium">
                <span className="text-muted-foreground">Switch Role:</span>
                <Link href="/ops-manager" className="hover:text-primary transition-colors">
                  Operations Manager
                </Link>
                <Link href="/deminer" className="hover:text-primary transition-colors">
                  Deminer
                </Link>
                <Link href="/oversight" className="hover:text-primary transition-colors">
                  Oversight Team
                </Link>
              </nav>
            </header>
            <div className="flex-1">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
