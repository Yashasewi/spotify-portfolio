import { SpotifyApi } from "@/utils/SpotifyApi";
import { getAuthSession } from "@/utils/auth";
import {
    artistToString,
    dateToYear,
    millisecondsToMinutes,
    truncate,
} from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";

interface pageProps {
    params: {
        playlistId: string;
    };
}
export default async function Page({ params }: pageProps) {
    const session = await getAuthSession();

    const spotifyApi = new SpotifyApi(session!.accessToken);
    spotifyApi.setAccessToken(session!.accessToken);
    const playlistData = await spotifyApi.getPlaylistTracks(params.playlistId);
    if (playlistData.tracks.items.length === 0) {
        return (
            <div className="flex flex-col min-w-full items-center justify-center  text-center  p-12 gap-x-10">
                <div className="flex justify-center items-center">
                    <p>
                        <span className="text-green-500 font-semibold">
                            {playlistData.name}
                        </span>{" "}
                        is empty
                    </p>
                </div>
            </div>
        );
    }

    // console.log(playlistData.tracks.items);

    return (
        <div className="flex min-w-full items-center justify-center  text-center  p-12 gap-x-10   ">
            <div className=" h-full  w-[35%]  flex justify-center items-center overflow-hidden ">
                <header className="flex flex-col items-center py-6 gap-y-2 fixed top-[20%]">
                    <Image
                        className="rounded-full aspect-square"
                        src={
                            playlistData.images[0].url ||
                            "https://wallpapercave.com/wp/wp9403167.jpg"
                        }
                        alt="Profile Picture"
                        width={160}
                        height={160}
                    />
                    <a
                        target="_blank"
                        href={playlistData.external_urls.spotify}
                        className="transition-colors hover:text-green-500"
                    >
                        <h1 className=" mt-2 font-semibold transition-colors text-3xl opacity-90 hover:text-green-500">
                            {truncate(playlistData.name, 30)}
                        </h1>
                    </a>
                    <p className="text-sm text-gray-300 opacity-70 max-w-[75%]">
                        {truncate(playlistData.description, 90)}
                    </p>
                    <div className="flex justify-center mt-5 text-center gap-x-6 uppercase ">
                        <div>
                            <span className="text-lg text-green-500 font-medium ">
                                {playlistData.followers.total || 0}
                            </span>
                            <p className="text-xs  text-gray-400">Followers</p>
                        </div>
                        <div>
                            <span className="text-lg text-green-500 font-medium ">
                                {playlistData.tracks.total || 0}
                            </span>
                            <p className="text-xs text-gray-400">Tracks</p>
                        </div>
                        <div>
                            <span className="text-lg text-green-500 font-medium ">
                                {playlistData.collaborative ? "Yes" : "No"}
                            </span>
                            <p className="text-xs text-gray-400">
                                collaborative
                            </p>
                        </div>
                    </div>
                </header>
            </div>
            <div className="basis-2/3 flex flex-col ">
                <div className="flex flex-col gap-y-5 mt-6 ">
                    {playlistData.tracks.items.map((track: any) => (
                        <Link
                            href={`/tracks/${track?.track?.id}`}
                            key={track.id}
                            className="flex items-center gap-x-7 font-medium hover:text-green-500"
                        >
                            <Image
                                className=" aspect-square"
                                src={
                                    track.track?.album?.images[0]?.url ||
                                    "https://wallpapercave.com/wp/wp9403167.jpg"
                                }
                                alt="Artist Image"
                                width={50}
                                height={50}
                            />
                            <div className="flex justify-between w-[100%]">
                                <div>
                                    <h3 className="text-lg font-medium text-left">
                                        {truncate(track.track?.name, 35)}
                                    </h3>
                                    <p className="text-sm text-gray-300 opacity-70">
                                        <span className="mr-2">
                                            {truncate(
                                                artistToString(
                                                    track.track?.artists
                                                ),
                                                45
                                            )}{" "}
                                        </span>
                                        {"·"}{" "}
                                        <span className="ml-2 ">
                                            {truncate(
                                                track.track?.album.name,
                                                45
                                            )}
                                        </span>
                                    </p>
                                </div>
                                <p className="text-sm text-gray-300 opacity-70 mr-3">
                                    {dateToYear(track.added_at)} {"·"}{" "}
                                    {millisecondsToMinutes(
                                        track?.track?.duration_ms
                                    )}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
