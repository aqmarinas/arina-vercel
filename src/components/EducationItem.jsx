import Image from "next/image";

export default function EducationItem({ imageSrc, name, field, period, details }) {
  return (
    <div className="border border-black flex gap-2 p-2 w-full hover:bg-gray-100 items-start">
      <Image
        src={imageSrc}
        alt={name}
        width={32}
        height={32}
        className="object-contain aspect-square"
      />
      <div>
        <h3>{name}</h3>
        <p>{field}</p>
        <p className="text-gray-500">{period}</p>
        <ul className="list-disc pl-5">
          {details.map((detail, index) => (
            <li key={index}>
              <p className="text-left">{detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
