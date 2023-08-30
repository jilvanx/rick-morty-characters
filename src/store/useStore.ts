import { useCharacterList } from "@/hooks/useCharacterList";
import { useEffect } from "react";

import { useCharactersStore } from "./useCharacterStore";

type useStoreProps = {
  filterParam?: string;
  pageParam?: number;
};

export const useStore = ({ filterParam, pageParam }: useStoreProps) => {
  const { addResponseCharacters, addFilter, responseCharacters, filter } =
    useCharactersStore();

  console.log("🚀 DEGUB -> filterParam:", filterParam);

  const { data, loading, error } = useCharacterList({
    filter: filter ?? filterParam,
    page: pageParam,
  });

  useEffect(() => {
    if (filterParam || filterParam === "") addFilter(filterParam);

    addResponseCharacters(data);
  }, [addFilter, addResponseCharacters, data, filterParam]);

  return { responseCharacters, loading, error };
};
