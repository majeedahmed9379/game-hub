import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string | null;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { label: "Relevance", value: "" },
    { label: "Date added", value: "-added" },
    { label: "Name", value: "name" },
    { label: "Release Date", value: "-relaeased" },
    { label: "Popularity", value: "-metacritic" },
    { label: "Rating", value: "-rating" },
  ];
  const currentSortOrder = sortOrders.find((order) => order.value == sortOrder);
  return (
    <Menu m-x={"10px"}>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((filter) => (
          <MenuItem
            key={filter.value}
            value={filter.value}
            onClick={() => {
              onSelectSortOrder(filter.value);
            }}
          >
            Order By: {filter.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
