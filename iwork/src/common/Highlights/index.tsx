/**
 * Highlight component properties.
 * 
 * @interface HighlightProps
 * @property {string | number | null | undefined} value - The text or number to be highlighted.
 * @property {string | number | null | undefined} searchText - The text or number to search for within the value.
 * @property {string} [color] - Optional color for the text.
 */

/**
 * Highlight component that highlights occurrences of the searchText within the value.
 * 
 * @param {HighlightProps} props - The properties for the Highlight component.
 * @returns {JSX.Element} The rendered Highlight component.
 * 
 * @example
 * <Highlight value="Hello World" searchText="World" color="#E44B48" />
 */
import escapeRegExp from "lodash/escapeRegExp";
import React from "react";

interface HighlightProps {
  value: string | number | null | undefined;
  searchText: string | number | null | undefined;
  color?: string;
}

const Highlight: React.FC<HighlightProps> = ({ value, searchText, color }) => {
  value = value ? value.toString() : "";
  searchText = searchText ? escapeRegExp(searchText.toString()) : "";

  if (!searchText || searchText.trim() === "" || searchText === "+") {
    return <span style={{ color: color ? "#E44B48" : "" }}>{value}</span>;
  }

  const regex = new RegExp(`(${searchText})`, "gi");
  const parts = value.split(regex);

  return (
    <span style={{ color: color ? "#E44B48" : "" }}>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <span key={index} style={{ backgroundColor: "yellow" }}>
            {part}
          </span>
        ) : (
          part
        )
      )}
    </span>
  );
};

export default Highlight;
