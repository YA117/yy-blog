import "./globals.css";

import { Inter } from "next/font/google";
import { themeEffect } from "./theme-effect";
import { Analytics } from "./analytics";
import { Header } from "./header";
import { Footer } from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yusuf A Yusuf",
  description: "Yusuf A Yusuf",
  openGraph: {
    title: "Yusuf A  Yusuf",
    description: "Yusuf A Yusuf",
    url: "https://yyusuf.com",
    siteName: "Yusuf A Yusuf",
  },
  twitter: {
    card: "summary_large_image",
    site: "@wrongyusuf",
    creator: "@wrongyusuf",
  },
  themeColor: "transparent",
  metadataBase: new URL("https://yyusuf.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} antialiased`}
      suppressHydrationWarning={true}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${themeEffect.toString()})();`,
          }}
        />
      </head>

      <body className="dark:text-gray-100 max-w-2xl m-auto">
        <main className="p-6 pt-3 md:pt-6 min-h-screen">
          <Header />
          {children}
        </main>

        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
