import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from './components/Header';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'SurgiCalm - Reduce Surgery Anxiety Through Understanding',
  description: 'Patient education platform helping reduce pre-surgical anxiety and improve clinical outcomes through video learning.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.variable}>
      <body className={`${poppins.className} antialiased`} suppressHydrationWarning>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}