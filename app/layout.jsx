import Provider from "@components/Provider"
import '../styles/home.css'
export const metadata = {
  title: 'WalkEats',
  description: 'Description of WalkEats',
}
import FooterLogic from "@components/FooterLogic"
import NavBarLogic from "@components/NavBarLogic"
export default function RootLayout({ children }) {
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
            <NavBarLogic />
            {children}
            <FooterLogic />
          </main>
        </Provider>
      </body>
    </html>
  )
}
