import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className='bg-[#14181c]'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
