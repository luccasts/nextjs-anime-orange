import './globals.css'

export const metadata = {
  title: 'Anime Brand',
  description: 'Assistir animes online',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
