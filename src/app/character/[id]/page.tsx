"use client";

import { useRouter } from "next/navigation";

import { useCharacter } from "@/hooks/useCharacter";
import { Loading } from "@/components/Loading";
import { ErrorMessage } from "@/components/ErrorMessage";
import { CharacterInfo } from "@/components/CharacterInfo";
import { Button } from "@nextui-org/react";

import { GoBackIcon } from "@/components/Icons";

export default function Page({ params }: { params: { id: number } }) {
  const router = useRouter();
  const { data, loading, error } = useCharacter(params.id);

  if (loading) return <Loading />;

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div className="flex flex-col gap-8 mt-6">
      <div>
        <Button
          className="bg-white"
          startContent={<GoBackIcon />}
          onClick={() => router.push("/")}>
          Go back
        </Button>
      </div>

      {data && <CharacterInfo character={data.character} />}
    </div>
  );
}
