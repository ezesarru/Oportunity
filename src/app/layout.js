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
      <body>
        <div className="border-4 border-red-500 flex flex-row justify-between my-[5%] w-[55%] mx-auto">
          <Sidebar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
