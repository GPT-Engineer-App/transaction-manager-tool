import { Box, Heading, Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const EditTransaction = () => {
  const { id } = useParams();
  const [name, setName] = useState("Transaction " + id);
  const [amount, setAmount] = useState("$100");

  const handleSubmit = () => {
    console.log("Transaction Updated:", { id, name, amount });
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Edit Transaction</Heading>
      <FormControl mb={4}>
        <FormLabel>Name</FormLabel>
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Amount</FormLabel>
        <Input value={amount} onChange={(e) => setAmount(e.target.value)} />
      </FormControl>
      <Button onClick={handleSubmit}>Update</Button>
    </Box>
  );
};

export default EditTransaction;