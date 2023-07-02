import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import axios, { AxiosError, CanceledError } from "axios";
import { CircularProgress } from "@mui/material";

interface User {
  id?: number;
  name: string;
  email: string;
}

const connect = () => console.log("connecting");
const disconnect = () => console.log("disconnecting");

const App = () => {
  const [category, setCategory] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((el) => el.id !== user.id));
    axios
      .delete(
        `https://jsonplaceholder.typicode.com/usersasdjjasnajnd/${user.id}`
      )
      .catch((err) => {
        console.log(err.message);
        setUsers(originalUsers);
      });
  };

  const addUser = () => {
    const originalUsers = [...users];
    let user: User = {
      name: "james bond",
      email: "james@bond.com",
    };
    setUsers([...users, user]);
    axios
      .post(`https://jsonplaceholder.typicode.com/usersjsadnajsnajdsn`, user)
      .then(({ data: savedUser }) => setUsers([...users, savedUser]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
        console.log(err);
      });
  };
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    // const fetch = async () => {
    //   try {
    //     const response = await axios.get<User[]>(
    //       "https://jsonplaceholder.typicode.com/users",
    //       { signal: controller.signal }
    //     );
    //     setUsers(response.data);
    //   } catch (err) {
    //     if (err instanceof CanceledError) return;
    //     setError((err as AxiosError).message);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetch();
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((response) => setUsers(response.data))
      .catch((err) => setError((err as AxiosError).message))
      .finally(() => setLoading(false));

    return () => {
      // controller.abort();
      disconnect();
    };
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
        <button className="btn-primary mb-3" onClick={() => addUser()}>
          Add
        </button>
        {isLoading ? <CircularProgress /> : null}
        {isLoading && <div className="spinner-loader"></div>}
        {error === "" ? (
          <>
            <ul className="list-group">
              {users.map((user) => (
                <li
                  key={user.id}
                  className="list-group-item d-flex justify-content-between"
                >
                  {user.name} {user.id} {user.email}
                  <button
                    onClick={() => deleteUser(user)}
                    className="btn btn-outline-danger"
                  >
                    Delete
                  </button>
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
