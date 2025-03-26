
export const metadata = {
  title: "Alfarhaankhan",
  description: "Alfarhaan's Magus Codex",
  //favicon: '/favicon'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
