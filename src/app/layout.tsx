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
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <title>Spotify Stats</title>
            <meta name="title" content="Spotify Stats" />
            <meta
                name="description"
                content="A web app for visualizing personalized Spotify data built with React, Express, and the Spotify API "
            />

            <meta property="og:type" content="website" />
            <meta
                property="og:url"
                content="https://spotify.yashasewi.eu.org/"
            />
            <meta property="og:title" content="Spotify Stats" />
            <meta
                property="og:description"
                content="A web app for visualizing personalized Spotify data built with React, Express, and the Spotify API "
            />
            <meta
                property="og:image"
                content="https://metatags.io/images/meta-tags.png"
            />

            <meta property="twitter:card" content="summary_large_image" />
            <meta
                property="twitter:url"
                content="https://spotify.yashasewi.eu.org/"
            />
            <meta property="twitter:title" content="Spotify Stats" />
            <meta
                property="twitter:description"
                content="A web app for visualizing personalized Spotify data built with React, Express, and the Spotify API "
            />
            <meta
                property="twitter:image"
                content="https://metatags.io/images/meta-tags.png"
            />
            <body className={rubik.className}>
                <div>{children}</div>
            </body>
        </html>
    );
}
