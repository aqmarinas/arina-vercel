import highlightNumbers from "../utils/highlightNumbers";

export default function ExperienceItem({ position, company, period, details, description }) {
  return (
    <div className="border border-black py-2 px-4 w-full hover:bg-gray-100">
      <div className="flex justify-between gap-4">
        <h3>{position}</h3>
        <p className="text-gray-500">{period}</p>
      </div>
      <p>{company}</p>
      {description && <p className="text-justify">{description}</p>}
      <ul className="list-disc pl-5">
        {details.map((detail, idx) => (
          <li key={idx}>
            <p>{highlightNumbers(detail)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
