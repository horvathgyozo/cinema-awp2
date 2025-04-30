import { create } from "zustand";

interface AuthStoreState {
  email: string;
  isAuthenticated: boolean;
  login: (email: string) => void;
}

export const useAuthStore = create<AuthStoreState>((set) => ({
  email: "",
  isAuthenticated: false,
  login: (email: string) => set({ email, isAuthenticated: true }),
}));
