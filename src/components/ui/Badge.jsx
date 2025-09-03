import Image from "next/image";

export default function Badge({ src, title, priority }) {
  const isPriority = priority === 1;

  return (
    <div
      className={`
        border border-black flex justify-between gap-1 px-2 py-1
        ${isPriority ? "bg-black text-white hover:bg-gray-900" : "hover:bg-gray-100"}
      `}
    >
      {src && (
        <div className="relative w-5 h-5">
          <Image
            src={src}
            alt={title}
            className={`object-contain ${isPriority ? "invert" : ""}`}
            fill
          />
        </div>
      )}
      <p className="text-sm cursor-default">{title}</p>
    </div>
  );
}
