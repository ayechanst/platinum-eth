export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div>
        <h1>Platinum Ethereum</h1>
        <br />
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div>
        <br />
        <h3>Developed by Aye Chan</h3>
      </div>
    </footer>
  );

  return (
    <html>
      <head />
      <body>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
