"use client";

import Image from "next/image";

const WebsiteDesign = () => {
  return (
    <div className="text-white">
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-4xl  md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
          Design de website <br />
          eficient
        </div>
        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
          Design și dezvoltare de website-uri care livrează rezultate pentru
          afacerea ta.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
        <div className="grid gap-4">
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="/images/p1.png"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="/images/p2.png"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="/images/p3.png"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="/images/p4.png"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="/images/p5.png"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="/images/p6.png"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="/images/p7.png"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="/images/p8.png"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="/images/p9.png"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="/images/p10.png"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="/images/p11.png"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="/images/p12.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDesign;
