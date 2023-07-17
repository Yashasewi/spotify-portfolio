import { Skeleton } from "@/components/Skeleton";

export default function loading() {
  return (
    <div className="min-w-full p-12">
      <header className="flex flex-col items-center py-6 gap-y-2">
        <Skeleton className="rounded-full w-[170px] h-[170px]" />
        <Skeleton className="w-[260px] h-[35px] mt-4 rounded-2xl" />

        <div className="flex justify-center mt-5  gap-x-6  ">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <Skeleton className="w-[18px] h-[18px]" />
            <Skeleton className="w-[60px] h-[15px]" />
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <Skeleton className="w-[18px] h-[18px]" />
            <Skeleton className="w-[60px] h-[15px]" />
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <Skeleton className="w-[18px] h-[18px]" />
            <Skeleton className="w-[60px] h-[15px]" />
          </div>
        </div>
        <Skeleton className="w-[120px] h-[40px] mt-4 rounded-3xl" />
      </header>

      <section className="flex w-full my-16 mb-4 ">
        {/* // * top artists of all time */}

        <div className="min-w-[50%]  px-12">
          <div className="flex justify-between items-center">
            <Skeleton className="w-[200px] h-[30px] rounded-2xl" />
            <Skeleton className="w-[120px] h-[40px] rounded-full" />
          </div>
          <div className="flex flex-col gap-y-5 mt-6">
            <div className="flex items-center gap-x-7 ">
              <Skeleton className="rounded-full  w-[50px] h-[50px]" />
              <Skeleton className="w-[170px] h-[18px] rounded-full" />
            </div>
          </div>
          <div className="flex flex-col gap-y-5 mt-6">
            <div className="flex items-center gap-x-7 ">
              <Skeleton className="rounded-full  w-[50px] h-[50px]" />
              <Skeleton className="w-[170px] h-[18px] rounded-full" />
            </div>
          </div>
          <div className="flex flex-col gap-y-5 mt-6">
            <div className="flex items-center gap-x-7 ">
              <Skeleton className="rounded-full  w-[50px] h-[50px]" />
              <Skeleton className="w-[170px] h-[18px] rounded-full" />
            </div>
          </div>
        </div>

        {/* // * top tracks of all time */}

        <div className="min-w-[50%]  px-12">
          <div className="flex justify-between items-center">
            <Skeleton className="w-[200px] h-[30px] rounded-2xl" />
            <Skeleton className="w-[120px] h-[40px] rounded-full" />
          </div>
          <div className="flex flex-col gap-y-5 mt-6">
            <div className="flex items-center gap-x-7 ">
              <div className="rounded-full">
                <Skeleton className="rounded-full  w-[50px] h-[50px]" />
              </div>
              <div className="flex justify-between w-[100%]">
                <div className="flex flex-col  gap-y-1">
                  <Skeleton className="w-[230px] h-[18px] rounded-full" />
                  <span className=" flex gap-x-4">
                    <Skeleton className="w-[120px] h-[14px] rounded-full" />
                    <Skeleton className="w-[120px] h-[14px] rounded-full" />
                  </span>
                </div>
                <span className="flex gap-x-3 ">
                  <Skeleton className="w-[40px] h-[18px] rounded-full" />
                  <Skeleton className="w-[40px] h-[18px] rounded-full" />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 mt-6">
            <div className="flex items-center gap-x-7 ">
              <div className="rounded-full">
                <Skeleton className="rounded-full  w-[50px] h-[50px]" />
              </div>
              <div className="flex justify-between w-[100%]">
                <div className="flex flex-col  gap-y-1">
                  <Skeleton className="w-[230px] h-[18px] rounded-full" />
                  <span className=" flex gap-x-4">
                    <Skeleton className="w-[120px] h-[14px] rounded-full" />
                    <Skeleton className="w-[120px] h-[14px] rounded-full" />
                  </span>
                </div>
                <span className="flex gap-x-3 ">
                  <Skeleton className="w-[40px] h-[18px] rounded-full" />
                  <Skeleton className="w-[40px] h-[18px] rounded-full" />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 mt-6">
            <div className="flex items-center gap-x-7 ">
              <div className="rounded-full">
                <Skeleton className="rounded-full  w-[50px] h-[50px]" />
              </div>
              <div className="flex justify-between w-[100%]">
                <div className="flex flex-col  gap-y-1">
                  <Skeleton className="w-[230px] h-[18px] rounded-full" />
                  <span className=" flex gap-x-4">
                    <Skeleton className="w-[120px] h-[14px] rounded-full" />
                    <Skeleton className="w-[120px] h-[14px] rounded-full" />
                  </span>
                </div>
                <span className="flex gap-x-3 ">
                  <Skeleton className="w-[40px] h-[18px] rounded-full" />
                  <Skeleton className="w-[40px] h-[18px] rounded-full" />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 mt-6">
            <div className="flex items-center gap-x-7 ">
              <div className="rounded-full">
                <Skeleton className="rounded-full  w-[50px] h-[50px]" />
              </div>
              <div className="flex justify-between w-[100%]">
                <div className="flex flex-col  gap-y-1">
                  <Skeleton className="w-[230px] h-[18px] rounded-full" />
                  <span className=" flex gap-x-4">
                    <Skeleton className="w-[120px] h-[14px] rounded-full" />
                    <Skeleton className="w-[120px] h-[14px] rounded-full" />
                  </span>
                </div>
                <span className="flex gap-x-3 ">
                  <Skeleton className="w-[40px] h-[18px] rounded-full" />
                  <Skeleton className="w-[40px] h-[18px] rounded-full" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
