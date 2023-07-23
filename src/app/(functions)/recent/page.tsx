import Image from "next/image";
import Link from "next/link";
import { getAuthSession } from "@/utils/auth";
import {
    artistToString,
    getLastPlayedTime,
    millisecondsToMinutes,
} from "@/utils/helper";
import { cache } from "react";

const getRecent = cache(async (accessToken: string) => {
    const response = await fetch(
        `https://api.spotify.com/v1/me/player/recently-played?limit=50`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );
    const data = await response.json();

    return data;
});

async function Recent() {
    const session = await getAuthSession();

    const data = await getRecent(session!.accessToken);
    const recentItems = data.items;

    return (
        <div>
            <div className="mx-8 ">
                <div className="px-14 py-12 pb-8">
                    <header className="flex justify-between px-2  ">
                        <h1 className="text-xl font-semibold">Recent</h1>
                    </header>
                </div>

                <section>
                    <div className="flex flex-col px-16 gap-y-8 my-4 mt-2">
                        {recentItems.map((track: any) => (
                            <Link
                                href={`/tracks/` + track.track.id}
                                key={track.id}
                                className="flex items-center gap-x-7 font-medium hover:text-green-500"
                            >
                                <Image
                                    className=" "
                                    src={track.track.album.images[0].url}
                                    alt="Artist Image"
                                    width={60}
                                    height={60}
                                />
                                <div className="flex justify-between w-[100%]">
                                    <div>
                                        <h3 className="text-lg font-medium">
                                            {track.track.name}
                                        </h3>
                                        <p className="text-sm text-gray-300 opacity-70">
                                            <span className="mr-2">
                                                {artistToString(
                                                    track.track.album.artists
                                                )}{" "}
                                            </span>
                                            {"·"}{" "}
                                            <span className="ml-2">
                                                {track.track.album.name}
                                            </span>
                                        </p>
                                    </div>
                                    <span className="mr-12 flex flex-col justify-center gap-y-1">
                                        <p className="text-sm text-gray-300 opacity-70">
                                            {millisecondsToMinutes(
                                                track.track.duration_ms
                                            )}
                                        </p>
                                        <p className="text-xs text-gray-300 opacity-70">
                                            {getLastPlayedTime(track.played_at)}
                                        </p>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Recent;
