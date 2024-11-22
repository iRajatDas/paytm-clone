import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { inter, sfPro } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "PayTM - Building blocks for your Next.js project",
  description:
    "PayTM is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
  metadataBase: new URL("https://paytm.dev"),
  themeColor: "#FFF",
};

export default async function RootLawyout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          sfPro.variable,
          inter.variable,
          "flex flex-col overscroll-none  font-sans antialiased ",
        )}
      >
        {/* <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" /> */}
        <Suspense fallback="...">
          <Nav />
        </Suspense>
        <main className="flex min-h-screen w-full flex-1 flex-col">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
