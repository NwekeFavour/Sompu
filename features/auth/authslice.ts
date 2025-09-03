"use client"

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Remove SSR-unsafe localStorage access. Token will be synced on client after mount.
const NEXT_PUBLIC_API_URL= process.env.NEXT_PUBLIC_API_URL

interface AuthState {
  user: any | null;
  token: null;
  loading: boolean;
  error: string | null;
  otpRequested: boolean;
  success: boolean,
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  otpRequested: false,
  success: false,
  token: null
};



// 🔹 Request OTP
export const requestOTP = createAsyncThunk(
  "auth/requestOTP",
  async ({ email }: { email: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${NEXT_PUBLIC_API_URL}/api/auth/login/request-otp`, {
        email,
      });
      return response.data; // axios puts JSON in `data`
    } catch (err: any) {
      // Catch network / server errors
      return rejectWithValue(
        err.response?.data?.error || "Failed to request OTP. Please try again."
      );
    }
  }
);

// 🔹 Verify OTP (this is where you actually log in)
export const verifyOTP = createAsyncThunk(
  "auth/verifyOTP",
  async ({ email, otp }: { email: string, otp: string }, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${NEXT_PUBLIC_API_URL}/api/auth/login/verify-otp`, { email, otp });
      return res.data; // { user, token }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data || "Server Error");
      }
      return rejectWithValue("Server Error");
    }
  }
);

// 🔹 Login with Password
export const loginWithPassword = createAsyncThunk(
  "auth/loginWithPassword",
  async ({ email, password }: { email: string, password: string }, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${NEXT_PUBLIC_API_URL}/api/auth/login/password`, { email, password });
      return res.data; // { user, token }
    } catch (err) {
        if (axios.isAxiosError(err)) {
          return rejectWithValue(err.response?.data || "Server Error");
        }
        return rejectWithValue("Server Error");
    }
  }
);

// 🔹 Register
export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ fullname, email, password }: {fullname: string, email: string, password: string}, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${NEXT_PUBLIC_API_URL}/api/auth/register`, { fullname, email, password });
      return res.data;
    } catch (err) {
      
      if (axios.isAxiosError(err)) {
      return rejectWithValue(err.response?.data || "Server Error");
      } 
      return rejectWithValue("Server Error");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      if (typeof window !== "undefined") {
        localStorage.removeItem("toke n");
      }
    },
    resetSuccess: (state) => {
      state.success = false;
    }
  },
  extraReducers: (builder) => {
    builder
      // requestOTP
      .addCase(requestOTP.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.success = false;
      })
      .addCase(requestOTP.fulfilled, (state) => {
        state.loading = false;
        state.otpRequested = true;
        state.success = true;
      })
      .addCase(requestOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string | null;
        state.success = false;
      })

      // verifyOTP
      .addCase(verifyOTP.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;

      })
      .addCase(verifyOTP.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.success = true;
        if (typeof window !== "undefined") {
          localStorage.setItem("token", action.payload.token);
        }
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string | null;
        state.success = false;
      })

      // loginWithPassword
      .addCase(loginWithPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(loginWithPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.success = true;
        if (typeof window !== "undefined") {
          localStorage.setItem("token", action.payload.token);
        }
      })
      .addCase(loginWithPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string | null;
        state.success = false;
      })

      // registerUser
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.success = true;
        if (typeof window !== "undefined") {
          localStorage.setItem("token", action.payload.token);
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string | null;
        state.success = false;
      });
  },
});

export const { logout, setToken, resetSuccess } = authSlice.actions;
export default authSlice.reducer;
