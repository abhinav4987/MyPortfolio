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
import {
    FaReact,
    FaPython,
    FaPepperHot,
    FaJs,
    FaSass,
    FaCode,
    FaGithub,
    FaExternalLinkAlt,
    FaLaravel,
    FaBootstrap,
    FaDatabase,
    FaNodeJs,
    FaNode,
    FaYoutube,
    FaChrome,
    FaNpm,
    FaCss3,
    FaHtml5
} from 'react-icons/fa'
import {TbBrandNextjs} from 'react-icons/tb'
import {BiGitBranch} from 'react-icons/bi';
import { SiNextDotJs,SiMongodb, SiRollupdotjs,SiGraphql, SiRedux } from 'react-icons/si'
import useMediaQuery from '../../hook/useMediaQuery';

import React, {Fragment} from 'react'

const technical_traits = [
    "React","React Native","Redux","MongoDB","GraphQL","Next.js","REST API","HTML","CSS","Sass","Javascript","Git"
]

const non_tech_traits = [
    "cyclist", "runner","meditator", "potter head", "bibilophile","cooking"
] 


const getIcon = (tag) => {
    console.log(tag)
        if (tag === 'React') {
            return <FaReact/>
        } else if (tag === 'MongoDB') {
            return <SiMongodb/>
        }else if (tag === 'React Native') {
            return <FaReact/>
        } else if (tag === 'Javascript') {
            return <FaJs/>
        } else if (tag === 'Sass') {
            return <FaSass/>
        } else if (tag === 'Express') {
            return <FaNode/>
        } else if (tag === 'Laravel') {
            return <FaLaravel/>
        } else if (tag === 'Bootstrap') {
            return <FaBootstrap/>
        }
        else if (tag === 'HTML') {
            return <FaHtml5/>
        } else if (tag === 'SQL') {
            return <FaDatabase/>
        }
        else if (tag === 'NPM') {
            return <FaNpm/>
        }
        else if(tag === 'CSS'){
            return <FaCss3 />
        }
        else if (tag === 'Git') {
            return <BiGitBranch/>
        }else if (tag === 'Redux') {
            return <SiRedux/>
        }
        else if (tag === 'Rollup') {
            return <SiRollupdotjs/>
        }
        else if (tag === 'Next.js') {
            return <TbBrandNextjs/>
        }
        else if (tag === 'GraphQL') {
            return <SiGraphql/>
        }
        else {
            return <FaCode/>
        }

    }

function Aboutme() {
    const isLargerThan800 = useMediaQuery(800)
    return (
        <Fragment>
            <SimpleGrid columns={{base: 1, md: 2}} spacing={8} p={2}>
                <SlideFade
                    direction="top"
                    in={true}
                    transition={{ enter: { duration: 0.4, delay: 0.7 } }}
                >
                    <Stack>
                        <Heading fontFamily="Ubuntu" fontSize="34"  p={2}>
                            ⚡ About Me
                        </Heading>
                        <Text
                            color="textSecondary"
                            fontSize={{ base: '14px', md: '16px' }}
                            whiteSpace="pre-line"
                            paddingLeft={2}
                        >
                            Hey! I'm Abhinav Anand, a web and frontend developer, passionate about creating new tools on the web interface to make lives better. <br />
                            
                        </Text>

                        <Heading color="#c0c2c1" fontFamily="Ubuntu" fontSize="16"  p={2}>
                            Technologies I have worked with.  
                        </Heading>
                        <Flex alignItems="center" justifyContent="flex-start" flexWrap="wrap" >
                            {
                                technical_traits.map(trait => {
                                    return (
                                        <Flex 
                                            alignItems="center" 
                                            justifyContent="flex-start"
                                            paddingLeft="20px"
                                            paddingRight="20px"
                                            paddingTop="5px"
                                            paddingBottom="5px"
                                            backgroundColor="#2fbd81"
                                            borderRadius={"100rem"}
                                            margin="2px"
                                        >
                                            {getIcon(trait)}
                                            <Text
                                                
                                                color="#2f3030"
                                                fontWeight="600"
                                                fontSize={{ base: '16px', md: '18px' }}
                                                whiteSpace="pre-line"
                                               
                                                marginLeft={'10px'}
                                            >{trait}</Text>
                                        </Flex>
                                        
                                    )
                                })
                            }
                        </Flex>

                        <Heading color="#c0c2c1" fontFamily="Ubuntu" fontSize="16"  p={2} paddingTop={5}>
                            My non technical side   
                        </Heading>
                        <Flex alignItems="center" justifyContent="flex-start" flexWrap="wrap" >
                            {
                                non_tech_traits.map(trait => {
                                    return (
                                        <Text
                                            
                                            borderRadius={"100rem"}
                                            paddingLeft="20px"
                                            paddingRight="20px"
                                            paddingTop="5px"
                                            paddingBottom="5px"
                                            backgroundColor="#FA934F"
                                            color="#2f3030"
                                            fontWeight="600"
                                            fontSize={{ base: '16px', md: '18px' }}
                                            whiteSpace="pre-line"
                                            margin="2px"
                                        >{trait}</Text>
                                    )
                                })
                            }
                        </Flex>
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
                            alt="Abhinav Anand"
                        />
                        </Box>
                    </Flex>
                </SlideFade>
            </SimpleGrid>
        </Fragment>
    )
}

export default Aboutme
