import RootProviders from "@/components/providers/root-provider";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Finance Tracker",
  description: "Gerencie suas finanças com o Finance Tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="pt-BR"
        className="dark"
        style={{ colorScheme: "dark" }}
        suppressHydrationWarning
        cz-shortcut-listen="true"
      >
        <body className={`${poppins.className} antialiased`}>
          <RootProviders>{children}</RootProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}
