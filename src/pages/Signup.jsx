import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, Heading, Text, useToast } from "@chakra-ui/react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log("Signup submitted:", email, password);
    toast({
      title: "Signup Successful",
      description: "Your account has been created.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box maxWidth="400px" margin="auto" mt={8}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        Sign Up
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
          </FormControl>
          <Button type="submit" colorScheme="blue" size="lg" width="full">
            Sign Up
          </Button>
        </VStack>
      </form>
      <Text mt={4} textAlign="center">
        Already have an account? <a href="/">Login</a>
      </Text>
    </Box>
  );
};

export default Signup;