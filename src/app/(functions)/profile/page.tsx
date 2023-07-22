import SignOut_Button from "@/components/SignOutButton";
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

export default async function Profile() {
    const session = await getAuthSession();

    const api = new SpotifyApi(session!.accessToken);

    const topArtists = api.getMyTopArtists({
        limit: 10,
        time_range: "long_term",
    });

    const topTracks = api.getMyTopTracks({
        limit: 10,
        time_range: "long_term",
    });
    const followedArtistsRes = api.getFollowedArtists();
    const playlistData = api.getUserPlaylists({
        limit: 1,
    });

    const [topArtistsData, topTracksData, me, followedArtists, playlist] =
        await Promise.all([
            topArtists,
            topTracks,
            api.getMe(),
            followedArtistsRes,
            playlistData,
        ]);
    const topArtistsItems = topArtistsData.items;
    const topTracksItems = topTracksData.items;

    if (me.error?.status === 401) {
        return (
            <div>
                <h1>{me.error.message} </h1>
                <SignOut_Button />
            </div>
        );
    }
    if (me.error?.status === 403 || me.error?.status === 429) {
        return (
            <div className="text-center">
                <h1 className="text-3xl font-semibold">{me.error.message}</h1>
                <p className="text-lg font-medium">
                    If you see this error again and it means you can not login
                    because of restrictions from spotify . Its is happening
                    because of this app is in development mode and still
                    restricted by spotify to be used by only email registered in
                    spotify developer dashboard
                </p>
                <span className="text-lg font-medium text-green-500">
                    {" "}
                    if you want to use this app please contact me on <br />
                    please contact me on{" "}
                    <a href="https://twitter.com/Yashasewi">Twitter</a>{" "}
                </span>
                <SignOut_Button />
            </div>
        );
    }
    if (me.error?.status) {
        return (
            <div className="text-center">
                <h1 className="text-3xl font-semibold">{me.error.message}</h1>
                <p className="text-lg font-medium">
                    If you see this error again and it means you can not login
                    because of restrictions from spotify . Its is happening
                    because of this app is in development mode and still
                    restricted by spotify to be used by only email registered in
                    spotify developer dashboard
                </p>
                <span className="text-lg font-medium text-green-500">
                    {" "}
                    if you want to use this app please contact me on <br />
                    please contact me on{" "}
                    <a href="https://twitter.com/Yashasewi">Twitter</a>{" "}
                </span>
                <SignOut_Button />
            </div>
        );
    }
    return (
        <div className="min-w-full p-12">
            <header className="flex flex-col items-center py-6 gap-y-2">
                <Image
                    className="rounded-full"
                    src={
                        me.images[1].url
                            ? me.images![1].url
                            : me.images![0].url ||
                              "https://wallpapercave.com/wp/wp9403167.jpg"
                    }
                    alt="Profile Picture"
                    width={160}
                    height={160}
                />
                <a target="_blank" href={me.external_urls.spotify}>
                    <h1 className=" mt-2 font-semibold transition-colors text-5xl opacity-90 hover:text-green-500">
                        {me.display_name}
                    </h1>
                </a>

                <div className="flex justify-center mt-5 text-center gap-x-6 uppercase ">
                    <div>
                        <span className="text-lg text-green-500 font-medium ">
                            {me.followers!.total || 0}
                        </span>
                        <p className="text-xs  text-gray-400">Followers</p>
                    </div>
                    <div>
                        <span className="text-lg text-green-500 font-medium ">
                            {followedArtists.artists.total || 0}
                        </span>
                        <p className="text-xs text-gray-400">Following</p>
                    </div>
                    <div>
                        <span className="text-lg text-green-500 font-medium ">
                            {playlist.total || 0}
                        </span>
                        <p className="text-xs text-gray-400">Playlist</p>
                    </div>
                </div>
                <SignOut_Button />
            </header>

            <section className="flex w-full my-16 mb-4 ">
                {/* // * top artists of all time */}

                <div className="min-w-[50%]  px-12">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold">
                            Top Artist of All Time
                        </h2>
                        <Link href="/artists">
                            <button className="px-5 py-2 ml-4 border-2 border-white rounded-full">
                                See More 👀
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-y-5 mt-6">
                        {topArtistsItems.slice(0, 8).map((artist: any) => (
                            <Link
                                href={`/artists/${artist.id}`}
                                key={artist.id}
                                className="flex items-center gap-x-7 font-medium"
                            >
                                <Image
                                    className="rounded-full  aspect-square"
                                    src={artist.images[2].url}
                                    alt="Artist Image"
                                    width={50}
                                    height={50}
                                />
                                {artist.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* // * top tracks of all time */}

                <div className="min-w-[50%]  px-12">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold">
                            Top Tracks of All Time
                        </h2>
                        <Link href="/tracks">
                            <button className="px-5 py-2 ml-4 border-2 border-white rounded-full">
                                See More 👀
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-y-5 mt-6">
                        {topTracksItems.slice(0, 8).map((track: any) => (
                            <Link
                                href={`/tracks/${track.id}`}
                                key={track.id}
                                className="flex items-center gap-x-7 font-medium"
                            >
                                <Image
                                    className="  aspect-square"
                                    src={track.album.images[2].url}
                                    alt="Artist Image"
                                    width={50}
                                    height={50}
                                />
                                <div className="flex justify-between w-[100%]">
                                    <div>
                                        <h3 className="text-lg font-medium">
                                            {truncate(track.name, 35)}
                                        </h3>
                                        <p className="text-sm text-gray-300 opacity-70">
                                            <span className="mr-2">
                                                {truncate(
                                                    artistToString(
                                                        track.artists
                                                    )
                                                )}{" "}
                                            </span>
                                            {"·"}{" "}
                                            <span className="ml-2 ">
                                                {truncate(track.album.name)}
                                            </span>
                                        </p>
                                    </div>
                                    <p className="text-sm text-gray-300 opacity-70 mr-3">
                                        {dateToYear(track.album.release_date)}{" "}
                                        {"·"}{" "}
                                        {millisecondsToMinutes(
                                            track.duration_ms
                                        )}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
