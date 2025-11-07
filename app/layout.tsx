import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'ReadMAte',
  description: ' Your personal GitHub README generator',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <Head>
        <title>ReadMate – Write Stunning GitHub READMEs Instantly</title>
        <meta
          name='description'
          content='Generate beautiful GitHub README files easily with ReadMate. Customize markdown, badges, and styles instantly.'
        />
        <meta
          name='keywords'
          content='readme generator, github, markdown, gitmate, readmate'
        />
        <meta
          property='og:title'
          content='ReadMate – GitHub README Generator'
        />
        <meta
          property='og:description'
          content='Create and customize your GitHub README effortlessly.'
        />
        <meta property='og:url' content='https://readmate.dev' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='/og-image.png' />
        <link rel='canonical' href='https://readmate.dev' />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className=''>{children}</main>
      </body>
    </html>
  )
}
