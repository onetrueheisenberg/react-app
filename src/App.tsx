import ExpenseTracker from "./components/ExpenseTracker";
import "./App.css";
import TableData from "./components/TableData";
import { useState } from "react";
import { FieldValues } from "react-hook-form";

type SpendsData = {
  description: string;
  title: string;
  amount: number;
  type: "Entertainment" | "Groceries" | "Utilities";
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
      },
    ]);
    console.log(spends);
  };
  return (
    <>
      <h1>Please enter your spends here</h1>
      <ExpenseTracker onSubmit={onSubmit} />
      <h1>Here's your tabulated spends</h1>
      <TableData children={spends} />
    </>
  );
};

export default App;
