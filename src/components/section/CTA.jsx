import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <div className="cursor-default">
      <h2>Let’s Build Something Awesome!</h2>
      <p>
        Got an idea you want to bring to life? <br /> Let’s chat and create something cool together!
      </p>

      <div className="w-full flex justify-center my-4">
        <Link
          href="mailto:aqmarinasha@gmail.com"
          className="border border-black inline-flex gap-2 hover:bg-gray-100 px-2 py-1"
        >
          <Mail className="size-5" />
          Contact Me!
        </Link>
      </div>
      <div className="flex justify-center gap-4">
        <Link href="https://github.com/aqmarinas">
          <Image
            src="/img/github.svg"
            alt="Github"
            width={32}
            height={32}
          />
        </Link>
        <Link href="https://linkedin.com/in/aqmarinas">
          <Image
            src="/img/linkedin.svg"
            alt="LinkedIn"
            width={32}
            height={32}
          />
        </Link>
      </div>
    </div>
  );
}
