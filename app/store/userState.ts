import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

type User = {
    username: string;
    modelSelect: string;
    providerSelect: string;
};

type UserState = {
    user: User;
    setUser: (user: Partial<User>) => void;
    clearUser: () => void;
    setModelSelect: (modelSelect: string) => void;
    setProviderSelect: (providerSelect: string) => void;
};

const initialUser: User = {
    username: '',
    modelSelect: '',
    providerSelect: '',
};

const useUserStore = create<UserState, [['zustand/devtools', never], ['zustand/persist', UserState]]>(
  devtools(
    persist(
      (set) => ({
        user: initialUser,
        setUser: (newUserData) => set((state) => ({ user: { ...state.user, ...newUserData } })),
        clearUser: () => set({ user: initialUser }),
        setModelSelect: (modelSelect) => set((state) => ({ user: { ...state.user, modelSelect } })),
        setProviderSelect: (providerSelect) => set((state) => ({ user: { ...state.user, providerSelect } }))
      }),
      {
        name: 'userStorage',
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export default useUserStore;
