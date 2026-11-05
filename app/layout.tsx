import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Channaveerayya Portfolio',
  description: 'Full-stack developer and ML engineer portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
