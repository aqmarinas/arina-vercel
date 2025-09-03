import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ imageSrc, name, description, stacks, link, period }) {
  return (
    <div className="block max-w-full border border-black overflow-hidden">
      <div className="relative group w-full h-96 sm:h-96 md:h-auto md:aspect-video">
        <Image
          className="object-cover saturate-0 group-hover:saturate-100 transition duration-500 transform group-hover:scale-105"
          fill
          src={imageSrc}
          alt={name}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="absolute bottom-0 left-0 p-5 space-y-2">
          <div className="flex justify-between gap-4">
            <h1 className="text-white">{name}</h1>
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white text-sm bg-white/25 border border-white px-2 py-1 hover:bg-white/40 transition"
            >
              <ExternalLink className="size-4" />
              View Project
            </Link>
          </div>
          <p className="text-white">{period}</p>
          <p className="text-white text-justify text-ellipsis overflow-hidden">{description}</p>
          <div className="flex flex-wrap gap-2">
            {stacks.map((stack, index) => (
              <div
                key={index}
                className="bg-white/25 border border-white px-2 py-1"
              >
                <p className="cursor-default text-white">{stack}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
