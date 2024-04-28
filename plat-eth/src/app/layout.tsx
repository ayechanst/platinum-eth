import Link from "next/link";
import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header className="px-4 sm:px-8">
      <div>
        <Link href="/">
          <div className="bg-cyan-800 p-4 my-2 rounded-md">
            <img
              src="/images/plat-eth-logo.svg"
              alt="logo"
              className="mx-auto"
            />
          </div>
        </Link>
      </div>
    </header>
  );

  const footer = (
    <footer className="px-4 sm:px-8">
      <div className="border-t border-slate-600 mt-6 py-6 text-center text-cyan-200">
        <h3>Developed by Aye Chan, connect with me: </h3>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/ayechanst"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            GitHub
          </a>
          <a
            href="https://t.me/ayechan1000"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            Telegram
          </a>
          <a
            href="https://medium.com/@ayechansant"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            Medium
          </a>
        </div>
      </div>
    </footer>
  );

  return (
    <html>
      <head />
      <body className="bg-cyan-700">
        <div className="mx-auto max-w-3xl sm:max-w-full">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
