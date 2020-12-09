import { Flex, Spacer, Box, Button, Heading, Link } from "@chakra-ui/react"
import { Link as ReactLink } from 'react-router-dom'

function Navbar() {
    return (
        <Flex alignItems="center" px={6} py={8}>
            <Link as={ReactLink} to="/">
                <Heading textDecoration="none" size="lg">RenoStore</Heading>
            </Link>
            <Spacer />
            <Box>
                <Link>
                    <Button as={ReactLink} to="/signup" colorScheme="purple" mr="2">Sign Up</Button>
                </Link>
                <Link>
                    <Button as={ReactLink} to="/login" colorScheme="purple">Log in</Button>
                </Link>
            </Box>
        </Flex>
    )
}

export default Navbar