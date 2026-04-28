import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ThemeProvider } from '@/components/providers/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Cloudvexa - Building Intelligent, Secure & Scalable Digital Solutions',
    description: 'Leading technology company specializing in software development, web development, QA testing, AI solutions, and network security. Transform your business with Cloudvexa.',
    keywords: 'software development, web development, QA testing, AI solutions, network security, cloud computing, digital transformation',
    authors: [{ name: 'Cloudvexa' }],
    openGraph: {
        title: 'Cloudvexa - Building Intelligent, Secure & Scalable Digital Solutions',
        description: 'Transform your business with cutting-edge technology solutions',
        url: 'https://cloudvexa.in',
        siteName: 'Cloudvexa',
        locale: 'en_US',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="dark">
            <body className={inter.className}>
                <ThemeProvider>
                    <div className="min-h-screen flex flex-col">
                        <Header />
                        <main className="flex-grow pt-20">
                            {children}
                        </main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
