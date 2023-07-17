import { Skeleton } from "@/components/Skeleton";

export default function loading() {
  return (
    <div className="mx-8">
      <div className="px-16 py-12">
        <header className="flex justify-between px-5 ">
          <Skeleton className="w-32 h-4 ml-3" />

          <div className="flex gap-x-3 ">
            <Skeleton className="w-20 h-3" />
            <Skeleton className="w-20 h-3" />
            <Skeleton className="w-20 h-3" />
          </div>
        </header>

        <section>
          <div className="grid grid-cols-5 gap-4 mt-12">
            <div className="flex flex-col items-center justify-center text-center gap-3 p-2">
              <div className="inline-block w-[200px] h-[200px]">
                <div className="rounded-full  aspect-square">
                  <Skeleton className="w-[200px] h-[200px] rounded-full" />
                </div>
              </div>
              <Skeleton className="w-24 h-4" />
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-3 p-2">
              <div className="inline-block w-[200px] h-[200px]">
                <div className="rounded-full  aspect-square">
                  <Skeleton className="w-[200px] h-[200px] rounded-full" />
                </div>
              </div>
              <Skeleton className="w-24 h-4" />
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-3 p-2">
              <div className="inline-block w-[200px] h-[200px]">
                <div className="rounded-full  aspect-square">
                  <Skeleton className="w-[200px] h-[200px] rounded-full" />
                </div>
              </div>
              <Skeleton className="w-24 h-4" />
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-3 p-2">
              <div className="inline-block w-[200px] h-[200px]">
                <div className="rounded-full  aspect-square">
                  <Skeleton className="w-[200px] h-[200px] rounded-full" />
                </div>
              </div>
              <Skeleton className="w-24 h-4" />
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-3 p-2">
              <div className="inline-block w-[200px] h-[200px]">
                <div className="rounded-full  aspect-square">
                  <Skeleton className="w-[200px] h-[200px] rounded-full" />
                </div>
              </div>
              <Skeleton className="w-24 h-4" />
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-3 p-2">
              <div className="inline-block w-[200px] h-[200px]">
                <div className="rounded-full  aspect-square">
                  <Skeleton className="w-[200px] h-[200px] rounded-full" />
                </div>
              </div>
              <Skeleton className="w-24 h-4" />
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-3 p-2">
              <div className="inline-block w-[200px] h-[200px]">
                <div className="rounded-full  aspect-square">
                  <Skeleton className="w-[200px] h-[200px] rounded-full" />
                </div>
              </div>
              <Skeleton className="w-24 h-4" />
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-3 p-2">
              <div className="inline-block w-[200px] h-[200px]">
                <div className="rounded-full  aspect-square">
                  <Skeleton className="w-[200px] h-[200px] rounded-full" />
                </div>
              </div>
              <Skeleton className="w-24 h-4" />
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-3 p-2">
              <div className="inline-block w-[200px] h-[200px]">
                <div className="rounded-full  aspect-square">
                  <Skeleton className="w-[200px] h-[200px] rounded-full" />
                </div>
              </div>
              <Skeleton className="w-24 h-4" />
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-3 p-2">
              <div className="inline-block w-[200px] h-[200px]">
                <div className="rounded-full  aspect-square">
                  <Skeleton className="w-[200px] h-[200px] rounded-full" />
                </div>
              </div>
              <Skeleton className="w-24 h-4" />
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-3 p-2">
              <div className="inline-block w-[200px] h-[200px]">
                <div className="rounded-full  aspect-square">
                  <Skeleton className="w-[200px] h-[200px] rounded-full" />
                </div>
              </div>
              <Skeleton className="w-24 h-4" />
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-3 p-2">
              <div className="inline-block w-[200px] h-[200px]">
                <div className="rounded-full  aspect-square">
                  <Skeleton className="w-[200px] h-[200px] rounded-full" />
                </div>
              </div>
              <Skeleton className="w-24 h-4" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
