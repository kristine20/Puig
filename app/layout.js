import Headers from "./components/Header/Header";
import "./globals.css";

export const metadata = {
  title: "PUIG",
  description: "PUIG",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <body>
        <main className="w-full">
          <div className="row">
            <Headers />
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}

