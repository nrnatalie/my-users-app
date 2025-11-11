import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	if (!res.ok) throw new Error("Failed to fetch users");
	return res.json();
});

const usersSlice = createSlice({
	name: "users",
	initialState: {
		data: [],
		loading: false,
		error: null,
		search: "",
		currentPage: 1,
		usersPerPage: 4,
	},
	reducers: {
		setSearch(state, action) {
			state.search = action.payload;
			state.currentPage = 1;
		},
		setCurrentPage(state, action) {
			state.currentPage = action.payload;
		},
	},

	extraReducers: (builder) => {
		builder
		.addCase(fetchUsers.pending, (state) => {
			state.loading = true;
			state.error = null;
		})
		.addCase(fetchUsers.fulfilled, (state, action) => {
			state.loading = false;
			state.data = action.payload;
		})
		.addCase(fetchUsers.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		})
    

	}
})

export const { setSearch, setCurrentPage } = usersSlice.actions;
export default usersSlice.reducer;