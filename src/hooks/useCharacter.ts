import { useQuery } from "@apollo/client";

import { ResponseCharacter } from "@/graphql/models";
import { GET_CHARACTER_BY_ID } from "@/graphql/queries";

export const useCharacter = (id: number) => {
  const { data, error, loading } = useQuery<ResponseCharacter>(
    GET_CHARACTER_BY_ID,
    {
      variables: {
        id,
      },
    },
  );

  return { data, error, loading };
};
