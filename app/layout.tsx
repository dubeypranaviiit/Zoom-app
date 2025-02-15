import type { Metadata } from "next";
import {  Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
// import { ClerkProvider } from "@clerk/nextjs";
import {ClerkProvider} from '@clerk/nextjs'
export const metadata: Metadata = {
  title: "Zoom",
  description: "Meeting app generated by  Pranav ",
};
const inter = Inter({subsets:["latin"]})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
            <ClerkProvider
        appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "/icons/yoom-logo.svg",
          },
          variables: {
            colorText: "#fff",
            colorPrimary: "#0E78F9",
            colorBackground: "#1c1f2e",
            colorInputBackground: "#252A41",
            colorInputText: "#fff",
          },
        }}
      > 
        <body className={`${inter.className}  bg-dark-2`}>
     
          {children}
          <Toaster/>
        </body>
      </ClerkProvider>
    </html>
  
   
  );
}
