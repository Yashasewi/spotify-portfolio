import SignOut_Button from "@/components/SignOutButton";
import { getAuthSession } from "@/utils/auth";
import {
  artistToString,
  dateToYear,
  millisecondsToMinutes,
  spotifyApi,
} from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";

export default async function Profile() {
  const session = await getAuthSession();
  const user = session!.user;

  spotifyApi.setAccessToken(session!.accessToken);

  const meBody = await spotifyApi.getMe();
  const topArtists = await spotifyApi.getMyTopArtists();
  const topTracks = await spotifyApi.getMyTopTracks();

  const topArtistsItems = topArtists.body.items;
  const topTracksItems = topTracks.body.items;
  const me = meBody.body;

  // console.log(me);
  // console.log(topArtists.body);
  // console.log(topTracks.body);
  // console.log(topTracksItems[0]);

  return (
    <div className="min-w-full p-12">
      <header className="flex flex-col items-center py-6 gap-y-2">
        <Image
          className="rounded-full"
          src={me.images![1].url ? me.images![1].url : me.images![0].url}
          alt="Profile Picture"
          width={160}
          height={160}
        />
        <Link href={"/"}>
          <h1 className=" mt-2 font-semibold transition-colors text-5xl opacity-90 hover:text-green-500">
            {me.display_name}
          </h1>
        </Link>

        <div className="flex justify-center mt-5 text-center gap-x-6 uppercase ">
          <div>
            <span className="text-lg text-green-500 font-medium ">
              {me.followers!.total}
            </span>
            <p className="text-xs  text-gray-400">Followers</p>
          </div>
          <div>
            <span className="text-lg text-green-500 font-medium ">{9}</span>
            <p className="text-xs text-gray-400">Following</p>
          </div>
          <div>
            <span className="text-lg text-green-500 font-medium ">{8}</span>
            <p className="text-xs text-gray-400">Playlist</p>
          </div>
        </div>
        <SignOut_Button />
      </header>

      <section className="flex w-full my-16 mb-4 ">
        {/* // * top artists of all time */}

        <div className="min-w-[50%]  px-12">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">Top Artist of All Time</h2>
            <Link href="/artist">
              <button className="px-5 py-2 ml-4 border-2 border-white rounded-full">
                See More
              </button>
            </Link>
          </div>
          <div className="flex flex-col gap-y-5 mt-6">
            {topArtistsItems.slice(0, 8).map((artist: any) => (
              <Link
                href={`/artist/${artist.id}`}
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
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">Top Tracks of All Time</h2>
            <Link href="/tracks">
              <button className="px-5 py-2 ml-4 border-2 border-white rounded-full">
                See More
              </button>
            </Link>
          </div>
          <div className="flex flex-col gap-y-5 mt-6">
            {/* <Link
              href={`/track/${topTracksItems[0].id}`}
              className="flex items-center gap-x-7 font-medium"
            >
              <Image
                className="rounded-full  aspect-square"
                src={topTracksItems[0].album.images[2].url}
                alt="Artist Image"
                width={50}
                height={50}
              />
              <div className="flex justify-between w-[100%]">
                <div>
                  <h3 className="text-lg font-medium">
                    {topTracksItems[0].name}
                  </h3>
                  <p className="text-sm text-gray-300 opacity-70">
                    <span className="mr-2">
                      {artistToString(topTracksItems[0].artists)}{" "}
                    </span>
                    {"·"}{" "}
                    <span className="ml-2">{topTracksItems[0].album.name}</span>
                  </p>
                </div>
                <p className="text-sm text-gray-300 opacity-70 mr-3">
                  {dateToYear(topTracksItems[0].album.release_date)} {"·"}{" "}
                  {millisecondsToMinutes(topTracksItems[0].duration_ms)}
                </p>
              </div>
            </Link> */}
            {topTracksItems.slice(0, 8).map((track: any) => (
              <Link
                href={`/track/${track.id}`}
                key={track.id}
                className="flex items-center gap-x-7 font-medium"
              >
                <Image
                  className="rounded-full  aspect-square"
                  src={track.album.images[2].url}
                  alt="Artist Image"
                  width={50}
                  height={50}
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
                  <p className="text-sm text-gray-300 opacity-70 mr-3">
                    {dateToYear(track.album.release_date)} {"·"}{" "}
                    {millisecondsToMinutes(track.duration_ms)}
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
