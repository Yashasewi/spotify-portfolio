import { getAuthSession } from "@/utils/auth";
import { spotifyApi } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";

async function artist() {
  const session = await getAuthSession();

  spotifyApi.setAccessToken(session!.accessToken);

  const topArtists = await spotifyApi.getMyTopArtists();

  const topArtistsItems = topArtists.body.items;
  console.log(topArtistsItems);

  // TODO: Add a Time Range Selector for Top Artists (All Time, Last 6 Months, Last 4 Weeks)

  return (
    <div className="mx-8">
      <div className="px-16 py-12">
        <header className="flex justify-between px-5 ">
          <h1 className="text-xl font-semibold">Top Artists</h1>
          <div className="text-base flex gap-x-3">
            <span>All Time</span>
            <span>Last 6 Month</span>
            <span>Last 4 Weeks</span>
          </div>
        </header>

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
      </div>
    </div>
  );
}

export default artist;
