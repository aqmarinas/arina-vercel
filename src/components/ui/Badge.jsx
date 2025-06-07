import Image from "next/image";

export default function Badge({ src, title }) {
  return (
    <div className="border border-black flex justify-between gap-1 px-2 py-1 hover:bg-gray-100">
      <Image
        src={src}
        alt={title}
        width={20}
        height={20}
      />
      <p className="text-sm cursor-default">{title}</p>
    </div>
  );
}
