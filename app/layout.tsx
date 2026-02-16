import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "../styles/globals.scss";
import { ReduxProvider } from "../redux/provider";
import ThemeRegistry from "../components/common/ThemeRegistry/ThemeRegistry";
import Layout from "../components/common/Layout/Layout";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "Find Developer",
  description: "Find your teammate with finddeveloper.net",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ReduxProvider>
          <ThemeRegistry>
            <Layout>
              {children}
            </Layout>
          </ThemeRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
