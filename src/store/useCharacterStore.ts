import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { ResponseCharacters } from "@/graphql/models";

type ResponseCharactersState = {
  responseCharacters: ResponseCharacters | undefined;
  filter: string;
  page: number;
  addResponseCharacters: (
    responseCharacters: ResponseCharacters | undefined
  ) => void;
  addFilter: (filter: string) => void;
};

export const useCharactersStore = create<ResponseCharactersState>()(
  devtools((set) => ({
    responseCharacters: undefined,
    filter: "",
    page: 1,

    addResponseCharacters: (responseCharacters) => {
      set(() => ({
        responseCharacters,
      }));
    },

    addFilter: (filter: string) => {
      set((state) => ({
        ...state,
        filter,
      }));
    },
  }))
);
