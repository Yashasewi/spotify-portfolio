import { SpotifyApi } from "@/utils/SpotifyApi";
import { getAuthSession } from "@/utils/auth";
import { artistToString, millisecondsToMinutes } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";

// * This is the code for the Top Tracks Page

async function tracks() {
  const session = await getAuthSession();

  const spotifyApi = new SpotifyApi(session!.accessToken);

  const topTracks = await spotifyApi.getMyTopTracks({
    limit: 50,
    time_range: "long_term",
  });
  const topTracksItems = topTracks.items;
  // console.log(topTracksItems);

  // TODO: Add a Time Range Selector for Top Artists (All Time, Last 6 Months, Last 4 Weeks)

  return (
    <div>
      <div className="mx-8 ">
        <div className="px-14 py-12">
          <header className="flex justify-between px-2  ">
            <h1 className="text-xl font-semibold">Top Tracks</h1>
            <div className="text-base flex gap-x-3 cursor-pointer">
              <span>All Time</span>
              <span>Last 6 Month</span>
              <span>Last 4 Weeks</span>
            </div>
          </header>
        </div>

        <section>
          <div className="flex flex-col px-16 gap-y-8 my-4">
            {topTracksItems.map((track: any) => (
              <Link
                href={`/tracks/` + track.id}
                key={track.id}
                className="flex items-center gap-x-7 font-medium"
              >
                <Image
                  className=" "
                  src={track.album.images[2].url}
                  alt="Artist Image"
                  width={60}
                  height={60}
                />
                <div className="flex justify-between w-[100%]">
                  <div>
                    <h3 className="text-lg font-medium">{track.name}</h3>
                    <p className="text-sm text-gray-300 opacity-70">
                      <span className="mr-2">
                        {artistToString(track.artists)}{" "}
                      </span>
                      {"·"} <span className="ml-2">{track.album.name}</span>
                    </p>
                  </div>
                  <p className="text-sm mr-4 text-gray-300 opacity-70">
                    {millisecondsToMinutes(track.duration_ms)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default tracks;
