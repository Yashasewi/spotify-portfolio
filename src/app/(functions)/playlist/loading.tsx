import { Skeleton } from "@/components/Skeleton";

export default function loading() {
    return (
        <div className="mx-4 md:mx-8">
            <div className="px-4 md:px-16 py-12 md:py-12">
                <header className="flex justify-between px-5 ">
                    <Skeleton className="w-32 h-4 ml-3" />
                </header>

                <section>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-6">
                        {Array.from({ length: 15 }).map((_, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center text-center gap-y-3 p-2 hover:text-green-500"
                            >
                                <Skeleton className="w-[230px] h-[230px] rounded-none" />
                                <span className="flex flex-col gap-y-2 items-center justify-center">
                                    <Skeleton className="w-[160px] h-[10px]" />
                                    <Skeleton className="w-[100px] h-[8px]" />
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
