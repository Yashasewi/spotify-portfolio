import Link from "next/link";
import { Icons } from "@/utils/icons";
function Nav() {
  return (
    <div className="min-h-screen    nav min-w-[6rem] py-12  text-center flex flex-col justify-between items-center text-xs ">
      <Link href={"/"} className="min-w-[100%] py-2 ">
        <Icons.Spotify className="w-12 h-12 mx-auto fill-green-600 current text-" />
      </Link>
      <div className="flex flex-col gap-y-1 items-center justify-center py-5 w-[100%]">
        <Link href={"/profile"} className="hoover">
          <span className="max-w-full">
            <Icons.User className="icon" />
            Profile
          </span>
        </Link>
        <Link href={"/artist"} className="hoover">
          <span className="max-w-full">
            <Icons.Microphone className="icon" />
            Top Artist
          </span>
        </Link>
        <Link href={"/tracks"} className="hoover">
          <span>
            <Icons.Music className="icon" />
            Top Tracks
          </span>
        </Link>
        <Link href={"/recent"} className="hoover">
          <span>
            <Icons.Time className="icon" />
            Recent
          </span>
        </Link>
        <Link href={"/playlist"} className="hoover">
          <span className="max-w-full">
            <Icons.Playlist className="icon" />
            Playlist
          </span>
        </Link>
      </div>
      <Link href={"https://www.github.com/yashasewi"}>
        <Icons.Github className="icon" />
      </Link>
    </div>
  );
}

export default Nav;
