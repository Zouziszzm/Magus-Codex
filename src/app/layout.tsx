import React from 'react';
import './globals.css';
import { ThemeProvider } from '../context/ThemeContext';
export const metadata = {
  title: 'AlFarhaan Khan (Static )',
  description: "AlFarhaan's Portfolio site",
  // favicon: "/favicon.ico",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
