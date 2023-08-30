import { useRouter } from "next/navigation";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

import { Character } from "@/graphql/models";

type CharacterCardProps = {
  character: Character;
};
export const CharacterCard = ({ character }: CharacterCardProps) => {
  const router = useRouter();

  return (
    <Card
      className="py-4"
      isPressable
      onClick={() => router.push(`/character/${character.id}`)}
    >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-md text-start">{character.name}</h4>
        <small className="text-default-500 text-start">
          {character.species} - {character.status}
        </small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt={character.name}
          className="object-cover rounded-xl"
          src={character.image}
          width={250}
        />
      </CardBody>
    </Card>
  );
};
