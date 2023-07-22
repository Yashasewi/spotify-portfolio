import MusicAttributeItem from "@/components/MusicAttributes";
import { attributes } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import { SpotifyApi } from "@/utils/SpotifyApi";
import { getAuthSession } from "@/utils/auth";
import { millisecondsToMinutes } from "@/utils/helper";
import { AudioFeaturesData } from "@/types/types";
// const track = {
//     album: {
//         album_type: "album",
//         artists: [
//             {
//                 external_urls: {
//                     spotify:
//                         "https://open.spotify.com/artist/4yvcSjfu4PC0CYQyLy4wSq",
//                 },
//                 href: "https://api.spotify.com/v1/artists/4yvcSjfu4PC0CYQyLy4wSq",
//                 id: "4yvcSjfu4PC0CYQyLy4wSq",
//                 name: "Glass Animals",
//                 type: "artist",
//                 uri: "spotify:artist:4yvcSjfu4PC0CYQyLy4wSq",
//             },
//         ],

//         external_urls: {
//             spotify: "https://open.spotify.com/album/5bfpRtBW7RNRdsm3tRyl3R",
//         },
//         href: "https://api.spotify.com/v1/albums/5bfpRtBW7RNRdsm3tRyl3R",
//         id: "5bfpRtBW7RNRdsm3tRyl3R",
//         images: [
//             {
//                 height: 640,
//                 url: "https://i.scdn.co/image/ab67616d0000b273712701c5e263efc8726b1464",
//                 width: 640,
//             },
//             {
//                 height: 300,
//                 url: "https://i.scdn.co/image/ab67616d00001e02712701c5e263efc8726b1464",
//                 width: 300,
//             },
//             {
//                 height: 64,
//                 url: "https://i.scdn.co/image/ab67616d00004851712701c5e263efc8726b1464",
//                 width: 64,
//             },
//         ],
//         name: "Dreamland",
//         release_date: "2020-08-07",
//         release_date_precision: "day",
//         total_tracks: 16,
//         type: "album",
//         uri: "spotify:album:5bfpRtBW7RNRdsm3tRyl3R",
//     },
//     artists: [
//         {
//             external_urls: {
//                 spotify:
//                     "https://open.spotify.com/artist/4yvcSjfu4PC0CYQyLy4wSq",
//             },
//             href: "https://api.spotify.com/v1/artists/4yvcSjfu4PC0CYQyLy4wSq",
//             id: "4yvcSjfu4PC0CYQyLy4wSq",
//             name: "Glass Animals",
//             type: "artist",
//             uri: "spotify:artist:4yvcSjfu4PC0CYQyLy4wSq",
//         },
//     ],

//     disc_number: 1,
//     duration_ms: 238805,
//     explicit: false,
//     external_ids: {
//         isrc: "GBUM72000433",
//     },
//     external_urls: {
//         spotify: "https://open.spotify.com/track/3USxtqRwSYz57Ewm6wWRMp",
//     },
//     href: "https://api.spotify.com/v1/tracks/3USxtqRwSYz57Ewm6wWRMp",
//     id: "3USxtqRwSYz57Ewm6wWRMp",
//     is_local: false,
//     name: "Heat Waves",
//     popularity: 93,
//     preview_url: null,
//     track_number: 14,
//     type: "track",
//     uri: "spotify:track:3USxtqRwSYz57Ewm6wWRMp",
// };

// const audioFeatures = {
//     danceability: 0.696,
//     energy: 0.905,
//     key: 2,
//     loudness: -2.743,
//     mode: 1,
//     speechiness: 0.103,
//     acousticness: 0.011,
//     instrumentalness: 0.000905,
//     liveness: 0.302,
//     valence: 0.625,
//     tempo: 114.944,
//     type: "audio_features",
//     id: "11dFghVXANMlKmJXsNCbNl",
//     uri: "spotify:track:11dFghVXANMlKmJXsNCbNl",
//     track_href: "https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl",
//     analysis_url:
//         "https://api.spotify.com/v1/audio-analysis/11dFghVXANMlKmJXsNCbNl",
//     duration_ms: 207960,
//     time_signature: 4,
// };

// const calculateScore = (
//     audioFeatures: AudioFeaturesData
// ): { relaxed: number; positive: number; dark: number } => {
//     const { energy, tempo, valence } = audioFeatures;

//     // Calculate the scores for each category
//     const relaxedScore = (energy <= 0.5 ? 0.5 : 0) + (tempo <= 100 ? 0.5 : 0);
//     const positiveScore = (valence >= 0.5 ? 0.5 : 0) + (energy > 0.5 ? 0.5 : 0);
//     const darkScore = (valence <= 0.3 ? 0.5 : 0) + (energy <= 0.3 ? 0.5 : 0);

//     // Normalize the scores to a range of 0 to 1
//     const maxScore = Math.max(relaxedScore, positiveScore, darkScore);
//     const normalizedRelaxed = relaxedScore / maxScore;
//     const normalizedPositive = positiveScore / maxScore;
//     const normalizedDark = darkScore / maxScore;

//   return {
//       ...audioFeatures,
//         relaxed: normalizedRelaxed,
//         positive: normalizedPositive,
//         dark: normalizedDark,
//     };
// };

export default async function TrackPage({
    params,
}: {
    params: { trackId: string };
}) {
    const session = await getAuthSession();

    let spotifyApi = new SpotifyApi(session!.accessToken);
    let trackRes = spotifyApi.getTrack(params.trackId);
    const track = await trackRes;
    // console.log(track);
    let audioFeaturesRes = spotifyApi.getAudioFeaturesForTrack(params.trackId);
    const audioFeatures: any = await audioFeaturesRes;
    // console.log(audioFeatures);

    return (
        <div className="min-w-full p-12">
            <header className="flex flex-col items-center py-6 gap-y-2">
                <Image
                    className="rounded-full"
                    src={
                        track.album?.images[0].url ||
                        " https://i.scdn.co/image/ab67616d0000b273712701c5e263efc8726b1464"
                    }
                    alt="Profile Picture"
                    width={160}
                    height={160}
                />
                <a href={track.external_urls?.spotify || "/"}>
                    <h1 className=" mt-2 font-medium transition-colors text-2xl opacity-90 hover:text-green-500">
                        {track.name || "Track Name"}
                    </h1>
                </a>

                <div className="flex flex-col items-center justify-center ">
                    <p className="text-sm text-gray-300 opacity-80">
                        <span className=" ">
                            {track.artists?.map((artist: any) => {
                                return (
                                    <Link
                                        href={`/artists/${artist.id}`}
                                        key={artist.id}
                                        className="hover:text-green-600"
                                    >
                                        {artist.name}
                                        {track.artists.length > 1 && " , "}
                                    </Link>
                                );
                            })}
                        </span>
                    </p>
                    <a
                        target="_blank"
                        href={track.album?.external_urls?.spotify || "/"}
                        className="mt-3 "
                    >
                        {track.album?.name}
                    </a>
                </div>

                <div className="flex justify-center mt-5 text-center gap-x-6 uppercase ">
                    <div>
                        <span className="text-lg text-green-500 font-medium ">
                            {track.popularity || 0}
                        </span>
                        <p className="text-xs  text-gray-400">Popularity</p>
                    </div>
                    <div>
                        <span className="text-lg text-green-500 font-medium ">
                            {track.artists.length || "0"}
                        </span>
                        <p className="text-xs text-gray-400">Artists</p>
                    </div>
                    <div>
                        <span className="text-lg text-green-500 font-medium ">
                            {millisecondsToMinutes(track.duration_ms) || 0}
                        </span>
                        <p className="text-xs text-gray-400">Duration</p>
                    </div>
                </div>
                <a target="_blank" href={track.external_urls?.spotify || "/"}>
                    <button className="px-8 py-2 mt-4 bg-green-600 text-base  rounded-full hover:text-black hover:bg-green-500 ">
                        Play On Spotify
                    </button>
                </a>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 rounded-2xl">
                {attributes.map((attribute, index) => {
                    // console.log(attribute, index);
                    let name = attribute.name;
                    console.log(name, audioFeatures[name] * 100);
                    return (
                        <MusicAttributeItem
                            key={index}
                            {...attribute}
                            number={audioFeatures[name]}
                        />
                    );
                })}
            </div>
        </div>
    );
}
