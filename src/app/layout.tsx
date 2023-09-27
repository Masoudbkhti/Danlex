import './globals.css'
import type { Metadata } from 'next'
import {Vazirmatn} from "next/font/google";
import Menu from '../components/Menu'
import ClientProviderTheme from "@/app/ClientProviderTheme.js";
import ClientProvider from "@/app/ClientProvider"
import NextTopLoader from 'nextjs-toploader';


const inter = Vazirmatn({ subsets: ['arabic'] });

export const metadata: Metadata = {
  title: 'ابزارآلات صنعتی دنلکس',
  description: 'تولیدکننده انواع ابزارآلات برقی، شارژی، بادی و بنزینی',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

  <html lang="fa">
  <ClientProviderTheme>

  <body className={inter.className}>
  <ClientProvider>

    <NextTopLoader />

  <Menu/>

  {children}
  </ClientProvider>

  </body>
  </ClientProviderTheme>


  </html>
  )
}
