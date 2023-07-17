import "./globals.css"

import Menu from "@/app/menu"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gray-900 antialiased">
        <Menu />
        <article className="mx-auto w-max">{children}</article>
      </body>
    </html>
  )
}
