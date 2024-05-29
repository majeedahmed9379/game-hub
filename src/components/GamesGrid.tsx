import { useEffect, useState } from "react";
import { apiClient } from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  name: string;
  id: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}
const GamesGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((resp) => setGames(resp.data.results))
      .catch((error) => setError(error.message));
  });
  return (
    <>
      {error && (
        <Text color="tomato" fontSize="20px">
          {error}
        </Text>
      )}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GamesGrid;
