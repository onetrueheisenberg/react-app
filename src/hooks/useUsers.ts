import { useEffect, useState } from "react";
import userService, { User } from "../services/user-service";
import { AxiosError } from "axios";

const useUsers = () => {
    const disconnect = () => console.log("disconnecting");
    const [category, setCategory] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
    useEffect(() => {
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
    const { request, cancel } = userService.getAll<User>();
    request
      .then((response) => setUsers(response.data))
      .catch((err) => setError((err as AxiosError).message))
      .finally(() => setLoading(false));

    return () => {
      // cancel();
      disconnect();
    };
  }, []);
  return {users, setUsers, error, setError, isLoading, setLoading};
}

export default useUsers;