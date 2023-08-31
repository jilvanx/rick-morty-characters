import { useQuery } from "@apollo/client";

import { ResponseCharacters } from "@/graphql/models";
import { GET_ALL_CHARACTERS } from "@/graphql/queries";

type Props = {
  page?: number;
  filter?: string;
};
export const useCharacterList = (props?: Props) => {
  let page: number | undefined, filter: string | undefined;

  if (props) {
    page = props.page;
    filter = props.filter;
  }

  const { data, error, loading } = useQuery<ResponseCharacters>(
    GET_ALL_CHARACTERS,
    {
      variables: {
        page: page ?? 0,
        filter: filter ?? "",
      },
    },
  );

  return { data, loading, error };
};
