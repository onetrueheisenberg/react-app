import "./App.css";
import ExpenseTrackerForm from "./expense-tracker/ExpenseTrackerForm";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import * as uuid from "uuid";
import ExpenseFilter from "./expense-tracker/ExpenseFilter";
import ExpenseData from "./expense-tracker/ExpenseData";

export type SpendsData = {
  description: string;
  title: string;
  amount: number;
  type: "Entertainment" | "Groceries" | "Utilities";
  id: string;
  delete?: null;
};
type Filters = "All" | "Utilities" | "Entertainment" | "Groceries";
const ExpenseTrackerApp = () => {
  const [spends, setSpends] = useState<SpendsData[]>([]);
  const [filter, setFilter] = useState<Filters>("All");
  const handleSelector = (event) => {
    let value = event.target.value;
    setFilter(value === "All Categories" ? "All" : value);
  };
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
  };
  const onDelete = (id: string) => {
    setSpends([...spends.filter((el) => el.id !== id)]);
  };
  return (
    <>
      <h1>Please enter your spends here</h1>
      <ExpenseTrackerForm onSubmit={onSubmit} />
      <h1>Here's your tabulated spends</h1>
      <ExpenseFilter handleSelector={handleSelector} />
      <ExpenseData
        children={
          filter === "All" ? spends : spends.filter((el) => el.type === filter)
        }
        onDelete={onDelete}
      />
    </>
  );
};

export default ExpenseTrackerApp;
