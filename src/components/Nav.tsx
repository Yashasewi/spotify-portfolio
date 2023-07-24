import Link from "next/link";
import { Icons } from "@/utils/icons";
function Nav() {
    return (
        <div className="w-screen bottom-0 nav z-10 md:py-12  text-center flex md:flex-col md:justify-between items-center text-xs fixed md:w-[6rem] md:h-screen ">
            <Link href="/" className="hidden md:block md:min-w-[100%] py-2 m-4">
                <Icons.Spotify className="w-12 h-12 mx-auto fill-green-600 current text-" />
            </Link>
            <div className="w-full  md:h-[60%] flex  md:flex-col px-4  md:px-0 md:gap-y-3 items-center justify-between md:py-5 ">
                <Link href="/profile" className="hoover">
                    <span className="max-w-full h-full ">
                        <Icons.User className="icon" />
                        Profile
                    </span>
                </Link>
                <Link href="/artists" className="hoover ">
                    <span className="md:max-w-full ">
                        <Icons.Microphone className="icon" />
                        Top Artist
                    </span>
                </Link>
                <Link href="/tracks" className="hoover">
                    <span>
                        <Icons.Music className="icon" />
                        Top Tracks
                    </span>
                </Link>
                <Link href="/recent" className="hoover">
                    <span>
                        <Icons.Time className="icon" />
                        Recent
                    </span>
                </Link>
                <Link href="/playlist" className="hoover">
                    <span className="max-w-full">
                        <Icons.Playlist className="icon" />
                        Playlist
                    </span>
                </Link>
            </div>
            <a
                target="_blank"
                className="hidden md:block"
                href={"https://www.github.com/yashasewi"}
            >
                <Icons.Github className="icon" />
            </a>
        </div>
    );
}

export default Nav;
