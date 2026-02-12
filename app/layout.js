import { Mona_Sans } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import { Toaster } from "@/components/ui/sonner";


const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "VoxHire AI Agent",
  description: "An AI-powered platform for preparing for mock interviews",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={` ${monaSans.className} antialiased pattern`}
      >
        <Provider>
             {children}
             <Toaster/>
        </Provider> 
      </body>
    </html>
  );
}
