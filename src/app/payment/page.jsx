import Image from "next/image";

const page = async ({ searchParams }) => {
  const { size, color } = await searchParams;

  return (
    <div className="[&>*]:capitalize">
      <h2 className="text-3xl">title</h2>
      <Image src="/favicon.ico" alt="title" width={150} height={150}></Image>
      <p>size: {size}</p>
      <p>color: {color}</p>
    </div>
  );
};

export default page;
