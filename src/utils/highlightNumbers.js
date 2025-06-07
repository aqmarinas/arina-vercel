export default function highlightNumbers(text) {
  return text.split(/(\d+%?|\d+\+?)/g).map((part, index) => {
    if (/^\d+%?$|^\d+\+?$/.test(part)) {
      return (
        <span
          key={index}
          className="font-semibold"
        >
          {part}
        </span>
      );
    }
    return part;
  });
}
