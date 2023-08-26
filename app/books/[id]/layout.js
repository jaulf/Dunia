import { Inter } from 'next/font/google'

const inter = Inter({ 
  weight: ['400','500','600','700','800'],
  style:['normal'],
  subsets: ['latin'] 
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
 