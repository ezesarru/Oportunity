import "./globals.css";

import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

export const metadata = {
  title: "Oportunity",
  description: "By EzeSarru",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="border-2 border-red-500 my-[5%] w-[60%] mx-auto flex justify-center">
          <Sidebar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
