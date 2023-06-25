import { zodResolver } from "@hookform/resolvers/zod";
// import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
  onSubmit: (data: FieldValues) => void;
}

const types = ["Groceries", "Utilities", "Entertainment"] as const;
const schema = z.object({
  description: z
    .string()
    .max(200, { message: "Please keep the description to 200 characters" }),
  amount: z
    .number({ invalid_type_error: "Please enter a number" })
    .positive({ message: "Number should be greater than 0." })
    .default(0),
  type: z.enum(types).default(types[2]),
  title: z
    .string()
    .min(5, { message: "Please enter a meaningful title for the expense" }),
});

type FormData = z.infer<typeof schema>;

const ExpenseTracker = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  // const onSubmit = (data: FieldValues) => {
  //   setSpends([
  //     ...spends,
  //     {
  //       description: data.description,
  //       amount: data.amount,
  //       type: data.type,
  //       title: data.title,
  //     },
  //   ]);
  //   console.log(spends);
  // };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">
            <sub>{errors.description.message}</sub>
          </p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          How much did you spend ?
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">
            <strong>{errors.amount.message}</strong>
          </p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="type" className="form-label">
          Type of spend
        </label>
        <select
          {...register("type")}
          name="type"
          id="type"
          className="form-control"
        >
          {Object.values(types).map((type) => (
            <option value={type} key={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          What did you spend it on ?
        </label>
        <input
          {...register("title")}
          id="title"
          type="text"
          className="form-control"
        />
        {errors.title && (
          <p className="text-danger">
            <sub>{errors.title.message}</sub>
          </p>
        )}
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ExpenseTracker;
