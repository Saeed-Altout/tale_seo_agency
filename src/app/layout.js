import "./globals.css";
import { Navbar } from "@/components";
import { ContextProvider } from "@/contexts/ContextProvider";

export const metadata = {
  title: "tale_seo_agency",
  description: `The Next Generation Payment Method. Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ContextProvider>
        <body className="overflow-x-hidden font-poppins">
          <header>
            <Navbar />
          </header>
          {children}
        </body>
      </ContextProvider>
    </html>
  );
}
