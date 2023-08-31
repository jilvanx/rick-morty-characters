"use client";

import { useEffect, useState } from "react";

import { CharacterCard } from "@/components/CharacterCard";
import { ErrorMessage } from "@/components/ErrorMessage";
import { Loading } from "@/components/Loading";
import { SearchInput } from "@/components/SearchInput";

import { Character } from "@/graphql/models";

import { useStore } from "@/store/useStore";
import { PaginationSection } from "@/components/PaginationSection";

export default function Home() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { data, loading, error } = useStore({ pageParam: page });

  const handleChangePage = (p: number) => {
    setPage(p);
  };

  useEffect(() => {
    data && setTotalPages(data?.characters.info.pages);
  }, [data]);

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <>
      {loading && <Loading />}
      <SearchInput />
      <div className="gap-4 grid grid-cols-2 sm:grid-cols-4 my-4">
        {data?.characters.results.map((character: Character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      {!loading && (data?.characters.results.length ?? 0) > 0 && (
        <PaginationSection
          page={page}
          totalPages={totalPages}
          handleChangePage={handleChangePage}
        />
      )}
    </>
  );
}
