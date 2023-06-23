import { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
type Person = {
  name?: string;
  age?: number;
};

interface FormData {
  name: string;
  age: number;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FieldValues) => console.log(data);
  console.log(errors);
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
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
          {...register("name", { minLength: 3, required: true })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">Name is required.</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">
            Name should be minimum length of 3 characters.
          </p>
        )}
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
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
