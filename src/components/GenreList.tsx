import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/croppedImageUrl";
import { useState } from "react";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  const [filterGenre, setFilterGenre] = useState(0);

  {
    if (isLoading) return <Spinner />;
  }
  {
    if (error) return null;
  }

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem
            key={genre.id}
            marginY={"15px"}
            onClick={() => {
              onSelectGenre(genre);
            }}
          >
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={"8px"}
                objectFit={"cover"}
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Button
                variant={"link"}
                fontSize={"lg"}
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={selectedGenre?.id == genre.id ? "800" : ""}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
