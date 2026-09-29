import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ThemeProvider } from '@/components/providers/ThemeProvider'

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
    display: 'swap',
})

export const viewport: Viewport = {
    themeColor: '#000000',
    width: 'device-width',
    initialScale: 1,
}

export const metadata: Metadata = {
    metadataBase: new URL('https://cloudvexa.in'),

    title: {
        default:
            'Cloudvexa — Architecting Intelligent, Secure & Scalable Digital Frontiers',
        template: '%s | Cloudvexa',
    },

    description:
        'Cloudvexa is an enterprise AI, SaaS & digital transformation company. We build intelligent cloud systems, autonomous RPA pipelines, and secure LLM infrastructure for modern businesses.',

    keywords: [
        'AI engineering',
        'LLM infrastructure',
        'cloud migration',
        'SaaS modernization',
        'enterprise security',
        'RPA automation',
        'digital transformation',
        'Cloudvexa',
    ],

    authors: [{ name: 'Cloudvexa' }],
    creator: 'Cloudvexa Technologies Pvt. Ltd.',

    openGraph: {
        title: 'Cloudvexa — Enterprise AI & Cloud Platform',
        description:
            'Transform your enterprise with AI/ML infrastructure, resilient cloud systems, and high-velocity SaaS engineering — built for scale.',
        url: 'https://cloudvexa.in',
        siteName: 'Cloudvexa',
        locale: 'en_US',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Cloudvexa — Enterprise AI Platform',
        description:
            'AI infrastructure, cloud migration, SaaS modernization. Built for enterprise scale.',
        creator: '@cloudvexa',
    },

    robots: {
        index: true,
        follow: true,
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={inter.variable}
        >
            <body className="font-sans antialiased bg-background text-foreground">
                <ThemeProvider>
                    <div className="min-h-screen flex flex-col">
                        <Header />

                        <main className="flex-1 pt-20">
                            {children}
                        </main>

                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}