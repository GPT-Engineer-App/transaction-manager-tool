import { Box, Heading, Button, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const DeleteTransaction = () => {
  const { id } = useParams();

  const handleDelete = () => {
    console.log("Transaction Deleted:", id);
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Delete Transaction</Heading>
      <Text mb={4}>Are you sure you want to delete transaction {id}?</Text>
      <Button colorScheme="red" onClick={handleDelete}>Delete</Button>
    </Box>
  );
};

export default DeleteTransaction;