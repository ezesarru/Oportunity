import "./globals.css";

import Footer from "../components/Footer";
import Topbar from "../components/Topbar";

export const metadata = {
  title: "Ezequiel Sarrugeri",
  description: "By EzeSarru",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="max-w-screen-sm mx-auto mt-[2%]">
        <div className="mt-[1%] mb-[4%]">
          <Topbar />
        </div>
        <div className="border-2 border-red-500 max-w-3xl mx-auto flex justify-center">
          {children}
        </div>
        <div className="mt-[6%] mx-auto max-w-3xl">
          <Footer />
        </div>
      </body>
    </html>
  );
}
