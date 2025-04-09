import React from 'react';
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
      <body>{children}</body>
    </html>
  );
}
