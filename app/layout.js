import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '../Theme/theme';

export const metadata = {
  title: 'Darshan Nariya',
  description: 'Experienced Full Stack Developer in NodeJS, Laravel, React and React Native. I have a passion for building and designing web applications.',
  image: 'https://iamdarshan.dev/DarshanNariyaMobile.png',
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
