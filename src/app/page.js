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
    <div>
      <Image src="/favicon.ico" alt="title" width={300} height={300}></Image>
      <h3>title</h3>

      <p> bla bla bla</p>

      <div className="flex gap-1 font-bold capitalize">
        {sizes.map((size, i) => (
          <Link href={`?size=${size}`} key={i}>
            {size}
          </Link>
        ))}
      </div>
      <div className="flex gap-1 font-bold capitalize">
        {colors.map((color, i) => (
          <Link href={`?size=${color}`} key={i}>
            {color}
          </Link>
        ))}
      </div>

      <Link href={`/payment`}>gå til betaling</Link>
    </div>
  );
}
