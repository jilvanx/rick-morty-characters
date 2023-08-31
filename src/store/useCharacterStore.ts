import { create } from "zustand";
import { devtools } from "zustand/middleware";

type ResponseCharactersState = {
  filter: string;
  addFilter: (filter: string) => void;
};

export const useCharactersStore = create<ResponseCharactersState>()(
  devtools((set) => ({
    responseCharacters: undefined,
    filter: "",

    addFilter: (filter: string) => {
      set((state) => ({
        ...state,
        filter,
      }));
    },
  })),
);
