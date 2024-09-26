import "./globals.css";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
import "@mantine/core/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { theme } from "../Theme/theme";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Darshan Nariya",
   description:
      "Experienced Full Stack Developer in NodeJS, Laravel, React and React Native. I have a passion for building and designing web applications.",
   applicationName: "My Portfolio",
   authors: [{ name: "Darshan Nariya", url: "https://iamdarshan.dev" }],
   keywords: [
      "Darshan Nariya",
      "Full Stack Developer",
      "NodeJS",
      "Laravel",
      "React",
      "React Native",
   ],
   colorScheme: "dark",
   openGraph: {
      type: "website",
      title: "Darshan Nariya",
      description:
         "Experienced Full Stack Developer in NodeJS, Laravel, React and React Native. I have a passion for building and designing web applications.",
      url: "https://iamdarshan.dev",
      images: "https://iamdarshan.dev/WebsitePreview.png",
   },
   robots: "index, follow",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <head>
            <ColorSchemeScript />
         </head>
         <body>
            <MantineProvider theme={theme} defaultColorScheme="dark">
               {children}
            </MantineProvider>
         </body>
      </html>
   );
}
