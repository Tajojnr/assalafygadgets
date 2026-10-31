import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Assalafy Gadgets | Workstations, Laptops & Smartphones',
  description: 'Shop workstation setups, gaming laptops, and smartphones at Assalafy Gadgets.',
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-charcoal text-zinc-100 antialiased font-sans selection:bg-ash selection:text-charcoal">
        {children}
      </body>
    </html>
  );
}