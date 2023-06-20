import { MouseEvent, useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";

interface ListItemProps {
  active: boolean;
}

const List = styled.ul`
  padding: 0;
`;

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  padding-top: 5px;
  padding-bottom: 5px;
  font-color: blue;
  color: blue;
  background: ${(props) => (props.active === true ? "blue" : "red")};
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // let selectedIndex: number = -1;
  // useState({ selectedIndex: -1,  });
  const [selectedIndex, setSelectedIndex] = useState(0);
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
      <List>
        {items.map((item, index) => (
          <ListItem
            active={selectedIndex === index}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
