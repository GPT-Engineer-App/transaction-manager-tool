import { Box, Heading, Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("User Logged In:", { username, password });
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Login</Heading>
      <FormControl mb={4}>
        <FormLabel>Username</FormLabel>
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Password</FormLabel>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </FormControl>
      <Button onClick={handleLogin}>Login</Button>
    </Box>
  );
};

export default Login;