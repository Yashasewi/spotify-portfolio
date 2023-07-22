import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export async function refreshAccessToken(token: any) {
    const params = new URLSearchParams();
    params.append("grant_type", "refresh_token");
    params.append("refresh_token", token.refreshToken);
    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            Authorization:
                "Basic " +
                Buffer.from(
                    process.env.SPOTIFY_CLIENT_ID +
                        ":" +
                        process.env.SPOTIFY_CLIENT_SECRET
                ).toString("base64"),
        },
        body: params,
    });

    //  1689760004851
    //  1689763425 + 3600 = 1689767025
    const data = await response.json();
    // console.log("response from refresh token", data);
    return {
        ...token,
        accessToken: data.access_token,
        accessTokenExpires: Date.now() / 1000 + (data.expires_in as number),
    };
}

export async function getSpotifyProfile(accessToken: string) {
    const res = await fetch("https://api.spotify.com/v1/me", {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return await res.json();
}

export const millisecondsToMinutes = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${+seconds < 10 ? "0" : ""}${seconds}`;
};

export const dateToYear = (date: string) => {
    return new Date(date).getFullYear();
};

export const artistToString = (artists: any[]) => {
    return artists.map((artist) => artist.name).join(" , ");
};

export const truncate = (str: string, n: number = 30) => {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
};

export function getLastPlayedTime(date: string | Date): string {
    const currentDate = new Date();
    const parsedDate = typeof date === "string" ? new Date(date) : date;
    const timeDifference = currentDate.getTime() - parsedDate.getTime();
    const millisecondsInHour = 1000 * 60 * 60;
    const millisecondsInDay = millisecondsInHour * 24;

    if (timeDifference < millisecondsInDay) {
        // Less than 24 hours
        const hours = Math.floor(timeDifference / millisecondsInHour);
        return hours + " hours ago";
    } else {
        // More than 24 hours
        const days = Math.floor(timeDifference / millisecondsInDay);
        return days + " days ago";
    }
}
