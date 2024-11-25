"use client";

import Image from "next/image";
import Link from "next/link";

import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function Home() {
  const sizes = ["xs", "s", "m", "l", "xl"];

  const colors = ["black", "red", "gray"];

  const searchParams = useSearchParams();

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <section className=" flex gap-4 py-20 px-10 mx-auto my-20 w-fit bg-red-400">
      <Image src="/favicon.ico" alt="title" width={300} height={300}></Image>

      <div className="flex flex-col justify-between">
        <h3>BIG circle</h3>

        <p> bla bla bla very round bla bla bla</p>

        <div className="flex gap-2 font-bold capitalize">
          {sizes.map((size, i) => (
            <Link
              className={` ${
                searchParams.get("size") == size && `bg-amber-300`
              } ${
                searchParams.get("size") != size && `bg-white`
              }  outline outline-amber-300 py-1 px-2 hover:outline-offset-1 rounded-full w-8 h-8 grid place-content-center `}
              href={`?${createQueryString("size", size)}`}
              key={i}
            >
              {size}
            </Link>
          ))}
        </div>
        <div className="flex gap-2 font-bold capitalize">
          {colors.map((color, i) => (
            <Link
              className={` ${
                searchParams.get("color") == color && `bg-amber-300 `
              } ${
                searchParams.get("color") != color && `bg-white`
              } outline outline-amber-300 py-1 px-2 rounded-md hover:outline-offset-1 `}
              //med createQueryString kan man holde styr på urlen og have flere paramerter, så som size og color.
              href={`?${createQueryString("color", color)}`}
              key={i}
            >
              {color}
            </Link>
          ))}
        </div>

        <Link
          className="bg-amber-300 text-center rounded-md py-2 outline outline-amber-300 hover:outline-offset-2 capitalize"
          href={`/payment?${searchParams}`}
        >
          gå til betaling
        </Link>
      </div>
    </section>
  );
}
