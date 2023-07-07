import Link from "next/link";
import { Github } from "lucide-react";
function Nav() {
  return (
    <div className="min-h-screen nav w-[6%] py-12 px-2 ">
      <div className="flex flex-col py-5">
        <Link href={"#"}>Profile</Link>
        <Link href={"#"}>Top Artist</Link>
        <Link href={"#"}>Top Track</Link>
        <Link href={"#"}>Recent</Link>
        <Link href={"#"}>Playlist</Link>
      </div>
      <Link href="www.github.com">
        <Github />
      </Link>
    </div>
  );
}

export default Nav;
