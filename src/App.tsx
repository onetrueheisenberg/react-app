import ExpenseTracker from "./components/ExpenseTracker";
import "./App.css";
import TableData from "./components/TableData";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import * as uuid from "uuid";

type SpendsData = {
  description: string;
  title: string;
  amount: number;
  type: "Entertainment" | "Groceries" | "Utilities";
  id: number;
};
const App = () => {
  const [spends, setSpends] = useState<SpendsData[]>([]);
  const onSubmit = (data: FieldValues) => {
    setSpends([
      ...spends,
      {
        title: data.title,
        description: data.description,
        type: data.type,
        amount: data.amount,
        id: uuid.v4(),
      },
    ]);
    console.log(spends);
  };
  const onDelete = (id: string) => {
    console.log(spends);
    // setSpends([...spends.filter((el) => el.id !== id)]);
  };
  return (
    <>
      <h1>Please enter your spends here</h1>
      <ExpenseTracker onSubmit={onSubmit} />
      <h1>Here's your tabulated spends</h1>
      <TableData children={spends} onDelete={onDelete} />
    </>
  );
};

export default App;
