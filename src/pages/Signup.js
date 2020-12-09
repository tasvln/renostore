import React from 'react'
import { Input, Stack, Box, Heading, FormControl, FormLabel, Button, FormHelperText, } from "@chakra-ui/react"

function Signup() {
    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" mx={6} my={4} maxW="sm" p={6}>
            <form>
                <Heading mb={6} as="h3" size="lg">Sign Up</Heading>
                <Stack spacing={5}>
                    <FormControl id="email" isRequired>
                        <FormLabel>Email address</FormLabel>
                        <Input type="email" placeholder="reno@email.com" size="lg" />
                        <FormHelperText>We'll never share your email.</FormHelperText>
                    </FormControl>
                    <FormControl id="email" isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input type="password" placeholder="Enter Password" size="lg" />
                    </FormControl>
                    <Button mt={4} colorScheme="purple" type="submit">Submit</Button>
                </Stack>
            </form>
        </Box>
    )
}

export default Signup