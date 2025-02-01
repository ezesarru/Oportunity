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
      <body className="">
        <div className="border-2 border-red-500 my-[5%] w-[60%] mx-auto flex justify-center">
          <Topbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
