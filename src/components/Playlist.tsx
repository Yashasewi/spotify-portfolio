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
    // console.log(playlist.items[0]);
    const playlistItems = playlist.items;

    return (
        <section>
            <div
                className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5
            "
            >
                {playlistItems.map((item: any) => (
                    <div
                        key={item.id}
                        className="flex flex-col items-center justify-center text-center gap-y-3 p-2 hover:text-green-500"
                    >
                        <Link
                            className="inline-block w-[230px] h-[230px]"
                            href={`/playlist/${item.id}`}
                        >
                            <Image
                                className="aspect-square"
                                src={
                                    item.images[0]?.url ||
                                    "https://wallpapercave.com/wp/wp9403167.jpg"
                                }
                                alt="Profile Picture"
                                width={230}
                                height={230}
                            />
                        </Link>
                        <span>
                            <Link
                                href={item.external_urls.spotify}
                                target="_blank"
                                className="text-sm w-[230px] h-[40px] overflow-hidden overflow-ellipsis whitespace-nowrap"
                            >
                                {truncate(item.name, 30)}
                            </Link>
                            <p className="text-xs text-gray-500 w-[230px] h-[40px] overflow-hidden overflow-ellipsis whitespace-nowrap">
                                {item.tracks.total}{" "}
                                {item.tracks.total > 1 ? "songs" : "song"}
                            </p>
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Playlist;
