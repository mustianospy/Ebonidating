import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import { SkipLink } from "@/components/ui/skip-link"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "EboniDating - Find Your Perfect Match",
  description: "Connect with like-minded individuals in our premium dating platform",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#9333ea",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="font-sans antialiased">
        <SkipLink />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}