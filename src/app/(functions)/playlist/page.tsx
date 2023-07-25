import Playlist from "@/components/Playlist";

// * Playlist Page

export default function PlaylistPage() {
    // console.log(playlistItems[0]);

    return (
        <div>
            <div className="md:mx-8 ">
                <div className=" px-8 py-12 md:px-16 md:py-12">
                    <header className="flex justify-between px-5 py-4">
                        <h1 className="text-xl font-semibold">Your Playlist</h1>
                    </header>
                    <Playlist />
                </div>
            </div>
        </div>
    );
}
