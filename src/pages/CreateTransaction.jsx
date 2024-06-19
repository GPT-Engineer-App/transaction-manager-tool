import { Box, Heading, Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
import { useState } from "react";

const CreateTransaction = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    console.log("Transaction Created:", { name, amount });
    setName("");
    setAmount("");
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Create Transaction</Heading>
      <FormControl mb={4}>
        <FormLabel>Name</FormLabel>
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Amount</FormLabel>
        <Input value={amount} onChange={(e) => setAmount(e.target.value)} />
      </FormControl>
      <Button onClick={handleSubmit}>Create</Button>
    </Box>
  );
};

export default CreateTransaction;