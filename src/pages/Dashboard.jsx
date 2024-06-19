import { Box, Heading, Input, Table, Thead, Tbody, Tr, Th, Td, Button, Flex } from "@chakra-ui/react";
import { useState } from "react";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const transactions = [
    { id: 1, name: "Transaction 1", amount: "$100", status: "Completed" },
    { id: 2, name: "Transaction 2", amount: "$200", status: "Pending" },
    // Add more transactions here
  ];

  const filteredTransactions = transactions.filter(transaction =>
    transaction.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box p={4}>
      <Heading mb={4}>Dashboard</Heading>
      <Flex mb={4}>
        <Input
          placeholder="Search transactions"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          mr={2}
        />
        <Button onClick={() => setSearchTerm("")}>Clear</Button>
      </Flex>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredTransactions.map(transaction => (
            <Tr key={transaction.id}>
              <Td>{transaction.id}</Td>
              <Td>{transaction.name}</Td>
              <Td>{transaction.amount}</Td>
              <Td>{transaction.status}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Dashboard;