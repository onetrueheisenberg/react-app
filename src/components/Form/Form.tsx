// import { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// type Person = {
//   name?: string;
//   age?: number;
// };

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name should be at least 3 characters long." }),
  age: z
    .number({ invalid_type_error: "Age is necessary" })
    .min(18, { message: "Not allowed for people younger than 18" }),
});
// interface FormData {
//   name: string;
//   age: number;
// }
type FormData = z.infer<typeof schema>;
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = (data: FieldValues) => console.log(data);
  console.log(errors);
  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);
  // const [person, setPerson] = useState({
  //   name: "",
  //   age: 0,
  // });
  //   let person: Person = {
  //     name: "",
  //     age: 0,
  //   };
  // const handleFormSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   console.log("submitted!!!", person);
  // };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          // onChange={(event) =>
          //   setPerson({ ...person, name: event.target.value })
          // }
          // value={person.name}
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          // onChange={(event) =>
          //   setPerson({ ...person, age: Number(event.target.value) })
          // }
          // value={person.age}
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
