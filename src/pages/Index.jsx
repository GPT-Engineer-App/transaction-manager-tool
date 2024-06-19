import { Container, Text, VStack, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to the Transactions Management Tool</Text>
        <Text>Use the navigation bar to manage your transactions.</Text>
        <Image src="/images/transactions-dashboard.png" alt="Transactions Dashboard" />
      </VStack>
    </Container>
  );
};

export default Index;