import Nav from "../components/Nav";
import "./globals.css";
import { Rubik } from "next/font/google";

export const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500"],
});
export const metadata = {
  title: "Spotify",
  description:
    "A web app for visualizing personalized Spotify data built with React, Express, and the Spotify API ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <div className="flex">
          <Nav />
          <div className="container p-12">{children}</div>
        </div>
      </body>
    </html>
  );
}
