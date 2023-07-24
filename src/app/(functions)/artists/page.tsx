// "use client";
import Artist from "@/components/Artist";

// * This is the code for the Top Artists Page

export default function ArtistPage() {
    // TODO: Add a Time Range Selector for Top Artists (All Time, Last 6 Months, Last 4 Weeks)

    return (
        <div className="sm:mx-8 ">
            <div className="px-8 sm:px-16 py-12">
                <header className="flex justify-between px-5 ">
                    <h1 className="text-xl font-semibold">Top Artists</h1>
                    <div className="text-base  gap-x-3 hidden">
                        <span className="underline underline-offset-4">
                            All Time
                        </span>
                        <span>Last 6 Month</span>
                        <span>Last 4 Weeks</span>
                    </div>
                </header>
                <Artist />
            </div>
        </div>
    );
}
