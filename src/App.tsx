import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { CircularProgress } from "@mui/material";
import { CanceledError, AxiosError } from "./services/api-client";
import userService, { User } from "./services/user-service";
import useUsers from "./hooks/useUsers";

const connect = () => console.log("connecting");
const disconnect = () => console.log("disconnecting");

const App = () => {
  const [category, setCategory] = useState("");
  const { users, setUsers, error, setError, isLoading, setLoading } =
    useUsers();
  const deleteUser = (user: User) => {
    if (user.id) {
      const originalUsers = [...users];
      setUsers(users.filter((el) => el.id !== user.id));
      const deleteRequest = userService.delete(user.id);
      deleteRequest
        .then(() => {
          console.log("delete successful");
        })
        .catch((err) => {
          setUsers(originalUsers);
        });
    }
  };

  const addUser = () => {
    const originalUsers = [...users];
    let user: User = {
      name: "james bond",
      email: "james@bond.com",
    };
    setUsers([...users, user]);
    const { request, cancel } = userService.add(user);
    request
      .then(({ data: savedUser }) => setUsers([...users, savedUser]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
        console.log(err);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    let newUser: User = {
      name: "james bond",
      email: "james@bond.com",
      id: user.id,
    };
    setUsers(users.map((el) => (el.id === user.id ? newUser : el)));
    const request = userService.update<User>(newUser);
    request
      .then(({ data: savedUser }) => setUsers([...users, savedUser]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
        console.log(err);
      });
  };
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
                  key={user.name}
                  className="list-group-item d-flex justify-content-between"
                >
                  {user.name} {user.id} {user.email}
                  <div>
                    <button
                      onClick={() => updateUser(user)}
                      className="btn btn-outline-secondary mx-1"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteUser(user)}
                      className="btn btn-outline-danger"
                    >
                      Delete
                    </button>
                  </div>
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
