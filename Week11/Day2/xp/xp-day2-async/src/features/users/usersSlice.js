import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = response.json();
  return data;
});

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    adduser: (state, action) => {
      state.push({ id: nanoid(), name: action.payload });
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { adduser } = usersSlice.actions;
export default usersSlice.reducer;
