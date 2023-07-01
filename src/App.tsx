import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
}

const connect = () => console.log("connecting");
const disconnect = () => console.log("disconnecting");

const App = () => {
  const [category, setCategory] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data[0].name, response.data[0].email);
        setUsers(response.data);
      });

    return () => disconnect();
  }, []);
  return (
    <div>
      <select
        name=""
        onChange={(event) => setCategory(event.target.value)}
        id=""
        className="form-select"
      >
        <option value="Household">Household</option>
        <option value="Clothing">Clothing</option>
      </select>
      <ul>
        {users.map((user) => (
          <li>
            {user.name} {user.id} {user.email}
          </li>
        ))}
      </ul>
      <ProductList category={category} />
    </div>
  );
};

export default App;
