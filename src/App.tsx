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
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data[0].name, response.data[0].email);
        setUsers(response.data);
      })
      .catch((error) => {
        console.log("request failed", error);
        setError(error.message);
      });

    return () => disconnect();
  }, []);
  return (
    <>
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
        {error === "" ? (
          <>
            <ul>
              {users.map((user) => (
                <li>
                  {user.name} {user.id} {user.email}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="text-danger">{error}</p>
        )}
        <ProductList category={category} />
      </div>
    </>
  );
};

export default App;
