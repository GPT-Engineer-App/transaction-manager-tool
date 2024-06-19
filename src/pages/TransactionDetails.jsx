import { Box, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const TransactionDetails = () => {
  const { id } = useParams();
  const transaction = { id, name: "Transaction " + id, amount: "$100", status: "Completed" }; // Mock data

  return (
    <Box p={4}>
      <Heading mb={4}>Transaction Details</Heading>
      <Text><strong>ID:</strong> {transaction.id}</Text>
      <Text><strong>Name:</strong> {transaction.name}</Text>
      <Text><strong>Amount:</strong> {transaction.amount}</Text>
      <Text><strong>Status:</strong> {transaction.status}</Text>
    </Box>
  );
};

export default TransactionDetails;