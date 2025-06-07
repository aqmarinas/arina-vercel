import Badge from "./ui/Badge";

export default function StackGroup({ title, items }) {
  return (
    <div>
      <h3 className="text-sm font-semibold cursor-default">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((badge) => (
          <Badge
            key={badge.title}
            src={badge.src}
            title={badge.title}
          />
        ))}
      </div>
    </div>
  );
}
