import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/croppedImageUrl";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  {
    if (isLoading) return <Spinner />;
  }
  {
    if (error) return null;
  }
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} marginY={"15px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={"8px"}
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
