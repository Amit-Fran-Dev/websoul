import type { Metadata } from "next";
// import localFont from "next/font/local";
import "@/styles/globals.css";
import SmoothScrolling from "@/lib/Lenis";
import { DM_Sans } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { PaymentProvider } from "@/contexts/paymentProvider";
import { UserProvider } from "@auth0/nextjs-auth0/client";
// import Nav from "@/components/comp/Nav";
// import Footer from "@/components/comp/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const dmSans = DM_Sans({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(dmSans.className, "md:pt-50 bg-white antialiased")}
      >
        <UserProvider>
          <PaymentProvider>
            <SmoothScrolling>{children}</SmoothScrolling>
          </PaymentProvider>
        </UserProvider>
      </body>
    </html>
  );
}
