import { Card, CardBody, CardHeader, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
interface Props {
  game: Game;
}
export const GameCard = ({ game }: Props) => {
  console.log(game);
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"20px"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};
