import Link from "next/link";
import { Icons } from "@/utils/icons";
function Nav() {
  return (
    <div className="min-h-screen nav w-[6%] py-12 px-2 ">
      <div className="flex flex-col py-5">
        <Link href={"/profile"}>Profile</Link>
        <Link href={"/artist"}>Top Artist</Link>
        <Link href={"/tracks"}>Top Track</Link>
        <Link href={"/recent"}>Recent</Link>
        <Link href={"/playlist"}>Playlist</Link>
      </div>
      <Link href={"https://www.github.com"}>
        <Icons.Github className="w-12 h-12" />
      </Link>
    </div>
  );
}

export default Nav;
