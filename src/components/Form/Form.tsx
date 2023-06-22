import { FormEvent, useRef, useState } from "react";
type Person = {
  name?: string;
  age?: number;
};

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const [person, setPerson] = useState({
    name: "",
    age: 0,
  });
  //   let person: Person = {
  //     name: "",
  //     age: 0,
  //   };
  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("submitted!!!", person);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          value={person.name}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, age: Number(event.target.value) })
          }
          value={person.age}
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
