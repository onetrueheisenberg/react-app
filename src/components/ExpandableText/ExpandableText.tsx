import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [show, setShow] = useState(false);
  if (children.length <= maxChars) {
    return <p>{children}</p>;
  } else {
    const text = children.substring(0, maxChars);
    return (
      <p>
        {text}
        {show ? children.substring(maxChars) : "..."}
        <button onClick={() => setShow(!show)}>{show ? "Less" : "More"}</button>
      </p>
    );
  }
};

export default ExpandableText;
