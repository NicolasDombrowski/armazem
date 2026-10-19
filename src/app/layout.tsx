"use client";
import "./globals.css";
import Sidebar from "./components/sidebar";

export default function RootLayout({
        children,
}: Readonly<{
        children: React.ReactNode;
}>) {
        return (
                <html lang="en">
                        <body>
                                <Sidebar />
                                <div className="content">
                                        {children}
                                </div>
                        </body>
                </html>
        );
}
