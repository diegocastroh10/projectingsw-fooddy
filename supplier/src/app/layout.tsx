'use client';

// These styles apply to every route in the application
import '@fooddy/app/globals.css'
import SidebarProvider from '@fooddy/components/SidebarContext';

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
      <SidebarProvider>
        <body>{children}</body>
      </SidebarProvider>
    </html>
  )
}