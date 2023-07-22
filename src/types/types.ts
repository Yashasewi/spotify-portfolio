import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Key } from "react";
import { UrlObject } from "url";

export interface Artist {
    id: Key | null | undefined;
    images: { url: string | StaticImport }[];
    external_urls: { spotify: string | UrlObject };
    name: string | number;
}

export interface AudioFeaturesData {
    acousticness: number;
    analysis_url: string;
    danceability: number;
    duration_ms: number;
    energy: number;
    id: string;
    instrumentalness: number;
    key: number;
    liveness: number;
    loudness: number;
    mode: number;
    speechiness: number;
    tempo: number;
    time_signature: number;
    track_href: string;
    type: string;
    uri: string;
    valence: number;
    relaxed: number | undefined;
    dark: number | undefined;
    positive: number | undefined;
}
