import Themecontext from "@/context/Themecontext";
import Languagecontext from "@/context/Languagecontext";
import Animatecontext from "@/context/Animatecontext";
import Wpagecontext from "@/context/Wpagecontext";
import "./globals.css";

export const metadata = {
  title: "AlFarhaan Khan (Static )",
  description: "AlFarhaan's Portfolio site",
  favicon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen">
        <Themecontext>
          <Languagecontext>
            <Animatecontext>
              <Wpagecontext>{children}</Wpagecontext>
            </Animatecontext>
          </Languagecontext>
        </Themecontext>
      </body>
    </html>
  );
}
