export const metadata = {
  title: "PAYUNG57 SOCIETY",
  description: "Website Next.js dengan App Router",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
        <Analytics />
      </body>
    </html>
  );
}
