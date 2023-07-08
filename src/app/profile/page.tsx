import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <>
      <div>
        <Image
          className="rounded-full"
          src="https://i.scdn.co/image/ab67757000003b82d008b7ccf168c1d105b9e6be"
          alt="chutiya_hu_main"
          width={200}
          height={200}
        />
        <Link href={"#"}>
          <h1>Yashasewi Singh</h1>
        </Link>
      </div>
    </>
  );
}

export default page;
