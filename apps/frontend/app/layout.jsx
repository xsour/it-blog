import "./globals.css";

export const metadata = {
  title: "IT Blog",
  description: "SEO-ready IT blog starter on Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
