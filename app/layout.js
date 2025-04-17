import "./globals.css";

export const metadata = {
  title: "PUIG",
  description: "PUIG",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

