import { Artist } from "@/types/types";
import { SpotifyApi } from "@/utils/SpotifyApi";
import { getAuthSession } from "@/utils/auth";
import Image from "next/image";
import Link from "next/link";

const Artist = async () => {
    const session = await getAuthSession();

    const spotifyApi = new SpotifyApi(session!.accessToken);

    const topArtists = await spotifyApi.getMyTopArtists({
        limit: 50,
        time_range: "long_term",
    });

    const topArtistsItems = topArtists.items;
    if (topArtistsItems.length == 0)
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
        <section>
            <div className="grid grid-cols-5 gap-4 mt-12">
                {topArtistsItems.map((artist: Artist) => (
                    <div
                        className="flex flex-col items-center justify-center text-center gap-3 p-2 hover:text-green-500"
                        key={artist.id}
                    >
                        <Link
                            className="inline-block w-[200px] h-[200px]"
                            href={`/artists/${artist.id}`}
                        >
                            <Image
                                className="rounded-full  aspect-square"
                                src={artist.images[0].url}
                                alt="Profile Picture"
                                width={200}
                                height={200}
                            />
                        </Link>
                        <Link
                            href={`/artists/${artist.id}`}
                            target="_blank"
                            className=""
                        >
                            {artist.name}
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Artist;
