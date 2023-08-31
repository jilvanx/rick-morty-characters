import { useCharacterList } from "@/hooks/useCharacterList";
import { useEffect } from "react";

import { useCharactersStore } from "./useCharacterStore";

type useStoreProps = {
  filterParam?: string;
  pageParam?: number;
};

export const useStore = ({ filterParam, pageParam }: useStoreProps) => {
  const { addFilter, filter } = useCharactersStore();

  const { data, loading, error } = useCharacterList({
    filter: filter ?? filterParam,
    page: filterParam === "" ? 1 : pageParam,
  });

  useEffect(() => {
    if (filterParam || filterParam === "") addFilter(filterParam);
  }, [addFilter, data, filterParam]);

  return { data, loading, error };
};
