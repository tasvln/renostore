import { Flex, Spacer, Box, Button, Heading } from "@chakra-ui/react"

function Navbar() {
    return (
        <Flex alignItems="center" px={6} py={8}>
            <Box>
                <Heading size="lg">RenoStore</Heading>
            </Box>
            <Spacer />
            <Box>
                <Button colorScheme="purple" mr="2">
                Sign Up
                </Button>
                <Button colorScheme="purple">Log in</Button>
            </Box>
        </Flex>
    )
}

export default Navbar