import Image from "next/image";
import highlightNumbers from "../utils/highlightNumbers";

export default function ExperienceItem({ imageSrc, position, company, period, details, description, stacks }) {
  return (
    <div className="border border-black space-y-1 py-2 px-4 w-full hover:bg-gray-100">
      <div className="flex justify-between space-x-4">
        <div className="flex space-x-2">
          <div className="relative w-8 h-8">
            <Image
              src={imageSrc}
              alt={company}
              fill
              className="object-contain aspect-square"
            />
          </div>
          <div>
            <h3 className="text-left">{position}</h3>
            <p>{company}</p>
          </div>
        </div>
        <p className="text-gray-500 text-right">{period}</p>
      </div>

      {description && <p className="text-justify">{description}</p>}
      <ul className="list-disc pl-5">
        {details.map((detail, idx) => (
          <li key={idx}>
            <p>{highlightNumbers(detail)}</p>
          </li>
        ))}
      </ul>

      {stacks && (
        <div className="border-t border-black">
          <p>
            <span className="font-bold">Stacks:</span> {stacks}
          </p>
        </div>
      )}
    </div>
  );
}
