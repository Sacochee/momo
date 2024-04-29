import type { Metadata } from 'next'
import "./globals.css"
// infos demains finir footer + faire totu les links + style vente
export const metadata: Metadata = {
  title: 'Cocosurf',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return children
}
