import { Box, Button, Tabs, TabList, TabPanels, Tab, TabPanel, SimpleGrid, Image, Badge, Text } from "@chakra-ui/react"

function Home() {
    const laptop1 = {
        imageUrl: "https://res.cloudinary.com/dudhmrdin/image/upload/v1607443408/Apple_macbookpro-13-inch_screen_05042020_yg4zoi.jpg",
        name: "Apple MacBook Pro (2020)",
        itemInch: "13 Inch",
        itemRom: 256,
        itemRam: 8,
        itemBrand: "Apple",
        itemPrice: "₦790,000"
    }
    const phone1 = {
        imageUrl: "https://res.cloudinary.com/dudhmrdin/image/upload/v1607459242/iPhone12ProMax-PacificBlue-1_wetz7n.webp",
        name: "Apple iPhone 12 Pro Max",
        itemRom: 128,
        itemBrand: "Apple",
        itemPrice: "₦580,000"
    }
    return (
        <div className="content">
            {/* <Box borderRadius="lg" m={4} px={4} py={8} bg="purple.100">
                <Heading as="h2" size="xl" textAlign="center" color="purple.800" isTruncated>Get A New Device Today at 25% OFF</Heading>
            </Box> */}
            <Tabs variant="soft-rounded" colorScheme="purple">
                <TabList mt={6} mb={4} mx={4}>
                    <Tab mr={4}>Laptops</Tab>
                    <Tab>Phones</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <SimpleGrid minChildWidth="280px" spacing="40px">
                            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" bg="white" p={4} height="100%">
                                <Image borderRadius="lg" src={laptop1.imageUrl} />
                                <Box>
                                    <Box d="flex" my={4} alignItems="baseline">
                                        <Badge borderRadius="full" px="2" colorScheme="teal">
                                            New
                                        </Badge>
                                        <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
                                            {laptop1.itemRam} GB &bull; {laptop1.itemRom} GB &bull; {laptop1.itemBrand}
                                        </Box>
                                    </Box>
                                    <Box mt="1">
                                        <Text fontWeight="bold" as="h5" lineHeight="tight" isTruncated>{laptop1.name}</Text>
                                    </Box>
                                    <Box>
                                        <Text color="gray.500" mt={2} fontWeight="semibold" isTruncated>{laptop1.itemPrice}</Text>
                                    </Box>
                                    <Button mt={4} colorScheme="purple">Buy Now</Button>
                                </Box>
                            </Box>
                            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" bg="white" p={4} height="100%">
                                <Image borderRadius="lg" src={laptop1.imageUrl} />
                                <Box>
                                    <Box d="flex" my={4} alignItems="baseline">
                                        <Badge borderRadius="full" px="2" colorScheme="teal">
                                            New
                                        </Badge>
                                        <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
                                            {laptop1.itemRam} GB &bull; {laptop1.itemRom} GB &bull; {laptop1.itemBrand}
                                        </Box>
                                    </Box>
                                    <Box mt="1">
                                        <Text fontWeight="bold" as="h5" lineHeight="tight" isTruncated>{laptop1.name}</Text>
                                    </Box>
                                    <Box>
                                        <Text color="gray.500" mt={2} fontWeight="semibold" isTruncated>{laptop1.itemPrice}</Text>
                                    </Box>
                                    <Button mt={4} colorScheme="purple">Buy Now</Button>
                                </Box>
                            </Box>
                            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" bg="white" p={4} height="100%">
                                <Image borderRadius="lg" src={laptop1.imageUrl} />
                                <Box>
                                    <Box d="flex" my={4} alignItems="baseline">
                                        <Badge borderRadius="full" px="2" colorScheme="teal">
                                            New
                                        </Badge>
                                        <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
                                            {laptop1.itemRam} GB &bull; {laptop1.itemRom} GB &bull; {laptop1.itemBrand}
                                        </Box>
                                    </Box>
                                    <Box mt="1">
                                        <Text fontWeight="bold" as="h5" lineHeight="tight" isTruncated>{laptop1.name}</Text>
                                    </Box>
                                    <Box>
                                        <Text color="gray.500" mt={2} fontWeight="semibold" isTruncated>{laptop1.itemPrice}</Text>
                                    </Box>
                                    <Button mt={4} colorScheme="purple">Buy Now</Button>
                                </Box>
                            </Box>
                            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" bg="white" p={4} height="100%">
                                <Image borderRadius="lg" src={laptop1.imageUrl} />
                                <Box>
                                    <Box d="flex" my={4} alignItems="baseline">
                                        <Badge borderRadius="full" px="2" colorScheme="teal">
                                            New
                                        </Badge>
                                        <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
                                            {laptop1.itemRam} GB &bull; {laptop1.itemRom} GB &bull; {laptop1.itemBrand}
                                        </Box>
                                    </Box>
                                    <Box mt="1">
                                        <Text fontWeight="bold" as="h5" lineHeight="tight" isTruncated>{laptop1.name}</Text>
                                    </Box>
                                    <Box>
                                        <Text color="gray.500" mt={2} fontWeight="semibold" isTruncated>{laptop1.itemPrice}</Text>
                                    </Box>
                                    <Button mt={4} colorScheme="purple">Buy Now</Button>
                                </Box>
                            </Box>
                            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" bg="white" p={4} height="100%">
                                <Image borderRadius="lg" src={laptop1.imageUrl} />
                                <Box>
                                    <Box d="flex" my={4} alignItems="baseline">
                                        <Badge borderRadius="full" px="2" colorScheme="teal">
                                            New
                                        </Badge>
                                        <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
                                            {laptop1.itemRam} GB &bull; {laptop1.itemRom} GB &bull; {laptop1.itemBrand}
                                        </Box>
                                    </Box>
                                    <Box mt="1">
                                        <Text fontWeight="bold" as="h5" lineHeight="tight" isTruncated>{laptop1.name}</Text>
                                    </Box>
                                    <Box>
                                        <Text color="gray.500" mt={2} fontWeight="semibold" isTruncated>{laptop1.itemPrice}</Text>
                                    </Box>
                                    <Button mt={4} colorScheme="purple">Buy Now</Button>
                                </Box>
                            </Box>
                            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" bg="white" p={4} height="100%">
                                <Image borderRadius="lg" src={laptop1.imageUrl} />
                                <Box>
                                    <Box d="flex" my={4} alignItems="baseline">
                                        <Badge borderRadius="full" px="2" colorScheme="teal">
                                            New
                                        </Badge>
                                        <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
                                            {laptop1.itemRam} GB &bull; {laptop1.itemRom} GB &bull; {laptop1.itemBrand}
                                        </Box>
                                    </Box>
                                    <Box mt="1">
                                        <Text fontWeight="bold" as="h5" lineHeight="tight" isTruncated>{laptop1.name}</Text>
                                    </Box>
                                    <Box>
                                        <Text color="gray.500" mt={2} fontWeight="semibold" isTruncated>{laptop1.itemPrice}</Text>
                                    </Box>
                                    <Button mt={4} colorScheme="purple">Buy Now</Button>
                                </Box>
                            </Box>
                        </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        <SimpleGrid minChildWidth="280px" spacing="40px">
                            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" bg="white" p={4} height="100%">
                                <Image borderRadius="lg" src={phone1.imageUrl} />
                                <Box>
                                    <Box d="flex" my={4} alignItems="baseline">
                                        <Badge borderRadius="full" px="2" colorScheme="teal">
                                            New
                                        </Badge>
                                        <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
                                            {phone1.itemRom} GB &bull; {phone1.itemBrand}
                                        </Box>
                                    </Box>
                                    <Box mt="1">
                                        <Text fontWeight="bold" as="h5" lineHeight="tight" isTruncated>{phone1.name}</Text>
                                    </Box>
                                    <Box>
                                        <Text color="gray.500" mt={2} fontWeight="semibold" isTruncated>{phone1.itemPrice}</Text>
                                    </Box>
                                    <Button mt={4} colorScheme="purple">Buy Now</Button>
                                </Box>
                            </Box>
                            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" bg="white" p={4} height="100%">
                                <Image borderRadius="lg" src={phone1.imageUrl} />
                                <Box>
                                    <Box d="flex" my={4} alignItems="baseline">
                                        <Badge borderRadius="full" px="2" colorScheme="teal">
                                            New
                                        </Badge>
                                        <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
                                            {phone1.itemRom} GB &bull; {phone1.itemBrand}
                                        </Box>
                                    </Box>
                                    <Box mt="1">
                                        <Text fontWeight="bold" as="h5" lineHeight="tight" isTruncated>{phone1.name}</Text>
                                    </Box>
                                    <Box>
                                        <Text color="gray.500" mt={2} fontWeight="semibold" isTruncated>{phone1.itemPrice}</Text>
                                    </Box>
                                    <Button mt={4} colorScheme="purple">Buy Now</Button>
                                </Box>
                            </Box>
                            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" bg="white" p={4} height="100%">
                                <Image borderRadius="lg" src={phone1.imageUrl} />
                                <Box>
                                    <Box d="flex" my={4} alignItems="baseline">
                                        <Badge borderRadius="full" px="2" colorScheme="teal">
                                            New
                                        </Badge>
                                        <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
                                            {phone1.itemRom} GB &bull; {phone1.itemBrand}
                                        </Box>
                                    </Box>
                                    <Box mt="1">
                                        <Text fontWeight="bold" as="h5" lineHeight="tight" isTruncated>{phone1.name}</Text>
                                    </Box>
                                    <Box>
                                        <Text color="gray.500" mt={2} fontWeight="semibold" isTruncated>{phone1.itemPrice}</Text>
                                    </Box>
                                    <Button mt={4} colorScheme="purple">Buy Now</Button>
                                </Box>
                            </Box>
                            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" bg="white" p={4} height="100%">
                                <Image borderRadius="lg" src={phone1.imageUrl} />
                                <Box>
                                    <Box d="flex" my={4} alignItems="baseline">
                                        <Badge borderRadius="full" px="2" colorScheme="teal">
                                            New
                                        </Badge>
                                        <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
                                            {phone1.itemRom} GB &bull; {phone1.itemBrand}
                                        </Box>
                                    </Box>
                                    <Box mt="1">
                                        <Text fontWeight="bold" as="h5" lineHeight="tight" isTruncated>{phone1.name}</Text>
                                    </Box>
                                    <Box>
                                        <Text color="gray.500" mt={2} fontWeight="semibold" isTruncated>{phone1.itemPrice}</Text>
                                    </Box>
                                    <Button mt={4} colorScheme="purple">Buy Now</Button>
                                </Box>
                            </Box>
                            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" bg="white" p={4} height="100%">
                                <Image borderRadius="lg" src={phone1.imageUrl} />
                                <Box>
                                    <Box d="flex" my={4} alignItems="baseline">
                                        <Badge borderRadius="full" px="2" colorScheme="teal">
                                            New
                                        </Badge>
                                        <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
                                            {phone1.itemRom} GB &bull; {phone1.itemBrand}
                                        </Box>
                                    </Box>
                                    <Box mt="1">
                                        <Text fontWeight="bold" as="h5" lineHeight="tight" isTruncated>{phone1.name}</Text>
                                    </Box>
                                    <Box>
                                        <Text color="gray.500" mt={2} fontWeight="semibold" isTruncated>{phone1.itemPrice}</Text>
                                    </Box>
                                    <Button mt={4} colorScheme="purple">Buy Now</Button>
                                </Box>
                            </Box>
                            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" bg="white" p={4} height="100%">
                                <Image borderRadius="lg" src={phone1.imageUrl} />
                                <Box>
                                    <Box d="flex" my={4} alignItems="baseline">
                                        <Badge borderRadius="full" px="2" colorScheme="teal">
                                            New
                                        </Badge>
                                        <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
                                            {phone1.itemRom} GB &bull; {phone1.itemBrand}
                                        </Box>
                                    </Box>
                                    <Box mt="1">
                                        <Text fontWeight="bold" as="h5" lineHeight="tight" isTruncated>{phone1.name}</Text>
                                    </Box>
                                    <Box>
                                        <Text color="gray.500" mt={2} fontWeight="semibold" isTruncated>{phone1.itemPrice}</Text>
                                    </Box>
                                    <Button mt={4} colorScheme="purple">Buy Now</Button>
                                </Box>
                            </Box>
                            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" bg="white" p={4} height="100%">
                                <Image borderRadius="lg" src={phone1.imageUrl} />
                                <Box>
                                    <Box d="flex" my={4} alignItems="baseline">
                                        <Badge borderRadius="full" px="2" colorScheme="teal">
                                            New
                                        </Badge>
                                        <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
                                            {phone1.itemRom} GB &bull; {phone1.itemBrand}
                                        </Box>
                                    </Box>
                                    <Box mt="1">
                                        <Text fontWeight="bold" as="h5" lineHeight="tight" isTruncated>{phone1.name}</Text>
                                    </Box>
                                    <Box>
                                        <Text color="gray.500" mt={2} fontWeight="semibold" isTruncated>{phone1.itemPrice}</Text>
                                    </Box>
                                    <Button mt={4} colorScheme="purple">Buy Now</Button>
                                </Box>
                            </Box>
                            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" bg="white" p={4} height="100%">
                                <Image borderRadius="lg" src={phone1.imageUrl} />
                                <Box>
                                    <Box d="flex" my={4} alignItems="baseline">
                                        <Badge borderRadius="full" px="2" colorScheme="teal">
                                            New
                                        </Badge>
                                        <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
                                            {phone1.itemRom} GB &bull; {phone1.itemBrand}
                                        </Box>
                                    </Box>
                                    <Box mt="1">
                                        <Text fontWeight="bold" as="h5" lineHeight="tight" isTruncated>{phone1.name}</Text>
                                    </Box>
                                    <Box>
                                        <Text color="gray.500" mt={2} fontWeight="semibold" isTruncated>{phone1.itemPrice}</Text>
                                    </Box>
                                    <Button mt={4} colorScheme="purple">Buy Now</Button>
                                </Box>
                            </Box>
                        </SimpleGrid>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}

export default Home