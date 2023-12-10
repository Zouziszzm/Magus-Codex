import Themecontext from "@/context/Themecontext";
import Languagecontext from "@/context/Languagecontext";
import Animatecontext from "@/context/Animatecontext";
import "./globals.css";

export const metadata = {
  title: "AlFarhaan Khan",
  description: "AlFarhaan's Portfolio",
  favicon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen">
        <Themecontext>
          <Languagecontext>
            <Animatecontext> {children}</Animatecontext>
          </Languagecontext>
        </Themecontext>
      </body>
    </html>
  );
}