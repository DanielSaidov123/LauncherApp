import { create } from "zustand";
import { getAllUsersAPI, loginAPI } from "../api/axios";
import { persist } from "zustand/middleware";

export const useAuthStore = create()(
  persist(
    (set) => ({
      users: [],
      loading: false,
      error: null,
      message: false,
      user: null,

      getLaunchers: async () => {
        try {
          set({ loading: true, error: null });
          const res = await getAllUsersAPI();

          set({ users: res.data, loading: false });
        } catch (error) {
          set({ error: error.message, loading: false });
        }
      },

      loginUser: async (data) => {
        try {
          set({ loading: true, error: null });
          const res = await loginAPI(data);

          set({ user: res.data, loading: false });
        } catch (error) {
          set({ error: error.message, loading: false });
        }
      },
    }),
    { name: "auth" ,
        partialize : (state)=>({user : state.user})
    }
  ),
);
