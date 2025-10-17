import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jai Samyukth - Software Architect & Founder',
  description: 'Founder and product architect building intelligent software at the intersection of AI, system design, and minimalist user experiences. Co-founder of Genrec AI.',
  keywords: [
    'Software Architect',
    'Tech Founder', 
    'Product Architecture',
    'AI Systems',
    'Full-Stack Development',
    'System Design',
    'Startup Founder',
    'Jai Samyukth',
    'Genrec AI',
    'Tabble'
  ],
  authors: [{ name: 'Jai Samyukth', url: 'https://jaisamyukth.com' }],
  creator: 'Jai Samyukth',
  publisher: 'Jai Samyukth',
  metadataBase: new URL('https://jaisamyukth.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Jai Samyukth - Software Architect & Founder',
    description: 'Building intelligent software that solves real-world problems. Co-founder of Genrec AI and Founder of Tabble.',
    type: 'website',
    url: 'https://jaisamyukth.com',
    siteName: 'Jai Samyukth Portfolio',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jai Samyukth - Software Architect & Founder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jai Samyukth - Software Architect & Founder',
    description: 'Building intelligent software at the intersection of AI and elegant design',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jai Samyukth',
    jobTitle: 'Software Architect & Founder',
    description: 'Founder and product architect building intelligent software solutions',
    email: 'jaisamyukth@gmail.com',
    url: 'https://jaisamyukth.com',
    image: 'https://jaisamyukth.com/profile.jpg',
    sameAs: [
      'https://linkedin.com/in/jaisamyukth',
      'https://twitter.com/jaisamyukth',
      'https://github.com/jaisamyukth'
    ],
    knowsAbout: [
      'Software Architecture',
      'AI Systems',
      'Product Architecture',
      'Full-Stack Development',
      'System Design',
      'Startup Leadership'
    ],
    worksFor: [
      {
        '@type': 'Organization',
        name: 'Genrec AI',
        description: 'Privacy-first AI-powered solutions',
        url: 'https://genrec.ai'
      },
      {
        '@type': 'Organization',
        name: 'Tabble',
        description: 'Ultra-luxury dining and hotel management platform',
        url: 'https://tabble.com'
      }
    ]
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}