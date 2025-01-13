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
        <div className="flex justify-center mt-8">
          <Sidebar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
