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
        <div className="min-w-full p-4 sm:p-12">
            <header className="flex flex-col items-center py-4 sm:py-6 gap-y-2">
                <Image
                    className="rounded-full"
                    src={
                        me.images[1]?.url
                            ? me.images![1]?.url
                            : me.images![0]?.url ||
                              "https://wallpapercave.com/wp/wp9403167.jpg"
                    }
                    alt="Profile Picture"
                    width={160}
                    height={160}
                />
                <a target="_blank" href={me.external_urls.spotify}>
                    <h1 className="mt-2 font-semibold text-3xl sm:text-5xl opacity-90 hover:text-green-500">
                        {me.display_name}
                    </h1>
                </a>

                <div className="flex justify-center mt-5 text-center gap-x-6 uppercase">
                    <div>
                        <span className="text-lg sm:text-xl text-green-500 font-medium">
                            {me.followers!.total || 0}
                        </span>
                        <p className="text-xs sm:text-sm text-gray-400">
                            Followers
                        </p>
                    </div>
                    <div>
                        <span className="text-lg sm:text-xl text-green-500 font-medium">
                            {followedArtists.artists.total || 0}
                        </span>
                        <p className="text-xs sm:text-sm text-gray-400">
                            Following
                        </p>
                    </div>
                    <div>
                        <span className="text-lg sm:text-xl text-green-500 font-medium">
                            {playlist.total || 0}
                        </span>
                        <p className="text-xs sm:text-sm text-gray-400">
                            Playlist
                        </p>
                    </div>
                </div>
                <SignOut_Button />
            </header>

            <section className="flex flex-col sm:flex-row w-full my-8 sm:my-16 mb-4">
                {/* top artists of all time */}
                <div className="min-w-full sm:min-w-[50%] px-2 sm:px-12">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg sm:text-xl font-semibold">
                            Top Artist of All Time
                        </h2>
                        <Link href="/artists">
                            <button className="px-3 sm:px-5 py-2 ml-2 sm:ml-4 border-2 border-white rounded-full hover:border-green-500 hover:text-green-500">
                                See More 👀
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-y-5 mt-6">
                        {topArtistsItems.slice(0, 8).map((artist: any) => (
                            <Link
                                href={`/artists/${artist.id}`}
                                key={artist.id}
                                className="flex items-center gap-x-3 sm:gap-x-7 font-medium hover:text-green-500"
                            >
                                <Image
                                    className="rounded-full aspect-square"
                                    src={artist.images[2].url}
                                    alt="Artist Image"
                                    width={40}
                                    height={40}
                                />
                                <span className="text-sm sm:text-base">
                                    {artist.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* top tracks of all time */}
                <div className="min-w-full sm:min-w-[50%] px-2 sm:px-12 mt-6 sm:mt-0">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg sm:text-xl font-semibold">
                            Top Tracks of All Time
                        </h2>
                        <Link href="/tracks">
                            <button className="px-3 sm:px-5 py-2 ml-2 sm:ml-4 border-2 border-white rounded-full hover:border-green-500 hover:text-green-500">
                                See More 👀
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-y-5 mt-6">
                        {topTracksItems.slice(0, 8).map((track: any) => (
                            <Link
                                href={`/tracks/${track.id}`}
                                key={track.id}
                                className="flex  items-center gap-x-3 sm:gap-x-7 font-medium hover:text-green-500"
                            >
                                <Image
                                    className="aspect-square"
                                    src={
                                        track.album.images[2].url ||
                                        track.album.images[1].url ||
                                        track.album.images[0].url
                                    }
                                    alt="Artist Image"
                                    width={50}
                                    height={50}
                                />
                                <div className="flex flex-col justify-between w-[100%]">
                                    <div className="flex justify-between">
                                        <h3 className="text-base sm:text-lg font-medium">
                                            {truncate(track.name, 30)}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-gray-300 opacity-70 mr-3">
                                            {dateToYear(
                                                track.album.release_date
                                            )}{" "}
                                            {"·"}{" "}
                                            {millisecondsToMinutes(
                                                track.duration_ms
                                            )}
                                        </p>
                                    </div>
                                    <p className="text-sm sm:text-base text-gray-300 opacity-70">
                                        <span className="mr-1 sm:mr-2">
                                            {truncate(
                                                artistToString(track.artists),
                                                25
                                            )}
                                        </span>
                                        {"·"}
                                        <span className="ml-1 sm:ml-2">
                                            {truncate(track.album.name, 25)}
                                        </span>
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
