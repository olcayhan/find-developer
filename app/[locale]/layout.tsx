import type { Metadata } from "next";
import "../globals.css";
import "../../styles/globals.scss";
import { ReduxProvider } from "../../redux/provider";
import ThemeRegistry from "../../components/common/ThemeRegistry/ThemeRegistry";
import Layout from "../../components/common/Layout/Layout";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export const metadata: Metadata = {
  title: "Find Developer",
  description: "Find your teammate with finddeveloper.net",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ReduxProvider>
            <ThemeRegistry>
              <Layout>
                {children}
              </Layout>
            </ThemeRegistry>
          </ReduxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
