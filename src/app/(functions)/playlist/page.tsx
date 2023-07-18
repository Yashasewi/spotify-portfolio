import Playlist from "@/components/Playlist";

// * Playlist Page

export default function PlaylistPage() {
  // console.log(playlistItems[0]);

  return (
    <div>
      <div className="mx-8">
        <div className="px-16 py-12">
          <header className="flex justify-between px-5 ">
            <h1 className="text-xl font-semibold">Your Playlist</h1>
          </header>
          <Playlist />
        </div>
      </div>
    </div>
  );
}
