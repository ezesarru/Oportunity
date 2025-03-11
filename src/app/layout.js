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
      <body className="mx-auto max-w-2xl mt-12 px-4">
        <div className="mb-[4%] animate-fadeIn">
          <Topbar />
        </div>
        <div className="">{children}</div>
        <div className="mt-[15%] animate-fadeIn">
          <Footer />
        </div>
      </body>
    </html>
  );
}
