import {
    SimpleGrid,
    SlideFade,
    Spacer,
    Text,
    Stack,
    Heading,
    Image,
    Flex,
    Box,
    chakra,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
} from '@chakra-ui/react';
import React, {Fragment,useState} from 'react'
import './style.css';
function Projects() {
    
    const [field, setField] = useState("All");


    return (
        <Stack spacing={10} justifyContent="flex-end" alignItems="center" w="full" m={4}>
            <SlideFade
                direction="top"
                in={true}
                transition={{ enter: { duration: 0.4, delay: 0.3 } }}
            >
                <Heading  fontSize="64" p={0} w="full">
                    My Projects
                </Heading>
            </SlideFade>
            
            <Box>
                <Flex>
                    <div className="category-options underlined">
                        <Text  m={4} fontSize="l" color="">All</Text>
                    </div>
                    <Spacer />
                    <div className="category-options">
                        <Text m={4} fontSize="l" color="">MERN</Text>
                    </div>
                    <Spacer />
                    <div className="category-options">
                        <Text m={4} fontSize="l" color="">React</Text>
                    </div>
                    <Spacer />
                </Flex>
            </Box>
            
            <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={16}>
                <SlideFade>
                    
                </SlideFade>
            </SimpleGrid>
            
        </Stack>
    )
}

export default Projects


