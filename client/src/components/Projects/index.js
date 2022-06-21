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
import React, {Fragment,useState, useEffect,useRef} from 'react'
import ProjectCard from '../../components/ProjectCard';
import './style.css';
import demo from '../../images/demo.jpg';
import projectList from './projectList';
// const projectList = require("./projectList");

function Projects() {
    
    const [field, setField] = useState("All");
    const allRef = useRef(null);
    const MERNRef = useRef(null);
    const ReactRef = useRef(null);
    const NPMRef = useRef(null);
    const [projectsToDisplay, setProjectsToDisplay] = useState(
        projectList().map((project) => (
            <ProjectCard 
                title={project.title}
                tag={project.tags} 
                imageURL={project.img}  
                desc={project.desc}
                githubLink={project.githubLink}
                videoLink={project.videoLink}
                npmLink={project.npmLink}
            />
        ))
    );
    
    const changeField = (newField) => {
        setField(newField);
        if(newField === "All" ) {

            allRef.current.classList.add("underlined");
            if(MERNRef.current.classList.contains("underlined"))
            {
                MERNRef.current.classList.remove("underlined");
            }
            else if(ReactRef.current.classList.contains("underlined"))
            {
                ReactRef.current.classList.remove("underlined");
            }
            else if (NPMRef.current.classList.contains("underlined"))
            {
                NPMRef.current.classList.remove("underlined");
            }
        } else if( newField === "MERN") {
            MERNRef.current.classList.add("underlined");
            if(allRef.current.classList.contains("underlined"))
            {
                allRef.current.classList.remove("underlined");
            }
            else if(ReactRef.current.classList.contains("underlined"))
            {
                ReactRef.current.classList.remove("underlined");
            }
            else if(NPMRef.current.classList.contains("underlined"))
            {
                NPMRef.current.classList.remove("underlined");
            }
        } else if(newField === 'React') {
            ReactRef.current.classList.add("underlined");
            if(MERNRef.current.classList.contains("underlined"))
            {
                MERNRef.current.classList.remove("underlined");
            }
            else if(NPMRef.current.classList.contains("underlined"))
            {
                NPMRef.current.classList.remove("underlined");
            }
            else if(allRef.current.classList.contains("underlined"))
            {
                allRef.current.classList.remove("underlined");
            }
        } else {
            NPMRef.current.classList.add("underlined");
            if(MERNRef.current.classList.contains("underlined"))
            {
                MERNRef.current.classList.remove("underlined");
            }
            else if(ReactRef.current.classList.contains("underlined"))
            {
                ReactRef.current.classList.remove("underlined");
            }
            else if(allRef.current.classList.contains("underlined"))
            {
                allRef.current.classList.remove("underlined");
            }
        }
    };

    useEffect(()=>{
        console.log(field);    
        if(field === "All") {
                setProjectsToDisplay(
                    projectList().map((project) => (
                        <ProjectCard 
                            title={project.title}
                            tag={project.tags} 
                            imageURL={project.img}  
                            desc={project.desc}
                            githubLink={project.githubLink}
                            videoLink={project.videoLink}
                            deployLink={project.deployLink}
                             npmLink={project.npmLink}
                        />
                    ))
                )
            }else {
                console.log("setting here");
                setProjectsToDisplay(
                    projectList().map((project) => {
                        
                        if(project.categories.includes(field))
                        return <ProjectCard 
                            title={project.title}
                            tag={project.tags} 
                            imageURL={project.img}  
                            desc={project.desc}
                            githubLink={project.githubLink}
                            videoLink={project.videoLink}
                            deployLink={project.deployLink}
                             npmLink={project.npmLink}
                        />
                        else return null
                    })
                )
            }
        },[field]);
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
                    <div className="category-options underlined" ref={allRef} onClick={()=>changeField("All")}>
                        <Text  m={4} fontSize="l" color="">All</Text>
                    </div>
                    <Spacer />
                    <div className="category-options" ref={MERNRef} onClick={()=>changeField("MERN")}>
                        <Text m={4} fontSize="l" color="">MERN</Text>
                    </div>
                    <Spacer />
                    <div className="category-options" ref={ReactRef} onClick={()=>changeField("React")}>
                        <Text m={4} fontSize="l" color="">React</Text>
                    </div>
                    <Spacer />
                    <div className="category-options" ref={NPMRef} onClick={()=>changeField("NPM")}>
                        <Text m={4} fontSize="l" color="">NPM</Text>
                    </div>
                    <Spacer />
                </Flex>
            </Box>
            
            <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={16}>
                {projectsToDisplay}
            </SimpleGrid>
            
        </Stack>
    )
}

export default Projects


