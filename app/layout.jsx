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
    <html lang="en" >
      <head>
        <script type="text/javascript"
          src={`http://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}></script>
      </head>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            {url === '/' ?
              <>

              </> :
              <>
                <Navbar />
              </>}
            {children}
            {url === '/' ?
              <>

              </> :
              <>
                <Footer />
              </>}
          </main>
        </Provider>
      </body>
    </html>
  )
}
