// app/layout.tsx
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Alejandro Guzmán | Developer",
  description:
    "Profesional portfolio of Alejandro Guzmán, Full-Stack Developer. Specializing in React, Node.js, and modern web technologies to build dynamic and responsive applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
