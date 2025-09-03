import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const NEXT_PUBLIC_API_URL= process.env.NEXT_PUBLIC_API_URL


interface ProfileState {
  loading: boolean;
  success: boolean;
  error: string | null;
  data: any; // you can type this with your UserProfile interface
}

const initialState: ProfileState = {
  loading: false,
  success: false,
  error: null,
  data: null,
};

// AsyncThunk for profile setup
export const setupProfile = createAsyncThunk(
  "profile/setup",
  async (profileData: any, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${NEXT_PUBLIC_API_URL}/api/profile/setup`, profileData);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Profile setup failed");
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    resetProfileState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // pending (track when user clicks "setup")
      .addCase(setupProfile.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      // fulfilled (track success)
      .addCase(setupProfile.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.success = true;
        state.data = action.payload;
      })
      // rejected (track failure)
      .addCase(setupProfile.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetProfileState } = profileSlice.actions;
export default profileSlice.reducer;
