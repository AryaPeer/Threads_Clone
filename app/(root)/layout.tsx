import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Twitter Clone',
  description: 'By: Arya Peer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBar />

        <main>
          <LeftSidebar />
        
          <section className="main-container">

            <div className="w-full max-w-4xl">
              {children}
            </div>

          </section>

          <RightSidebar />
        </main>

        <BottomBar />
        </body>
    </html>
  )
}
