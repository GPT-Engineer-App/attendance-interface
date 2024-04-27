import { Box, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaTag } from "react-icons/fa";

const RFIDDataDisplay = ({ data }) => {
  return (
    <Box mt={4}>
      <List spacing={3}>
        {data.map((tag, index) => (
          <ListItem key={index}>
            <ListIcon as={FaTag} color="green.500" />
            {tag}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default RFIDDataDisplay;
