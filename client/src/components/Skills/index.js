import React, {Fragment, useState, useEffect} from 'react'
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
import './style.css';


const skills = [
    {
        type:"C",
        level:85,
    },
    {
        type:"C++",
        level:75,
    },
    {
        type:"Python",
        level:70,
    },
    {
        type:"Java",
        level:85,
    },
    {
        type:"Javascript",
        level:90,
    },
    {
        type:"HTML&CSS",
        level:90,
    },
    {
        type:"React.js",
        level:90,
    },
    {
        type:"Express",
        level:75,
    },
    {
        type:"MongoDB",
        level:70,
    },
]

function Skills() {
    
    const [collapsed, setCollapsed] = useState(true);
    
    useEffect(() => {
        let timeout = setTimeout(() => {
            setCollapsed(false);
        },[10]);

        return () => {
            clearTimeout(timeout);
        }
    },[]);

    useEffect(() => {
        console.log("collapsed ", collapsed);
    },[collapsed])

    const skillSet  = skills.map((skill) => (
        
        <div className="skill">
            <div
                className="skillbar"
                key={skill.type}
                style={{
                    width:  collapsed ? "0%" : `${skill.level}%`,
                }}
            >
                <p>{skill.type}</p><span>{skill.level}</span>
            </div>
        </div>
    ))
    
    
    return (
        <Stack spacing={10} justifyContent="flex-end" alignItems="center" w="full" m={4}>
            
            <SlideFade
                direction="top"
                in={true}
                transition={{ enter: { duration: 0.4, delay: 0.3 } }}
            >
                <Heading  fontSize="64" p={0} w="full">
                    My Skills
                </Heading>
            </SlideFade>
            <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={20}>
                {
                    skills.map((skill) => (
        
                        <div className={`skill  ${collapsed ? "collapsed" : ""}`}>
                            
                            <div className="infobar"
                                style={{
                                    width: `${skill.level}%`,
                                }}
                            >
                                <p>{skill.type}</p>
                            </div>
                            <div className="skilbar-wrap">
                            <div
                                className="skillbar"
                                key={skill.type}
                                style={{
                                    width: `${skill.level}%`,
                                }}
                            >   
                                <div className="animation-bar" 
                                    style={{
                                        width: `${skill.level}%`,
                                    }}
                                >
                                </div>
                                <span>{skill.level}%</span>
                            </div>
                            </div>
                                
                        </div>
                    ))
                    
                }
            </SimpleGrid>
        </Stack>
    )
}

export default Skills
