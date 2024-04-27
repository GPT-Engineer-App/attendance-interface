import { Box, Button, Container, Heading, Input, Stack, Text, VStack, Image } from "@chakra-ui/react";
import RFIDDataDisplay from "../components/RFIDDataDisplay";
import { FaUserCheck, FaUserPlus, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={8}>
        <Image src="https://images.unsplash.com/photo-1583950158664-e6460f698a92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBhdHRlbmRhbmNlfGVufDB8fHx8MTcxNDIxOTUzOXww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" />
        <Heading as="h1" size="xl" textAlign="center">
          Attendance System
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Welcome! Please sign in or out using your employee ID.
        </Text>
        <Box as="form" w="full">
          <Stack spacing={4}>
            <Input placeholder="Enter Employee ID" size="lg" />
            <Button leftIcon={<FaSignInAlt />} colorScheme="green" w="full">
              Sign In
            </Button>
            <Button leftIcon={<FaSignOutAlt />} colorScheme="red" w="full">
              Sign Out
            </Button>
          </Stack>
        </Box>
        <Stack direction="row" spacing={4} align="center">
          <Button leftIcon={<FaUserPlus />} colorScheme="blue">
            Register New Employee
          </Button>
          <Button leftIcon={<FaUserCheck />} colorScheme="purple">
            Check Attendance
          </Button>
        </Stack>
        <RFIDDataDisplay data={["RFID Tag 1234", "RFID Tag 5678", "RFID Tag 9012"]} />
      </VStack>
    </Container>
  );
};

export default Index;
