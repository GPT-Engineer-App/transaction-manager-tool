import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-around">
        <Link as={NavLink} to="/" color="white" _hover={{ textDecoration: "none" }}>Home</Link>
        <Link as={NavLink} to="/dashboard" color="white" _hover={{ textDecoration: "none" }}>Dashboard</Link>
        <Link as={NavLink} to="/create-transaction" color="white" _hover={{ textDecoration: "none" }}>Create Transaction</Link>
        <Link as={NavLink} to="/reports" color="white" _hover={{ textDecoration: "none" }}>Reports</Link>
      </Flex>
    </Box>
  );
};

export default Navbar;