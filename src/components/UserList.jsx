import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/usersSlice";
import UserCard from "./UserCard";
import Search from "./Search";
import Pagination from "./Pagination";

const UserList = () => {
  const dispatch = useDispatch();
  const { data, loading, error, search, currentPage, usersPerPage } =
    useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const filteredUsers = data.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const indexLast = currentPage * usersPerPage;
  const indexFirst = indexLast - usersPerPage;
  const currentUsers = filteredUsers.slice(indexFirst, indexLast);

  if (loading) return;
  <p className="text-center mt-8">Loading...</p>;

  if (error) return;
  <p className="text-center mt-8 text-red-500">
    Error:
    {error}
  </p>;

  return (
    <div>
      <Search />
      <div className="flex flex-wrap justify-center">
        {currentUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default UserList;
