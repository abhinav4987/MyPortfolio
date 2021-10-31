import {
    SimpleGrid,
    SlideFade,
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
} from '@chakra-ui/react'
import useMediaQuery from '../../hook/useMediaQuery';

import React, {Fragment} from 'react'

function Aboutme() {
    const isLargerThan800 = useMediaQuery(800)
    return (
        <Fragment>
            <SimpleGrid columns={{base: 1, md: 2}} spacing={8} p={6}>
                <SlideFade
                    direction="top"
                    in={true}
                    transition={{ enter: { duration: 0.4, delay: 0.7 } }}
                >
                    <Stack>
                        <Heading fontFamily="Ubuntu" fontSize="21">
                            ⚡ About Me
                        </Heading>
                        <Text
                            color="textSecondary"
                            fontSize={{ base: '14px', md: '16px' }}
                            whiteSpace="pre-line"
                        >
                            Hey! I'm Abdul Rahman, I've been close to a computer since an
                            early age, and been passionate about it ever since. <br />
                            <br /> I really liked to build stuff using{' '}
                            back in 2010, and from that, I explored how to code myself,
                            fast-forward to today, I do programming in various languages and
                            technologies, and had the privilege to worked in a{' '}
                            and a
                            I'm interested in building something awesome with code and
                            automate tasks with code, currently focused on
                            and
                            <br />
                            <br />
                            When I'm not coding I play games with my friends, watch some show
                            on Netflix, or if the weather's good, play basketball! 🏀
                        </Text>
                    </Stack>
                </SlideFade>

                <SlideFade
                    direction="top"
                    in={true}
                    transition={{ enter: { duration: 0.4, delay: 0.7 } }}
                >
                    <Flex alignItems="center" justifyContent="center" position="relative">
                        <Box
                            maxW={{ base: '300px', lg: '350px' }}
                            maxH={{ base: '300px', lg: '350px' }}
                        >
                        <Image
                            src="https://svgsilh.com/svg/26432.svg"
                            filter="invert(0.5)"
                            zIndex={2}
                            position="absolute"
                            top={-8}
                            right={8}
                            w={{ base: '100px', lg: '150px' }}
                            alt=""
                        />
                        <Image
                            src="https://res.cloudinary.com/dfwfghwgo/image/upload/v1633880106/profile/IMG_20211008_160202_rhirf3.jpg"
                            borderRadius="9"
                            w={{ base: '300px', lg: '300px' }}
                            h={{ base: '400px', lg: '400px' }}
                            alt="Abdul Rahman"
                        />
                        </Box>
                    </Flex>
                </SlideFade>
            </SimpleGrid>
        </Fragment>
    )
}

export default Aboutme
