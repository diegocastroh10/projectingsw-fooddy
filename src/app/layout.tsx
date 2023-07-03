// These styles apply to every route in the application
import '@fooddy/app/globals.css'


export const metadata = {
  title: 'Fooddy SW',
  description: 'NextJS App'
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}