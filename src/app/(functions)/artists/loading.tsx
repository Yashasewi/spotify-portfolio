import { Skeleton } from "@/components/Skeleton";

export default function Loading() {
    return (
        <div className="mx-4 sm:mx-8">
            <div className="px-4 md:px-16 py-6 md:py-12">
                <header className="flex flex-col sm:flex-row justify-between items-center px-2 sm:px-5 mb-4">
                    <Skeleton className="w-24 h-4 mb-2 sm:mb-0" />
                    <div className="flex gap-x-3">
                        <Skeleton className="w-16 h-3" />
                        <Skeleton className="w-16 h-3" />
                        <Skeleton className="w-16 h-3" />
                    </div>
                </header>

                <section>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
                        {Array.from({ length: 12 }).map((_, index) => (
                            <div
                                className="flex flex-col items-center justify-center text-center gap-3 p-2"
                                key={index}
                            >
                                <div className="inline-block w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] lg:w-[200px] lg:h-[200px] md:w-[200px] md:h-[200px] ">
                                    <div className="rounded-full aspect-square">
                                        <Skeleton className="w-full h-full rounded-full" />
                                    </div>
                                </div>
                                <Skeleton className="w-24 h-4" />
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
