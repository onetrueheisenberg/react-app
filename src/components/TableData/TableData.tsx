import SpendsData from "./../../App";
interface Props {
  children: (typeof SpendsData)[];
}

const TableData = ({ children }: Props) => {
  return <div>{JSON.stringify(children)}</div>;
};

export default TableData;
