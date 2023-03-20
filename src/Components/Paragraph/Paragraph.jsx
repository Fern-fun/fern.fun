function addNonbreakingSpaces(text) {
  let conjunctions = ["and", "or", "but", "because", "for", "if", "when"];

  conjunctions = conjunctions.concat(
    conjunctions.map((conjunction) => {
      return conjunction[0].toUpperCase() + conjunction.slice(1);
    })
  );

  conjunctions.forEach((conjunction) => {
    text = text.replaceAll(` ${conjunction} `, ` ${conjunction}&nbsp;`);
  });

  return text;
}

export function InlineText({ children }) {
  // require that children is a string
  if (typeof children !== "string") {
    throw new Error("Span component must have a string as a child");
  }

  // return the text with special encies that will be displayed correctly
  return (
    <span
      dangerouslySetInnerHTML={{ __html: addNonbreakingSpaces(children) }}
    />
  );
}

export function Paragraph({ children, className, style }) {
  // require that children is a string
  if (typeof children !== "string") {
    throw new Error("Paragraph component must have a string as a child");
  }

  return (
    <p
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: addNonbreakingSpaces(children) }}
    />
  );
}
