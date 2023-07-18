import { getAuthSession } from "@/utils/auth";
import { spotifyApi } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";

const Artist = async () => {
  const session = await getAuthSession();

  spotifyApi.setAccessToken(session!.accessToken);

  const topArtists = await spotifyApi.getMyTopArtists({
    limit: 50,
    time_range: "long_term",
  });

  const topArtistsItems = topArtists.body.items;
  return (
    <section>
      <div className="grid grid-cols-5 gap-4 mt-12">
        {topArtistsItems.map((artist) => (
          <div
            className="flex flex-col items-center justify-center text-center gap-3 p-2"
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
              href={artist.external_urls.spotify}
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
