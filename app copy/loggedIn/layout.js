import { Inter } from 'next/font/google'

const inter = Inter({ 
  weight: ['400','500','600','700','800'],
  style:['normal'],
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Logged In | Dunia ',
  description: 'Created by Howard Otuya',
} 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
 