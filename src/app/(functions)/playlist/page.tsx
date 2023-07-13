"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

function Playlist() {
  const session = useSession();
  console.log(session);

  return (
    <div>
      <div className="mx-8">
        <div className="px-16 py-12">
          <header className="flex justify-between px-5 ">
            <h1 className="text-xl font-semibold">Your Playlist</h1>
          </header>

          <section>
            <div className="grid grid-cols-5 gap-4 mt-12">
              <div className="flex flex-col items-center justify-center text-center gap-3 p-2">
                <Link
                  className="inline-block w-[230px] h-[230px]"
                  href="/artist/3z97WMRi731dCvKklIf2X6"
                >
                  <Image
                    className="  "
                    src="https://i.scdn.co/image/ab67616100005174cb6926f44f620555ba444fca"
                    alt="Profile Picture"
                    width={230}
                    height={230}
                  />
                </Link>
                <Link
                  href="https://open.spotify.com/artist/3z97WMRi731dCvKklIf2X6"
                  target="_blank"
                  className=""
                >
                  NEFFEX
                </Link>
              </div>
              <div className="flex flex-col items-center justify-center text-center gap-3 p-2">
                <Link
                  className="inline-block w-[230px] h-[230px]"
                  href="/artist/3z97WMRi731dCvKklIf2X6"
                >
                  <Image
                    className="  "
                    src="https://i.scdn.co/image/ab67616100005174cb6926f44f620555ba444fca"
                    alt="Profile Picture"
                    width={230}
                    height={230}
                  />
                </Link>
                <Link
                  href="https://open.spotify.com/artist/3z97WMRi731dCvKklIf2X6"
                  target="_blank"
                  className=""
                >
                  NEFFEX
                </Link>
              </div>
              <div className="flex flex-col items-center justify-center text-center gap-3 p-2">
                <Link
                  className="inline-block w-[230px] h-[230px]"
                  href="/artist/3z97WMRi731dCvKklIf2X6"
                >
                  <Image
                    className="  "
                    src="https://i.scdn.co/image/ab67616100005174a00b11c129b27a88fc72f36b"
                    alt="Profile Picture"
                    width={230}
                    height={230}
                  />
                </Link>
                <Link
                  href="https://open.spotify.com/artist/3z97WMRi731dCvKklIf2X6"
                  target="_blank"
                  className=""
                >
                  NEFFEX
                </Link>
              </div>
              <div className="flex flex-col items-center justify-center text-center gap-3 p-2">
                <Link
                  className="inline-block w-[230px] h-[230px]"
                  href="/artist/3z97WMRi731dCvKklIf2X6"
                >
                  <Image
                    className="  "
                    src="https://i.scdn.co/image/ab67616100005174a00b11c129b27a88fc72f36b"
                    alt="Profile Picture"
                    width={230}
                    height={230}
                  />
                </Link>
                <Link
                  href="https://open.spotify.com/artist/3z97WMRi731dCvKklIf2X6"
                  target="_blank"
                  className=""
                >
                  NEFFEX
                </Link>
              </div>
              <div className="flex flex-col items-center justify-center text-center gap-3 p-2">
                <Link
                  className="inline-block w-[230px] h-[230px]"
                  href="/artist/3z97WMRi731dCvKklIf2X6"
                >
                  <Image
                    className="  "
                    src="https://i.scdn.co/image/ab67616100005174cb6926f44f620555ba444fca"
                    alt="Profile Picture"
                    width={230}
                    height={230}
                  />
                </Link>
                <Link
                  href="https://open.spotify.com/artist/3z97WMRi731dCvKklIf2X6"
                  target="_blank"
                  className=""
                >
                  NEFFEX
                </Link>
              </div>
              <div className="flex flex-col items-center justify-center text-center gap-3 p-2">
                <Link
                  className="inline-block w-[230px] h-[230px]"
                  href="/artist/3z97WMRi731dCvKklIf2X6"
                >
                  <Image
                    className="  "
                    src="https://i.scdn.co/image/ab67616100005174cb6926f44f620555ba444fca"
                    alt="Profile Picture"
                    width={230}
                    height={230}
                  />
                </Link>
                <Link
                  href="https://open.spotify.com/artist/3z97WMRi731dCvKklIf2X6"
                  target="_blank"
                  className=""
                >
                  NEFFEX
                </Link>
              </div>
              <div className="flex flex-col items-center justify-center text-center gap-3 p-2">
                <Link
                  className="inline-block w-[230px] h-[230px]"
                  href="/artist/3z97WMRi731dCvKklIf2X6"
                >
                  <Image
                    className="  "
                    src="https://i.scdn.co/image/ab67616100005174cb6926f44f620555ba444fca"
                    alt="Profile Picture"
                    width={230}
                    height={230}
                  />
                </Link>
                <Link
                  href="https://open.spotify.com/artist/3z97WMRi731dCvKklIf2X6"
                  target="_blank"
                  className=""
                >
                  NEFFEX
                </Link>
              </div>
              <div className="flex flex-col items-center justify-center text-center gap-3 p-2">
                <Link
                  className="inline-block w-[230px] h-[230px]"
                  href="/artist/3z97WMRi731dCvKklIf2X6"
                >
                  <Image
                    className="  "
                    src="https://i.scdn.co/image/ab67616100005174a00b11c129b27a88fc72f36b"
                    alt="Profile Picture"
                    width={230}
                    height={230}
                  />
                </Link>
                <Link
                  href="https://open.spotify.com/artist/3z97WMRi731dCvKklIf2X6"
                  target="_blank"
                  className=""
                >
                  NEFFEX
                </Link>
              </div>
              <div className="flex flex-col items-center justify-center text-center gap-3 p-2">
                <Link
                  className="inline-block w-[230px] h-[230px]"
                  href="/artist/3z97WMRi731dCvKklIf2X6"
                >
                  <Image
                    className="  "
                    src="https://i.scdn.co/image/ab67616100005174a00b11c129b27a88fc72f36b"
                    alt="Profile Picture"
                    width={230}
                    height={230}
                  />
                </Link>
                <Link
                  href="https://open.spotify.com/artist/3z97WMRi731dCvKklIf2X6"
                  target="_blank"
                  className=""
                >
                  NEFFEX
                </Link>
              </div>
              <div className="flex flex-col items-center justify-center text-center gap-3 p-2">
                <Link
                  className="inline-block w-[230px] h-[230px]"
                  href="/artist/3z97WMRi731dCvKklIf2X6"
                >
                  <Image
                    className="  "
                    src="https://i.scdn.co/image/ab67616100005174cb6926f44f620555ba444fca"
                    alt="Profile Picture"
                    width={230}
                    height={230}
                  />
                </Link>
                <Link
                  href="https://open.spotify.com/artist/3z97WMRi731dCvKklIf2X6"
                  target="_blank"
                  className=""
                >
                  NEFFEX
                </Link>
              </div>
              <div className="flex flex-col items-center justify-center text-center gap-3 p-2">
                <Link
                  className="inline-block w-[230px] h-[230px]"
                  href="/artist/3z97WMRi731dCvKklIf2X6"
                >
                  <Image
                    className="  "
                    src="https://i.scdn.co/image/ab67616100005174a00b11c129b27a88fc72f36b"
                    alt="Profile Picture"
                    width={230}
                    height={230}
                  />
                </Link>
                <Link
                  href="https://open.spotify.com/artist/3z97WMRi731dCvKklIf2X6"
                  target="_blank"
                  className=""
                >
                  NEFFEX
                </Link>
              </div>
              <div className="flex flex-col items-center justify-center text-center gap-3 p-2">
                <Link
                  className="inline-block w-[230px] h-[230px]"
                  href="/artist/3z97WMRi731dCvKklIf2X6"
                >
                  <Image
                    className="  "
                    src="https://i.scdn.co/image/ab67616100005174cb6926f44f620555ba444fca"
                    alt="Profile Picture"
                    width={230}
                    height={230}
                  />
                </Link>
                <Link
                  href="https://open.spotify.com/artist/3z97WMRi731dCvKklIf2X6"
                  target="_blank"
                  className=""
                >
                  NEFFEX
                </Link>
              </div>
              <div className="flex flex-col items-center justify-center text-center gap-3 p-2">
                <Link
                  className="inline-block w-[230px] h-[230px]"
                  href="/artist/3z97WMRi731dCvKklIf2X6"
                >
                  <Image
                    className="  "
                    src="https://i.scdn.co/image/ab67616100005174cb6926f44f620555ba444fca"
                    alt="Profile Picture"
                    width={230}
                    height={230}
                  />
                </Link>
                <Link
                  href="https://open.spotify.com/artist/3z97WMRi731dCvKklIf2X6"
                  target="_blank"
                  className=""
                >
                  NEFFEX
                </Link>
              </div>
              <div className="flex flex-col items-center justify-center text-center gap-3 p-2">
                <Link
                  className="inline-block w-[230px] h-[230px]"
                  href="/artist/3z97WMRi731dCvKklIf2X6"
                >
                  <Image
                    className="  "
                    src="https://i.scdn.co/image/ab67616100005174cb6926f44f620555ba444fca"
                    alt="Profile Picture"
                    width={230}
                    height={230}
                  />
                </Link>
                <Link
                  href="https://open.spotify.com/artist/3z97WMRi731dCvKklIf2X6"
                  target="_blank"
                  className=""
                >
                  NEFFEX
                </Link>
              </div>
              <div className="flex flex-col items-center justify-center text-center gap-3 p-2">
                <Link
                  className="inline-block w-[230px] h-[230px]"
                  href="/artist/3z97WMRi731dCvKklIf2X6"
                >
                  <Image
                    className="  "
                    src="https://i.scdn.co/image/ab67616100005174cb6926f44f620555ba444fca"
                    alt="Profile Picture"
                    width={230}
                    height={230}
                  />
                </Link>
                <Link
                  href="https://open.spotify.com/artist/3z97WMRi731dCvKklIf2X6"
                  target="_blank"
                  className=""
                >
                  NEFFEX
                </Link>
              </div>
              <div className="flex flex-col items-center justify-center text-center gap-3 p-2">
                <Link
                  className="inline-block w-[230px] h-[230px]"
                  href="/artist/3z97WMRi731dCvKklIf2X6"
                >
                  <Image
                    className="  "
                    src="https://i.scdn.co/image/ab67616100005174cb6926f44f620555ba444fca"
                    alt="Profile Picture"
                    width={230}
                    height={230}
                  />
                </Link>
                <Link
                  href="https://open.spotify.com/artist/3z97WMRi731dCvKklIf2X6"
                  target="_blank"
                  className=""
                >
                  NEFFEX
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Playlist;
