"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import { CacheProvider } from  "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    {

    }
         <head>
         </head>
       <body>
         <ChakraProvider>{children}</ChakraProvider>
       </body>

    </html>
  )
}
