import { SpotifyApi } from "@/utils/SpotifyApi";
import { getAuthSession } from "@/utils/auth";
import {
    artistToString,
    millisecondsToMinutes,
    truncate,
} from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";

// * This is the code for the Top Tracks Page

async function tracks() {
    const session = await getAuthSession();

    const spotifyApi = new SpotifyApi(session!.accessToken);

    const topTracks = spotifyApi.getMyTopTracks({
        limit: 50,
        time_range: "long_term",
    });
    const topTracksItemsData = await Promise.resolve(topTracks);
    const topTracksItems = topTracksItemsData.items;
    // console.log(topTracksItems);

    // TODO: Add a Time Range Selector for Top Tracks (All Time, Last 6 Months, Last 4 Weeks)
    if (topTracksItems.length == 0)
        return (
            <div className="flex flex-col items-center justify-center  text-center  p-12">
                <p>
                    You dont have any top artists yet. Please listen to some
                    music.
                </p>
                <p>
                    <a
                        href="https://open.spotify.com/"
                        target="_blank"
                        className="underline cursor-pointer text-green-500"
                    >
                        Open Player
                    </a>
                </p>
            </div>
        );

    return (
        <div className="mx-4 sm:mx-8">
            <div className="px-4 md:px-14 py-6 md:py-12">
                <header className="flex flex-col md:flex-row justify-between items-center px-2">
                    <h1 className="text-xl font-semibold">Top Tracks</h1>
                    <div className="text-base gap-x-3 cursor-pointer md:hidden hidden">
                        <span className="underline underline-offset-4">
                            All Time
                        </span>
                        <span>Last 6 Months</span>
                        <span>Last 4 Weeks</span>
                    </div>
                </header>
            </div>

            <section>
                <div className="flex flex-col px-4 md:px-16 gap-y-8 my-4">
                    {topTracksItems.map((track: any) => (
                        <Link
                            href={`/tracks/` + track.id}
                            key={track.id}
                            className="flex items-center  justify-between gap-x-4 md:gap-x-7 font-medium hover:text-green-500 w-full "
                        >
                            <Image
                                className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover"
                                src={
                                    track.album?.images[2]?.url ||
                                    track.album.images[1]?.url ||
                                    track.album.images[0]?.url
                                }
                                alt="Artist Image"
                                width={60}
                                height={60}
                            />
                            <div className="flex flex-col text-start w-full">
                                <h3 className="text-base md:text-lg font-medium">
                                    {truncate(track.name, 35)}
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-300 opacity-70">
                                    <span className="mr-2">
                                        {truncate(
                                            artistToString(track.artists || []),
                                            40
                                        )}
                                    </span>
                                    {"·"}
                                    <span className="ml-2">
                                        {truncate(track.album.name ,40)}
                                    </span>
                                </p>
                            </div>
                            <p className="inline sm:hidden md:inline  md:text-sm text-xs sm:text-sm text-gray-300 opacity-70 ">
                                {millisecondsToMinutes(track.duration_ms)}
                            </p>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default tracks;
