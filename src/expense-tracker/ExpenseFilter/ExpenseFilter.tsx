import { ChangeEvent } from "react";

interface Props {
  handleSelector: (event: ChangeEvent) => void;
}

const types = [
  "All Categories",
  "Groceries",
  "Utilities",
  "Entertainment",
] as const;

const ExpenseFilter = ({ handleSelector }: Props) => {
  return (
    <div className="mb-3">
      <select
        name="type"
        id="type"
        className="form-control"
        onChange={(event) => handleSelector(event)}
      >
        {Object.values(types).map((type) => (
          <option value={type} key={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
