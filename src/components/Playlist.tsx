import Image from "next/image";
import Link from "next/link";
import { getAuthSession } from "@/utils/auth";
import { SpotifyApi } from "@/utils/SpotifyApi";
import { truncate } from "@/utils/helper";

async function Playlist() {
    const session = await getAuthSession();

    const spotifyApi = new SpotifyApi(session!.accessToken);
    spotifyApi.setAccessToken(session!.accessToken);

    const playlist = await spotifyApi.getUserPlaylists({
        limit: 50,
    });
    const playlistItems = playlist.items;

    return (
        <section>
            <div className="grid grid-cols-2 gap-4 md:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {playlistItems.map((item: any) => (
                    <div
                        key={item.id}
                        className="flex flex-col items-center justify-center text-center gap-y-3 p-2 hover:text-green-500"
                    >
                        <Link className="block" href={`/playlist/${item.id}`}>
                            <Image
                                className="aspect-square rounded-md"
                                src={
                                    item.images[0]?.url ||
                                    "https://wallpapercave.com/wp/wp9403167.jpg"
                                }
                                alt="Profile Picture"
                                width={230}
                                height={230}
                            />
                        </Link>
                        <div className="w-full">
                            <Link
                                href={item.external_urls.spotify}
                                target="_blank"
                                className="text-sm block overflow-hidden overflow-ellipsis whitespace-nowrap"
                            >
                                {truncate(item.name, 30)}
                            </Link>
                            <p className="text-xs text-gray-500 overflow-hidden overflow-ellipsis whitespace-nowrap">
                                {item.tracks.total}{" "}
                                {item.tracks.total > 1 ? "songs" : "song"}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Playlist;
