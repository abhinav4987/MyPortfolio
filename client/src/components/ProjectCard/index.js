import React, {Fragment} from 'react'
import useMediaQuery from '../../hook/useMediaQuery';
import { Button, ButtonGroup, Flex } from '@chakra-ui/react'
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
    FaNpm
} from 'react-icons/fa'
import {TbBrandNextjs} from 'react-icons/tb'
import { SiNextDotJs,SiMongodb, SiRollupdotjs,SiGraphql } from 'react-icons/si'
import { GrDeploy } from 'react-icons/gr'
import {
    TagLeftIcon,
    Tag,
    Text,
    Stack,
    Divider,
    TagLabel,
    Link,
    ScaleFade,
    SlideFade,
    chakra,
    Image,
} from '@chakra-ui/react'
import './style.css'

 const getTag = (tag) => {
        let values = []
        if (tag === 'React') {
            values[0] = 'blue'
            values[1] = FaReact
        } else if (tag === 'MongoDb') {
            values[0] = 'orange'
            values[1] = SiMongodb
        } else if (tag === 'Javascript') {
            values[0] = 'yellow'
            values[1] = FaJs
        } else if (tag === 'Sass') {
            values[0] = 'pink'
            values[1] = FaSass
        } else if (tag === 'Express') {
            values[0] = 'green'
            values[1] = FaNode
        } else if (tag === 'Laravel') {
            values[0] = 'red'
            values[1] = FaLaravel
        } else if (tag === 'Bootstrap') {
            values[0] = 'purple'
            values[1] = FaBootstrap
        } else if (tag === 'SQL') {
            values[0] = 'blue'
            values[1] = FaDatabase
        }
        else if (tag === 'NPM') {
            values[0] = 'red'
            values[1] = FaNpm
        }
        else if (tag === 'Rollup') {
            values[0] = 'white'
            values[1] = SiRollupdotjs
        }
        else if (tag === 'NEXT.js') {
            values[0] = 'green'
            values[1] = TbBrandNextjs
        }
        else if (tag === 'GraphQL') {
            values[0] = 'orange'
            values[1] = SiGraphql
        }
        else {
            values[0] = 'gray'
            values[1] = FaCode
        }
        return values
    }

const buttonMap = {
    githubLink : {
        colorScheme : '',
        rightIcon: FaGithub
    },
    deployLink: {
        colorScheme: '',
        rightIcon:  FaChrome,
    },
    npmLink: {
        colorScheme: '',
        rightIcon: FaNpm,
    },
    videoLink: {
        colorScheme: '',
        rightIcon: FaYoutube
    }
}

function ProjectCard({
    imageURL,
    title,
    desc,
    githubLink,
    videoLink,
    deployLink,
    npmLink,
    tag,
}) {
    
    const isLargerThan800 = useMediaQuery(800)
   

    const Tags = tag.map((item) => (
        <Tag
            key={item}
            marginRight={1}
            colorScheme={getTag(item)[0]}
            size={isLargerThan800 ? 'md' : 'sm'}
        >
            <TagLeftIcon as={getTag(item)[1]}></TagLeftIcon>
            <TagLabel>{item}</TagLabel>
        </Tag>
    ))
  
    return (
        <SlideFade
            direction="top"
            in={true}
            transition={{ enter: { duration: 0.7, delay: 0.3 } }}
        >
        <Stack
            bg="secondary"
            borderRadius="6px"
            minH="320px"
            // maxH="500px"
            border="1px"
            borderColor={{ base: '#333', md: 'borderColor' }}
            className="card-class"
        >
            <div className="card-image">
                <div className="card-image-message"></div>
                <img src={imageURL}></img>
            </div>
            <Stack  px={4} py={2}>
                <Stack isInline justifyContent="space-between" alignItems="center">
                    <Text fontFamily="Ubuntu" fontSize="2xl" color="displayColor" >{title}</Text>
                    <Stack
                        isInline
                        justifyContent="flex-end"
                        alignItems="center"
                        spacing={4}
                    >
                        {githubLink && (
                        <Link
                            href={githubLink}
                            color="white"
                            
                            isExternal
                        >
                            <FaGithub aria-label="github" size={30} />
                        </Link>
                        )}
                        {videoLink && (
                        <Link
                            href={videoLink}
                            color="white"
                            
                            isExternal
                        >
                            <FaYoutube aria-label="project link" size={32} />
                        </Link>
                        )}
                    
                        {deployLink && (
                            <Link
                                href={deployLink}
                                color="white"
                                isExternal
                            >
                                <FaChrome aria-label="project link"  size={30} />
                            </Link>
                        )}
                    </Stack>
                </Stack>

                <Flex
                    alignItem="center"
                    justifyContent={'flex-start'}
                    flexWrap={'wrap'}
                >
                    {Tags}
                </Flex>

                <Divider />
                <Text color="textSecondary" fontSize={['sm', 'md']}>
                    {desc}
                </Text>
            </Stack>
            <Flex
                alignItem="center"
                justifyContent={'flex-start'}
                flexWrap={'wrap'}
                paddingBottom={1}
            >
                {
                    githubLink && (
                        <Button
                            backgroundColor="#000"
                            variant='solid' 
                            margin={2}
                            rightIcon={<buttonMap.githubLink.rightIcon />}
                        >
                            <Link
                                href={deployLink}
                                color="white"
                                isExternal
                            >
                                Github repo
                            </Link>
                        </Button>
                    )
                }
                {
                    deployLink && (
                        <Button 
                            variant={'solid'}
                            backgroundColor='#185'
                            margin={2}
                            rightIcon={<buttonMap.deployLink.rightIcon />}
                        >
                            <Link
                                href={deployLink}
                                color="white"
                                isExternal
                            >
                                Deploy Link
                            </Link>
                        </Button>
                    )
                }
                {
                    videoLink && (
                        <Button 
                            backgroundColor='#900'
                            margin={2}
                            rightIcon={<buttonMap.videoLink.rightIcon />}
                        >
                            <Link
                                href={deployLink}
                                color="white"
                                isExternal
                            >
                                Demo Video
                            </Link>
                        </Button>
                    )
                }
                {
                    npmLink && (
                        <Button 
                            backgroundColor='#155'
                            margin={2}
                            rightIcon={<buttonMap.npmLink.rightIcon />}
                        >
                            <Link
                                href={deployLink}
                                color="white"
                                isExternal
                            >
                                Visit NPM
                            </Link>
                        </Button>
                    )
                }
            </Flex>
        </Stack>
        </SlideFade>
    )
}

export default ProjectCard
