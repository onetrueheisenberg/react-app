import { MouseEvent, useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // let selectedIndex: number = -1;
  // useState({ selectedIndex: -1,  });
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // items = [];
  // const handleClick = (event: MouseEvent, item: any, index: number) => {
  //   selectedIndex = index;
  // };
  const getMessage = () => {
    return items.length === 0 ? <p>No item found !!!</p> : null;
  };
  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
