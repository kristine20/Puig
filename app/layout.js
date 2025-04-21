import "./globals.css";

export const metadata = {
  title: "PUIG",
  description: "PUIG",
  icons: {
    icon: "/favicon.png",
    // apple: "/apple-touch-icon.png",
    // shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

