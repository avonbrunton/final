import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: 0,
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      const { payload } = action;
      state.token = payload;
      localStorage.setItem("token", payload);
    },
    setUser: (state, action) => {
      const { payload } = action;
      state.user = payload;
    },
    logOut: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
    },
  },
});

// Action creators are generated for each case reducer function
export const { setToken, setUser, logOut } = userSlice.actions;

export default userSlice.reducer;
