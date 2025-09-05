export const metadata = {
  title: "Payung57 Site",
  description: "Website Next.js dengan App Router",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
