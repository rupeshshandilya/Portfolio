import { HStack, chakra,Link, Heading, Button, IconButton, useColorMode} from "@chakra-ui/react";
import NextLink from "next/link";
import {motion} from "framer-motion";
import { IoMoon, IoSunny } from 'react-icons/io5';

const Header = () => {
    const { colorMode, toggleColorMode} = useColorMode()
    const MotionButton = motion(Button);
    return (
        <HStack as='nav' justifyContent='space-between' alignItems='center' py={3}>
            <NextLink href='/' passHref>
                <Link>
                <Heading size='sm'>Rupesh Shandilya</Heading>
                </Link>
            </NextLink>
            <HStack alignItems='center' spacing={{ base: 0, md: 2}}>
                <NextLink href='/' passHref>
                    <MotionButton as={Link} size='sm' variant='ghost'>
                        About
                    </MotionButton>
                </NextLink>
                <NextLink href='/' passHref>
                    <MotionButton as={Link} size='sm' variant='ghost'>
                        Projects
                    </MotionButton>
                </NextLink>
                <NextLink href='/' passHref>
                    <MotionButton as={Link} size='sm' variant='ghost'>
                        Contact
                    </MotionButton>
                </NextLink>
                <IconButton
                aria-label='toggle-theme'
                icon={colorMode === 'light' ? <IoMoon /> : <IoSunny/>}
                variant='ghost'
                size='sm'
                onClick={toggleColorMode}/>
            </HStack>
        </HStack>
    )
}

export default Header;