import React from "react";
import { Box, Heading, Flex, Text, Button, SimpleGrid, Link,Image } from "@chakra-ui/core";

const MenuItems = ({ children }) => (
    <Text mt={{ base: 4, md: 0 }} mr={12} display="block" color="menuText" fontSize="menuFont" fontFamily="brandFont">
        {children}
    </Text>
);

const Header = props => {
    const [show, setShow] = React.useState(false);
    const handleToggle = () => setShow(!show);

    return (
        <SimpleGrid rows={2} >
            <Flex
                align="center"
                justify="center"
                wrap="wrap"
                bg="cookieBar"
                height={30}
                color="cookieBarText"
                {...props}
            >
            <Text textAlign="center" fontSize={'cookieFont'} fontFamily="brandFont">By using this site you agree to the use of cookies. To find out more see here:
                <Link color="cookieBarLink" href="#" fontFamily="cookieText">
                         Cookies Policy
                </Link>
            </Text>
       
            

            </Flex>
            {/* <Text textAlign="right" marginRight="35px" fontFamily="brandFont">X</Text> */}
            <Flex
                as="nav"
                justify="space-between"
                wrap="wrap"
                bg="brandBackground"
                height={150}
                color="cookieBarText"
                {...props}
            >
                <Flex mr={30} ml={70}>
                    <Image src={require('./assets/autpost_logo.jpeg')} height={70} width={235} />
                </Flex>

                <Box display={{ sm: "block", md: "none" }} onClick={handleToggle} mr={30} mt={5}>
                    <svg
                        fill="black"
                        width="30px"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </Box>

                <Box
                    display={{ sm: show ? "block" : "none", md: "flex" }}
                    width={{ sm: "full", md: "auto" }}
                    alignItems="center"
                    flexGrow={1}
                    ml={30}
                    mb={70}
                >

                    <MenuItems>Our Story</MenuItems>
                    <MenuItems >Latest News</MenuItems>
                    <MenuItems >Advertise With Us</MenuItems>
                </Box>
                <Box
                    display={{ sm: show ? "block" : "none", md: "block" }}
                    mt={{ base: 4, md: 0 }}
                    alignItems="center"
                >
                    <Button bg="buttonColor" color="white"  fontFamily="brandFont" width={140} height={ 45} ml={25} mt="20px" mr={20}>
                    LOG IN
        </Button>
                </Box>
                <Box
                    display={{ sm: show ? "block" : "none", md: "block" }}
                    mt={{ base: 4, md: 0 }}
                    alignItems="center"
                >
                    <Button bg="buttonColor" color="white" fontFamily="brandFont"  width={140} height={45} mt="20px" mr={75}>
                    SIGN UP
        </Button>
                </Box>
            </Flex>
            </SimpleGrid>
    );
};

export default Header;
