import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shawn Patoka | Front End, Back End, Full Stack Developer.",
  description: "Front end, back end, and full stack web developer in Chicago, IL. Focusing on React, NextJS, Vue, Python, TypeScript, JavaScript, HTML, CSS, Django, and Flask.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const cloudflareToken = process.env.CLOUDFLARE_TOKEN

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`} style={{ background: 'url(/img/grad_bg.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
        {children}
        <>
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token": "${cloudflareToken}", "spa": true}`}
          />
        </>
      </body>
    </html>
  );
}
