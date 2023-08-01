import "./globals.css";
import { Rubik } from "next/font/google";

export const rubik = Rubik({
    subsets: ["latin"],
    weight: ["400", "500"],
});
export const metadata = {
    title: "Spotify Stats",
    description:
        "A web app for visualizing personalized Spotify data built with React, Express, and the Spotify API ",
  url: "https://spotify.yashasewi.eu.org",
  image: "https://spotify.yashasewi.eu.org/spotify-stats.png",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={rubik.className}>
                <div>{children}</div>
            </body>
        </html>
    );
}
