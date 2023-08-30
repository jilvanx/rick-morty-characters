import React, { ChangeEvent, useEffect, useState } from "react";
import { Input } from "@nextui-org/react";

import { Loading } from "./Loading";
import { ErrorMessage } from "./ErrorMessage";

import { useStore } from "@/store/useStore";

import { useDebounce } from "@/hooks/useDebounce";

import { SearchIcon } from "./Icons";

export const SearchInput = () => {
  const [filter, setFilter] = useState("");
  const [debouncedValue] = useDebounce(filter, 1000);
  const { loading, error } = useStore({ filterParam: debouncedValue });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  useEffect(() => {
    setFilter(debouncedValue);
  }, [debouncedValue]);

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <>
      {loading && <Loading />}
      <div className="my-8 w-96 flex justify-start items-start">
        <Input
          className="text-black"
          placeholder="Type to search a character..."
          startContent={
            <SearchIcon className="text-black/50 text-slate-400 pointer-events-none flex-shrink-0" />
          }
          value={filter}
          onChange={handleChange}
        />
      </div>
    </>
  );
};
