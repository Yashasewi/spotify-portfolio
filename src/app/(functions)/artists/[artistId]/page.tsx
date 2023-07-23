import Image from "next/image";
import Link from "next/link";
import { SpotifyApi } from "@/utils/SpotifyApi";
import { getAuthSession } from "@/utils/auth";
import {
    artistToString,
    dateToYear,
    millisecondsToMinutes,
    truncate,
} from "@/utils/helper";
interface pageProps {
    params: {
        artistId: string;
    };
}
export default async function ArtistsPage({ params }: pageProps) {
    const session = await getAuthSession();

    const spotifyApi = new SpotifyApi(session!.accessToken);
    const artistRes = spotifyApi.getArtist(params.artistId);
    const AlbumRes = spotifyApi.getArtistAlbums(params.artistId);
    const topArtistsRes = spotifyApi.getArtistTopTracks(params.artistId);
    const artistRelatedRes = spotifyApi.getArtistRelatedArtists(
        params.artistId
    );
    const [data, topArtists, albumData, artistRelatedResData]: any =
        await Promise.all([
            artistRes,
            topArtistsRes,
            AlbumRes,
            artistRelatedRes,
        ]);
    const topArtistsItems = topArtists.tracks;
    const artist = data;
    const album = albumData.items;
    const artistRelated = artistRelatedResData.artists;

    return (
        <div className="min-w-full p-12">
            <header className="flex flex-col items-center py-6 gap-y-2">
                <Image
                    className="rounded-full"
                    src={
                        artist?.images[0].url ||
                        " https://i.scdn.co/image/ab67616d0000b273712701c5e263efc8726b1464"
                    }
                    alt="Profile Picture"
                    width={160}
                    height={160}
                />
                <a href={artist.external_urls?.spotify || "/"}>
                    <h1 className=" mt-3 font-medium transition-colors text-2xl opacity-90 hover:text-green-500 ">
                        {artist.name || "artist Name"}
                    </h1>
                </a>

                <div className="flex justify-center mt-2 text-center gap-x-6 uppercase ">
                    <div>
                        <span className="text-lg text-green-500 font-medium ">
                            {artist.popularity || 0}
                        </span>
                        <p className="text-xs  text-gray-400">Popularity</p>
                    </div>
                    <div>
                        <span className="text-lg text-green-500 font-medium ">
                            {artist.followers.total || "0"}
                        </span>
                        <p className="text-xs text-gray-400">Followers</p>
                    </div>
                    <div>
                        <span className="text-lg text-green-500 font-medium ">
                            {albumData.total || "0"}
                        </span>
                        <p className="text-xs text-gray-400">Albums</p>
                    </div>
                </div>
                <a target="_blank" href={artist.external_urls?.spotify || "/"}>
                    <button className="px-8 py-2 mt-4 bg-green-600 text-base  rounded-full hover:text-black hover:bg-green-500 ">
                        See On Spotify
                    </button>
                </a>
            </header>

            <section className="flex w-full my-16 mb-4 ">
                {/* // * top artists of all time */}

                <div className="min-w-[50%]  px-12">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold"> Albums</h2>
                    </div>
                    <div className="flex flex-col gap-y-5 mt-6">
                        {album.slice(0, 8).map((alb: any) => (
                            <a
                                target="_blank"
                                href={alb.external_urls?.spotify || "/"}
                                key={alb.id}
                                className="flex items-center gap-x-7 font-medium
                                hover:text-green-500 hover:cursor-pointer"
                            >
                                <Image
                                    className="rounded-full  aspect-square"
                                    src={alb.images[1].url}
                                    alt="Alb Image"
                                    width={50}
                                    height={50}
                                />
                                {truncate(alb.name, 40)}
                            </a>
                        ))}
                    </div>
                </div>
                {/* // * top tracks of all time */}

                <div className="min-w-[50%]  px-12">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold">Top Tracks</h2>
                    </div>
                    <div className="flex flex-col gap-y-5 mt-6">
                        {topArtistsItems.slice(0, 8).map((track: any) => (
                            <a
                                target="_blank"
                                href={track?.external_urls?.spotify || "/"}
                                key={track?.id}
                                className="flex items-center gap-x-7 font-medium
                                hover:text-green-500 hover:cursor-pointer"
                            >
                                <Image
                                    className=" aspect-square"
                                    src={
                                        track?.album.images[1].url ||
                                        "https://i.scdn.co/image/ab67616d0000b273712701c5e263efc8726b1464"
                                    }
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
                                                    ),
                                                    40
                                                )}{" "}
                                            </span>
                                        </p>
                                    </div>
                                    <p className="text-sm text-gray-300 opacity-70 mr-3">
                                        {millisecondsToMinutes(
                                            track.duration_ms
                                        )}
                                        {` • `}
                                        {dateToYear(track.album.release_date)}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* show the similar artist in card form  */}
            <section className="flex w-full flex-col gap-y-5  my-16 mb-4 mx-10 ">
                <h2 className="text-xl font-semibold">Similar Artists</h2>
                <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {artistRelated.map((artist: any) => (
                        <Link
                            href={`/artists/${artist.id}`}
                            key={artist.id}
                            className="flex items-center gap-x-7 font-medium
                            hover:text-green-500 hover:cursor-pointer
                            "
                        >
                            <Image
                                className="rounded-full  aspect-square"
                                src={
                                    artist.images[0].url ||
                                    "https://i.scdn.co/image/ab67616d0000b273712701c5e263efc8726b1464"
                                }
                                alt="Artist Image"
                                width={50}
                                height={50}
                            />
                            {truncate(artist.name, 40)}
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
