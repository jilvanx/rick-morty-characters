import { CharacterById } from "@/graphql/models";
import { Card, CardBody, Image } from "@nextui-org/react";

import React from "react";

type CharacterInfoProps = {
  character: CharacterById;
};

export const CharacterInfo = ({ character }: CharacterInfoProps) => {
  return (
    <Card className="max-w-[610px]">
      <CardBody key={character.id}>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt={character.image}
              className="object-cover"
              height={200}
              shadow="md"
              src={character.image}
              width="100%"
            />
            <div>
              <h4 className="my-4 font-bold text-md text-start">
                {character.name}
              </h4>
              <p className="text-start text-sm">
                Origin: {character.origin.name}
              </p>
              <p className="text-start text-sm">
                Location: {character.location.name}
              </p>
            </div>
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/90">Episodes</h3>
                {character.episode.map((episode) => (
                  <p key={episode.id} className="text-small text-foreground/80">
                    {episode.episode} - {episode.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
