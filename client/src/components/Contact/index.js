import { Link, Button, chakra, Heading, Stack, Text } from '@chakra-ui/react'
import useMediaQuery from '../../hook/useMediaQuery'
import { FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa'

// import ReactGA from 'react-ga'

export default function ContactMe() {
  const isLargerThan800 = useMediaQuery(800)
  return (
    <>
      <Stack
        spacing={10}
        h="70vh"
        w="100%"
        alignItems="center"
        justifyContent="center"
      >
        
          <Heading fontSize={{ base: '4xl', md: '5xl' }} textAlign="center">
            Keep In Touch.
          </Heading>
        

        
          <Text fontSize="md" color="textSecondary" textAlign="center">
            I'm currently open to work as a{' '}
            <chakra.span
              color="button1"
              display={{ base: 'block', md: 'inline' }}
            >
              {' '}
              Front-end Developer/ Web Developer,
            </chakra.span>
            <br />and am looking for a semeter long internship staring from 2022 start
            <br /> Let's get in touch and talk more about your projects.
          </Text>
        

        
          <Stack isInline spacing={4}>
            <Link
              href="https://www.linkedin.com/in/abhinav-anand-7b882715a/"
              isExternal
              
            >
              <Button
                leftIcon={<FaLinkedin fill="#3CCF91" />}
                position="static"
                size={isLargerThan800 ? 'md' : 'sm'}
                color="white"
              >
                LinkedIn
              </Button>
            </Link>
            <Link
              href="mailto:abhinavanand4987@gmail.com"
              isExternal
              
            >
              <Button
                color="white"
                leftIcon={<FaEnvelope fill="#3CCF91" />}
                transition="0.3s"
                position="static"
                size={isLargerThan800 ? 'md' : 'sm'}
              >
                Email
              </Button>
            </Link>
          </Stack>
        
      </Stack>
    </>
  )
}