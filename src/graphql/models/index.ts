type Location = {
  id: number;
  name: string;
};

export type Character = {
  id: number;
  name: string;
  status: string;
  image: string;
  species: string;
};

export type ResponseCharacters = {
  characters: {
    info: {
      count: number;
      pages: number;
    };
    results: Character[];
  };
};

type Episode = {
  id: number;
  name: string;
  episode: string;
};

export type CharacterById = {
  id: number;
  name: string;
  gender: string;
  image: string;
  location: Location;
  origin: Location;
  episode: Episode[];
};

export type ResponseCharacter = {
  character: CharacterById;
};
