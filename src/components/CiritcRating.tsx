import React from "react";
import { Badge } from "@chakra-ui/react";

interface Props {
  criticRating: number;
}
const CiritcRating = ({ criticRating }: Props) => {
  const color = criticRating > 75 ? "green" : criticRating > 60 ? "yellow" : "";
  return (
    <>
      <Badge
        variant="subtle"
        colorScheme={color}
        fontSize="15px"
        paddingX="4px"
        borderRadius="4px"
      >
        {criticRating}
      </Badge>
    </>
  );
};

export default CiritcRating;
