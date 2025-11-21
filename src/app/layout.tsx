import { GFTDialogConsumer } from "@/components/dialogs/gft/consumer";
import { LenovoDialogConsumer } from "@/components/dialogs/lenovo/consumer";
import { SeipDialogConsumer } from "@/components/dialogs/seip/consumer";
import { SmilesDialogConsumer } from "@/components/dialogs/smiles/consumer";
import { Provider } from "@/components/ui/provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "França's Portfolio | Full Stack Developer",
  description: "Alan França - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider>
          {children}

          <SmilesDialogConsumer />
          <GFTDialogConsumer />
          <LenovoDialogConsumer />
          <SeipDialogConsumer />
        </Provider>
      </body>
    </html>
  );
}
