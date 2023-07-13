import SignOut_Button from "@/components/SignOut_Button";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <div className="min-w-full p-12">
      <header className="flex flex-col items-center py-6 gap-y-2">
        <Image
          className="rounded-full "
          src="https://i.scdn.co/image/ab67757000003b82d008b7ccf168c1d105b9e6be"
          alt="Profile Picture"
          width={160}
          height={160}
        />
        <Link
          href={"https://open.spotify.com/user/31r4ez6fkilyf5loricph35fz6zi"}
        >
          <h1 className=" mt-2 font-semibold transition-colors text-5xl opacity-90 hover:text-green-500">
            Yashasewi
          </h1>
        </Link>

        <div className="flex justify-center mt-5 text-center gap-x-6 uppercase ">
          <div>
            <span className="text-lg text-green-500 font-medium ">16</span>
            <p className="text-xs  text-gray-400">Followers</p>
          </div>
          <div>
            <span className="text-lg text-green-500 font-medium ">17</span>
            <p className="text-xs text-gray-400">Following</p>
          </div>
          <div>
            <span className="text-lg text-green-500 font-medium ">122</span>
            <p className="text-xs text-gray-400">Playlist</p>
          </div>
        </div>
        <SignOut_Button />
      </header>

      <section className="flex w-full my-16 ">
        <div className="min-w-[50%]  px-12">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">Top Artist of All Time</h2>
            <button className="px-5 py-2 ml-4 border-2 border-white rounded-full">
              See More
            </button>
          </div>
          <div className="flex flex-col gap-y-5 mt-6">
            <Link href="/" className="flex items-center gap-x-7 font-medium ">
              <Image
                className="rounded-full "
                src="https://i.scdn.co/image/ab67757000003b82d008b7ccf168c1d105b9e6be"
                alt="Artist Image"
                width={50}
                height={50}
              />
              NEFFEX
            </Link>

            <Link href="/" className="flex items-center gap-x-7 font-medium">
              <Image
                className="rounded-full "
                src="https://i.scdn.co/image/ab67757000003b82d008b7ccf168c1d105b9e6be"
                alt="Artist Image"
                width={50}
                height={50}
              />
              The Chainsmokers
            </Link>
            <Link href="/" className="flex items-center gap-x-7 font-medium">
              <Image
                className="rounded-full "
                src="https://i.scdn.co/image/ab67757000003b82d008b7ccf168c1d105b9e6be"
                alt="Artist Image"
                width={50}
                height={50}
              />
              Eminem
            </Link>
            <Link href="/" className="flex items-center gap-x-7 font-medium">
              <Image
                className="rounded-full "
                src="https://i.scdn.co/image/ab67757000003b82d008b7ccf168c1d105b9e6be"
                alt="Artist Image"
                width={50}
                height={50}
              />
              Pritam
            </Link>
            <Link href="/" className="flex items-center gap-x-7 font-medium">
              <Image
                className="rounded-full "
                src="https://i.scdn.co/image/ab67757000003b82d008b7ccf168c1d105b9e6be"
                alt="Artist Image"
                width={50}
                height={50}
              />
              NEFFEX
            </Link>

            <Link href="/" className="flex items-center gap-x-7 font-medium">
              <Image
                className="rounded-full "
                src="https://i.scdn.co/image/ab67757000003b82d008b7ccf168c1d105b9e6be"
                alt="Artist Image"
                width={50}
                height={50}
              />
              The Chainsmokers
            </Link>
            <Link href="/" className="flex items-center gap-x-7 font-medium">
              <Image
                className="rounded-full "
                src="https://i.scdn.co/image/ab67757000003b82d008b7ccf168c1d105b9e6be"
                alt="Artist Image"
                width={50}
                height={50}
              />
              Eminem
            </Link>
            <Link href="/" className="flex items-center gap-x-7 font-medium">
              <Image
                className="rounded-full "
                src="https://i.scdn.co/image/ab67757000003b82d008b7ccf168c1d105b9e6be"
                alt="Artist Image"
                width={50}
                height={50}
              />
              Pritam
            </Link>
            <Link href="/" className="flex items-center gap-x-7 font-medium">
              <Image
                className="rounded-full "
                src="https://i.scdn.co/image/ab67757000003b82d008b7ccf168c1d105b9e6be"
                alt="Artist Image"
                width={50}
                height={50}
              />
              NEFFEX
            </Link>

            <Link href="/" className="flex items-center gap-x-7 font-medium">
              <Image
                className="rounded-full "
                src="https://i.scdn.co/image/ab67757000003b82d008b7ccf168c1d105b9e6be"
                alt="Artist Image"
                width={50}
                height={50}
              />
              The Chainsmokers
            </Link>
          </div>
        </div>

        <div className="min-w-[50%]  px-12">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">Top Tracks of All Time</h2>
            <button className="px-5 py-2 ml-4 border-2 border-white rounded-full">
              See More
            </button>
          </div>
          <div className="flex flex-col gap-y-5 mt-6">
            <Link href="/" className="flex items-center gap-x-7 font-medium">
              <Image
                className=" "
                src="https://i.scdn.co/image/ab67757000003b82d008b7ccf168c1d105b9e6be"
                alt="Artist Image"
                width={50}
                height={50}
              />
              <div className="flex justify-between w-[100%]">
                <div>
                  <h3 className="text-lg font-medium">Night Changes</h3>
                  <p className="text-sm text-gray-300 opacity-70">
                    <span className="mr-2">One Direction</span> ·{" "}
                    <span className="ml-2">Four(Deluxe)</span>
                  </p>
                </div>
                <p className="text-sm text-gray-300 opacity-70 mr-3">
                  2014 · 3:46
                </p>
              </div>
            </Link>
            <Link href="/" className="flex items-center gap-x-7">
              <Image
                className=" "
                src="https://i.scdn.co/image/ab67757000003b82d008b7ccf168c1d105b9e6be"
                alt="Artist Image"
                width={50}
                height={50}
              />
              <div className="flex justify-between w-[100%] ">
                <div>
                  <h3 className="text-lg font-medium">Heat Waves</h3>
                  <p className="text-sm text-gray-300 opacity-70 ">
                    <span className="mr-2">One Direction</span> ·{" "}
                    <span className="ml-2">Four(Deluxe)</span>
                  </p>
                </div>
                <p className="text-sm text-gray-300 opacity-70 mr-3">
                  2014 · 3:46
                </p>
              </div>
            </Link>
            <Link href="/" className="flex items-center gap-x-7">
              <Image
                className=" "
                src="https://i.scdn.co/image/ab67757000003b82d008b7ccf168c1d105b9e6be"
                alt="Artist Image"
                width={50}
                height={50}
              />
              <div className="flex justify-between w-[100%]">
                <div>
                  <h3 className="text-lg font-medium">The Middle</h3>
                  <p className="text-sm text-gray-300 opacity-70">
                    <span className="mr-2">One Direction</span> ·{" "}
                    <span className="ml-2">Four(Deluxe)</span>
                  </p>
                </div>
                <p className="text-sm text-gray-300 opacity-70 mr-3">
                  2014 · 3:46
                </p>
              </div>
            </Link>
            <Link href="/" className="flex items-center gap-x-7">
              <Image
                className=" "
                src="https://i.scdn.co/image/ab67757000003b82d008b7ccf168c1d105b9e6be"
                alt="Artist Image"
                width={50}
                height={50}
              />
              <div className="flex justify-between w-[100%]">
                <div>
                  <h3 className="text-lg font-medium">Who Do YOu Love</h3>
                  <p className="text-sm text-gray-300 opacity-70">
                    <span className="mr-2">One Direction</span> ·{" "}
                    <span className="ml-2">Four(Deluxe)</span>
                  </p>
                </div>
                <p className="text-sm text-gray-300 opacity-70 mr-3">
                  2014 · 3:46
                </p>
              </div>
            </Link>
            <Link href="/" className="flex items-center gap-x-7">
              <Image
                className=" "
                src="https://i.scdn.co/image/ab67757000003b82d008b7ccf168c1d105b9e6be"
                alt="Artist Image"
                width={50}
                height={50}
              />
              <div className="flex justify-between w-[100%]">
                <div>
                  <h3 className="text-lg font-medium">Dusk Till Down</h3>
                  <p className="text-sm text-gray-300 opacity-70">
                    <span className="mr-2">One Direction</span> ·{" "}
                    <span className="ml-2">Four(Deluxe)</span>
                  </p>
                </div>
                <p className="text-sm text-gray-300 opacity-70 mr-3">
                  2014 · 3:46
                </p>
              </div>
            </Link>
            <Link href="/" className="flex items-center gap-x-7">
              <Image
                className=" "
                src="https://i.scdn.co/image/ab67757000003b82d008b7ccf168c1d105b9e6be"
                alt="Artist Image"
                width={50}
                height={50}
              />
              <div className="flex justify-between w-[100%]">
                <div>
                  <h3 className="text-lg font-medium">Night Changes</h3>
                  <p className="text-sm text-gray-300 opacity-70">
                    <span className="mr-2">One Direction</span> ·{" "}
                    <span className="ml-2">Four(Deluxe)</span>
                  </p>
                </div>
                <p className="text-sm text-gray-300 opacity-70 mr-3">
                  2014 · 3:46
                </p>
              </div>
            </Link>
            <Link href="/" className="flex items-center gap-x-7">
              <Image
                className=" "
                src="https://i.scdn.co/image/ab67757000003b82d008b7ccf168c1d105b9e6be"
                alt="Artist Image"
                width={50}
                height={50}
              />
              <div className="flex justify-between w-[100%]">
                <div>
                  <h3 className="text-lg font-medium">Heat Waves</h3>
                  <p className="text-sm text-gray-300 opacity-70">
                    <span className="mr-2">One Direction</span> ·{" "}
                    <span className="ml-2">Four(Deluxe)</span>
                  </p>
                </div>
                <p className="text-sm text-gray-300 opacity-70 mr-3">
                  2014 · 3:46
                </p>
              </div>
            </Link>
            <Link href="/" className="flex items-center gap-x-7">
              <Image
                className=" "
                src="https://i.scdn.co/image/ab67757000003b82d008b7ccf168c1d105b9e6be"
                alt="Artist Image"
                width={50}
                height={50}
              />
              <div className="flex justify-between w-[100%]">
                <div>
                  <h3 className="text-lg font-medium">The Middle</h3>
                  <p className="text-sm text-gray-300 opacity-70">
                    <span className="mr-2">One Direction</span> ·{" "}
                    <span className="ml-2">Four(Deluxe)</span>
                  </p>
                </div>
                <p className="text-sm text-gray-300 opacity-70 mr-3">
                  2014 · 3:46
                </p>
              </div>
            </Link>
            <Link href="/" className="flex items-center gap-x-7">
              <Image
                className=" "
                src="https://i.scdn.co/image/ab67757000003b82d008b7ccf168c1d105b9e6be"
                alt="Artist Image"
                width={50}
                height={50}
              />
              <div className="flex justify-between w-[100%]">
                <div>
                  <h3 className="text-lg font-medium">Who Do YOu Love</h3>
                  <p className="text-sm text-gray-300 opacity-70">
                    <span className="mr-2">One Direction</span> ·{" "}
                    <span className="ml-2">Four(Deluxe)</span>
                  </p>
                </div>
                <p className="text-sm text-gray-300 opacity-70 mr-3">
                  2014 · 3:46
                </p>
              </div>
            </Link>
            <Link href="/" className="flex items-center gap-x-7">
              <Image
                className=" "
                src="https://i.scdn.co/image/ab67757000003b82d008b7ccf168c1d105b9e6be"
                alt="Artist Image"
                width={50}
                height={50}
              />
              <div className="flex justify-between w-[100%]">
                <div>
                  <h3 className="text-lg font-medium">Dusk Till Down</h3>
                  <p className="text-sm text-gray-300 opacity-70">
                    <span className="mr-2">One Direction</span> ·{" "}
                    <span className="ml-2">Four(Deluxe)</span>
                  </p>
                </div>
                <p className="text-sm text-gray-300 opacity-70 mr-3">
                  2014 · 3:46
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
