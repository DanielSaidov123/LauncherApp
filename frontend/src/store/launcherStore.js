import { create } from "zustand";
import {
  createLaunchersAPI,
  DeleteLaunchersByIdAPI,
  getLaunchersAPI,
  UpdateLaunchersByIdAPI,
} from "../api/axios";

export const useLauncherStore = create((set, get) => ({
  launchers: [],
  loading: false,
  error: null,
  message: false,
  serch: "",
  rocketFilter: "",
  getLaunchers: async () => {
    try {
      set({ loading: true, error: null });
      const res = await getLaunchersAPI();

      set({ launchers: res.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  addLaunchers: async (data) => {
    try {
      set({ loading: true, error: null });
      const res = await createLaunchersAPI(data);
      console.log(res);
      set({ message: true });
      setTimeout(() => set({ message: false }), 2000);
      set({ launchers: [...get().launchers, res.data], loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  deleteLauncher: async (id) => {
    try {
      set({ loading: true, error: null });
      await DeleteLaunchersByIdAPI(id);
      set({ launchers: get().launchers.filter((l) => l._id !== id) });
      set({ loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  updateLauncher: async (id, data) => {
    try {
      set({ loading: true, error: null });
      const res = await UpdateLaunchersByIdAPI(id, data);
      set({
        launchers: get().launchers.filter((l) => (l._id !== id ? res.data : l)),
      });
      set({ loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  setRocket: (value) => {
    set({ rocketFilter: value });
  },
  setSerce: (value) => {
    set({ serch: value });
  },
  filterLaunchers: () => {
    const { launchers, serch, rocketFilter } = get();

    return launchers.filter(
      (l) =>
        l.city.includes(serch) &&
        (rocketFilter === "" || l.rocketType === rocketFilter),
    );
  },
}));
