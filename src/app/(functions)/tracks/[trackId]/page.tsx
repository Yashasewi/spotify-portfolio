import MusicAttributeItem from "@/components/MusicAttributes";
import { attributes } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import { SpotifyApi } from "@/utils/SpotifyApi";
import { getAuthSession } from "@/utils/auth";
import { millisecondsToMinutes } from "@/utils/helper";

export default async function TrackPage({
    params,
}: {
    params: { trackId: string };
}) {
    const session = await getAuthSession();

    const spotifyApi = new SpotifyApi(session!.accessToken);
    const trackRes = spotifyApi.getTrack(params.trackId);
    const audioFeaturesRes = spotifyApi.getAudioFeaturesForTrack(
        params.trackId
    );
    const [track, audioFeatures]: any = await Promise.all([
        trackRes,
        audioFeaturesRes,
    ]);

    return (
        <div className="min-w-full p-12">
            <header className="flex flex-col items-center py-6 gap-y-2">
                <Image
                    className="rounded-full"
                    src={
                        track.album?.images[0]?.url ||
                        "https://wallpapercave.com/wp/wp9403167.jpg"
                    }
                    alt="Profile Picture"
                    width={160}
                    height={160}
                />
                <a href={track.external_urls?.spotify || "/"}>
                    <h1 className=" mt-2 font-medium transition-colors text-2xl opacity-90 hover:text-green-500">
                        {track.name || "Unavailable"}
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
                    // console.log(name, audioFeatures[name] * 100);
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
