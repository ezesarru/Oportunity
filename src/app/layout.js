import "./globals.css";

export const metadata = {
  title: "Oportunity",
  description: "By EzeSarru",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <div>
          <h1>Sidebar</h1>
          <h1>Footer</h1>
        </div>
      </body>
    </html>
  );
}
