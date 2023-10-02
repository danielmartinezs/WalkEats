import Navbar from "@components/Navbar"
import Provider from "@components/Provider"
import '../styles/home.css'

export const metadata = {
  title: 'WalkEats',
  description: 'Description of WalkEats',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"/>
          </div>
          <main className="app">
            <Navbar/>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
