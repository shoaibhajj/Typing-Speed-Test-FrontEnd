import React, { ReactNode } from "react";

const Word = ({
  text,
  active,
  correct,
  correctChars,
}: {
  children?: ReactNode;
  text: string;
  active: boolean;
  correct: null | boolean;
  correctChars?: boolean[]; // array of per-character correctness
}) => {
  if (correct === true) return <span style={{ color: "green" }}>{text} </span>;
  if (correct === false) return <span style={{ color: "red" }}>{text} </span>;

  if (active && correctChars) {
    return (
      <span>
        {text.split("").map((char, i) => {
          let color = "white";
          let background = "none";
          if (i < correctChars.length) {
            color = correctChars[i] ? "green" : "red";
          }
          if (i === correctChars.length) background = "#333333";
          return (
            <span key={i} style={{ color, background }} className="p-0.25">
              {char}
            </span>
          );
        })}{" "}
      </span>
    );
  }

  if (active) return <span className="font-bold">{text} </span>;
  return <span>{text} </span>;
};

export default React.memo(Word);
