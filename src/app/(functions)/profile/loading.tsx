import { Skeleton } from "@/components/Skeleton";

export default function Loading() {
    return (
        <div className="mx-4 sm:mx-8">
            <div className="px-4 md:px-16 py-6 md:py-12">
                <header className="flex flex-col items-center py-6 gap-y-2">
                    <Skeleton className="rounded-full w-[140px] h-[140px] sm:w-[170px] sm:h-[170px]" />
                    <Skeleton className="w-[220px] h-[30px] mt-4 rounded-2xl sm:w-[260px] sm:h-[35px]" />

                    <div className="flex justify-center mt-5 gap-x-6 ">
                        <div className="flex flex-col justify-center items-center gap-y-2">
                            <Skeleton className="w-[14px] h-[14px] sm:w-[18px] sm:h-[18px]" />
                            <Skeleton className="w-[50px] h-[12px] sm:w-[60px] sm:h-[15px]" />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-y-2">
                            <Skeleton className="w-[14px] h-[14px] sm:w-[18px] sm:h-[18px]" />
                            <Skeleton className="w-[50px] h-[12px] sm:w-[60px] sm:h-[15px]" />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-y-2">
                            <Skeleton className="w-[14px] h-[14px] sm:w-[18px] sm:h-[18px]" />
                            <Skeleton className="w-[50px] h-[12px] sm:w-[60px] sm:h-[15px]" />
                        </div>
                    </div>
                    <Skeleton className="w-[100px] h-[34px] mt-4 rounded-3xl sm:w-[120px] sm:h-[40px]" />
                </header>

                <section className="flex flex-wrap my-16 mb-4">
                    {/* // * top artists of all time */}

                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 px-4 sm:px-12">
                        <div className="flex justify-between items-center">
                            <Skeleton className="w-[140px] h-[24px] rounded-2xl sm:w-[200px] sm:h-[30px]" />
                            <Skeleton className="w-[80px] h-[30px] rounded-full sm:w-[120px] sm:h-[40px]" />
                        </div>
                        {Array.from({ length: 3 }).map((_, index) => (
                            <div
                                className="flex items-center gap-x-4 mt-6"
                                key={index}
                            >
                                <Skeleton className="rounded-full w-[36px] h-[36px] sm:w-[50px] sm:h-[50px]" />
                                <Skeleton className="w-[120px] h-[14px] rounded-full sm:w-[170px] sm:h-[18px]" />
                            </div>
                        ))}
                    </div>

                    {/* // * top tracks of all time */}

                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 px-4 sm:px-12 mt-6 sm:mt-0">
                        <div className="flex justify-between items-center">
                            <Skeleton className="w-[140px] h-[24px] rounded-2xl sm:w-[200px] sm:h-[30px]" />
                            <Skeleton className="w-[80px] h-[30px] rounded-full sm:w-[120px] sm:h-[40px]" />
                        </div>
                        {Array.from({ length: 3 }).map((_, index) => (
                            <div
                                className="flex items-center gap-x-4 mt-6"
                                key={index}
                            >
                                <div className="rounded-full">
                                    <Skeleton className="w-[36px] h-[36px] sm:w-[50px] sm:h-[50px]" />
                                </div>
                                <div className="flex justify-between w-[100%] sm:w-[auto]">
                                    <div className="flex flex-col gap-y-1">
                                        <Skeleton className="w-[190px] h-[18px] rounded-full sm:w-[230px] sm:h-[18px]" />
                                        <div className="flex gap-x-4">
                                            <Skeleton className="w-[100px] h-[12px] rounded-full sm:w-[120px] sm:h-[14px]" />
                                            <Skeleton className="w-[100px] h-[12px] rounded-full sm:w-[120px] sm:h-[14px]" />
                                        </div>
                                    </div>
                                    <div className="flex gap-x-3">
                                        <Skeleton className="w-[32px] h-[18px] rounded-full sm:w-[40px] sm:h-[18px]" />
                                        <Skeleton className="w-[32px] h-[18px] rounded-full sm:w-[40px] sm:h-[18px]" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
