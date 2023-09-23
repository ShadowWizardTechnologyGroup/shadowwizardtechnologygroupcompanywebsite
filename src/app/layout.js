import './globals.css'

export const metadata = {
  title: 'Shadow Wizard Technology Group',
  description: 'Magical solutions for your wicked problems',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
