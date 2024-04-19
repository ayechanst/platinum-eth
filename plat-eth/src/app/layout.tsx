import Link from "next/link";
import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header className="text-center">
      <div>
        <Link href="/">
          <h1 className="text-3xl bg-cyan-500 text-cyan-100 p-8 mt-2 mb-6 rounded-md font-bold">
            Platinum Ethereum
          </h1>
        </Link>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-600 mt-6 py-6 text-center text-slate-500">
        <h3>Developed by Aye Chan</h3>
      </div>
    </footer>
  );

  return (
    <html>
      <head />
      <body className="bg-cyan-700">
        <div className="mx-auto max-w-2xl">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
