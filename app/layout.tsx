import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Visual Art Style',
  description: 'Discover visual art styles that match your content, medium, and desired mood.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
