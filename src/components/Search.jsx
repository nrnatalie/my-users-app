import { useDispatch } from "react-redux";
import { setSearch  } from "../redux/usersSlice";

const Search = () => {
	const dispatch = useDispatch();

	return (
		<input 
		type="text"
		placeholder="Search by name..."
		className="border border-gray-300 rounded-md p-2 mb-4 w-full 
		focus:outline-none focus:ring-2 focus:ring-blue-500"
		onChange={ (e) => dispatch(setSearch(e.target.value))}

		/>
	)
}

export default Search;  