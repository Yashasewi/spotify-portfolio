import Image from "next/image";
import Link from "next/link";
import { getAuthSession } from "@/utils/auth";
import { artistToString, millisecondsToMinutes } from "@/utils/helper";

async function Recent() {
  const session = await getAuthSession();

  const response = await fetch(
    `https://api.spotify.com/v1/me/player/recently-played?limit=50`,
    {
      headers: {
        Authorization: `Bearer ${session!.accessToken}`,
      },
    }
  );

  const data = await response.json();
  const recentItems = data.items;

  // console.log(recentItems[0]);

  function getLastPlayedTime(date: string | Date): string {
    const currentDate = new Date();
    const parsedDate = typeof date === "string" ? new Date(date) : date;
    const timeDifference = currentDate.getTime() - parsedDate.getTime();
    const millisecondsInHour = 1000 * 60 * 60;
    const millisecondsInDay = millisecondsInHour * 24;

    if (timeDifference < millisecondsInDay) {
      // Less than 24 hours
      const hours = Math.floor(timeDifference / millisecondsInHour);
      return hours + " hours ago";
    } else {
      // More than 24 hours
      const days = Math.floor(timeDifference / millisecondsInDay);
      return days + " days ago";
    }
  }

  return (
    <div>
      <div className="mx-8 ">
        <div className="px-14 py-12 pb-8">
          <header className="flex justify-between px-2  ">
            <h1 className="text-xl font-semibold">Recent</h1>
          </header>
        </div>

        <section>
          <div className="flex flex-col px-16 gap-y-8 my-4 mt-2">
            {recentItems.map((track: any) => (
              <Link
                href={`/tracks/` + track.id}
                key={track.id}
                className="flex items-center gap-x-7 font-medium"
              >
                <Image
                  className=" "
                  src={track.track.album.images[0].url}
                  alt="Artist Image"
                  width={60}
                  height={60}
                />
                <div className="flex justify-between w-[100%]">
                  <div>
                    <h3 className="text-lg font-medium">{track.track.name}</h3>
                    <p className="text-sm text-gray-300 opacity-70">
                      <span className="mr-2">
                        {artistToString(track.track.album.artists)}{" "}
                      </span>
                      {"·"}{" "}
                      <span className="ml-2">{track.track.album.name}</span>
                    </p>
                  </div>
                  <span className="mr-12 flex flex-col justify-center gap-y-1">
                    <p className="text-sm text-gray-300 opacity-70">
                      {millisecondsToMinutes(track.track.duration_ms)}
                    </p>
                    <p className="text-xs text-gray-300 opacity-70">
                      {getLastPlayedTime(track.played_at)}
                    </p>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Recent;
