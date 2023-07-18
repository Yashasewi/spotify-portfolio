import Image from "next/image";
import Link from "next/link";
import { getAuthSession } from "@/utils/auth";
import { SpotifyApi } from "@/utils/SpotifyApi";
async function Playlist() {
  const session = await getAuthSession();

  const spotifyApi = new SpotifyApi(session!.accessToken);
  spotifyApi.setAccessToken(session!.accessToken);

  const playlist = await spotifyApi.getUserPlaylists({
    limit: 50,
  });
  console.log(playlist.items[0]);
  const playlistItems = playlist.items;

  return (
    <section>
      <div className="grid grid-cols-5 gap-4 mt-12">
        {playlistItems.map((item: any) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center text-center gap-y-3 p-2"
          >
            <Link
              className="inline-block w-[230px] h-[230px]"
              href={`/playlist/${item.id}`}
            >
              <Image
                className="  "
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
                className="text-sm  w-[230px] h-[40px] overflow-hidden overflow-ellipsis whitespace-nowrap"
              >
                {item.name}
              </Link>
              <p className="text-xs text-gray-500 w-[230px] h-[40px] overflow-hidden overflow-ellipsis whitespace-nowrap">
                {item.tracks.total} {item.tracks.total > 1 ? "songs" : "song"}
              </p>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Playlist;