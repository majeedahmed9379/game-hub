import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GamesHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.genre?.name || ""} ${
    gameQuery.platform?.name || ""
  } Games`;
  return (
    <Heading as={"h1"} fontSize={"5xl"} marginBottom={5}>
      {heading}
    </Heading>
  );
};

export default GamesHeading;
