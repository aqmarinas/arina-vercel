import { ctaData } from "@/src/constant/cta";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const iconConfig = {
  width: 32,
  height: 32,
};

export default function CTA() {
  return (
    <div className="cursor-default">
      <h2>{ctaData.title}</h2>
      <p>
        {ctaData.description} <br /> {ctaData.subDescription}
      </p>

      <div className="w-full flex justify-center my-4">
        <Link
          href={`mailto:${ctaData.contact.email}`}
          className="border border-black inline-flex gap-2 hover:bg-gray-100 px-2 py-1"
        >
          <Mail className="size-5" />
          {ctaData.contact.buttonText}
        </Link>
      </div>

      <div className="flex justify-center gap-4">
        {ctaData.socialLinks.map((social) => (
          <Link
            key={social.name}
            href={social.url}
            legacyBehavior
          >
            <a
              target="_blank"
              rel="noopener nerefferer"
            >
              <Image
                src={social.icon}
                alt={social.alt}
                width={iconConfig.width}
                height={iconConfig.height}
              />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
