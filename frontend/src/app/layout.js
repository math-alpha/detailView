import localFont from 'next/font/local';
import "@/styles/globals.css";

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist',
});

export const metadata = {
  title: 'Online Exam App',
  description: 'An MVP for an online exam application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geistSans.variable}>{children}</body>
    </html>
  );
}
