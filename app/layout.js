import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '../Theme/theme';

export const metadata = {
  title: 'Darshan Nariya',
  description: 'This is my portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme='dark'>
          {children}
        </MantineProvider>
      </body>
    </html>
  )
}
