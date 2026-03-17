import { create } from "zustand";
import { DeleteUserAPI, getAllUsersAPI, loginAPI, rgisterAPI , UpdateUserAPI } from "../api/axios";
import { persist } from "zustand/middleware";

export const useAuthStore = create()(
  persist(
    (set, get) => ({
      users: [],
      loading: false,
      error: null,
      message: false,
      user: null,
      getAllusers: async () => {
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
      rgisterUser: async (data) => {
        try {
          set({ loading: true, error: null });
          const res = await rgisterAPI(data);
          set({ message: true });
          setTimeout(() => set({ message: false }), 2000);
          set({ users: [...get().users, res.data], loading: false });
        } catch (error) {
          set({ error: error.message, loading: false });
        }
      },
       deleteUser: async (id) => {
          try {
            set({ loading: true, error: null });
            await DeleteUserAPI(id);
            set({ users: get().users.filter((u) => u._id !== id) });
            set({ loading: false });
          } catch (error) {
            set({ error: error.message, loading: false });
          }
        },
       updateUser: async (id, data) => {
          try {
            set({ loading: true, error: null });
            const res = await UpdateUserAPI(id, data);
            set({
              users: get().users.filter((u) => (u._id !== id ? res.data : u)),
            });
            set({ loading: false });
          } catch (error) {
            set({ error: error.message, loading: false });
          }
        },
        logout :()=> set({user : null})
    }),
    { name: "auth", partialize: (state) => ({ user: state.user }) },
  ),
);
