import { Footer } from './components/sections/Footer/Footer'
import  Header from './components/sections/Header/Header'
import './globals.css'

export const metadata = {
  title: 'Insula Media',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body  >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
