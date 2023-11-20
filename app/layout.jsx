'use client'
import Navbar from "@components/Navbar"
import Provider from "@components/Provider"
import Footer from "@components/Footer"
import '../styles/home.css'
import { usePathname } from 'next/navigation'
export const metadata = {
  title: 'WalkEats',
  description: 'Description of WalkEats',
}
 
export default function RootLayout({ children }) {
  const url = usePathname()
 return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"/>
          </div>
          <main className="app">
          {url === '/' ? 
          <>
            
          </>: 
          <>
          <Navbar/>
          </>} 
            {children}
            {url === '/' ? 
          <>
            
          </>: 
          <>
            <Footer/>
          </>} 
          </main>
        </Provider>
      </body>
    </html>
  )
}
