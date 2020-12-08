import { Flex, Spacer, Box, Button, Heading, Tabs, TabList, TabPanels, Tab, TabPanel, SimpleGrid } from "@chakra-ui/react"

function Home() {
    const item1 = {
        imageUrl: "",
        name: "",
        itemPrice: ""
    }
    return (
        <div className="content">
            <Box borderRadius="lg" m={4} p={4} bg="purple.200">

            </Box>
            <Tabs variant="soft-rounded" colorScheme="purple">
                <TabList m={4}>
                    <Tab mr={4}>Laptops</Tab>
                    <Tab>Phones</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                    <SimpleGrid minChildWidth="280px" spacing="40px">
                        <Box bg="tomato" p={4} height="100%"></Box>
                        <Box bg="tomato" p={4} height="100%"></Box>
                        <Box bg="tomato" p={4} height="100%"></Box>
                        <Box bg="tomato" p={4} height="100%"></Box>
                    </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}

export default Home