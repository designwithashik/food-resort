import React from 'react';
import ActiveLink from './ActiveLink';
import { Container, Flex, Text } from '@chakra-ui/react';

const Header = () => {
    return (
        <nav>
            <Flex justifyContent='space-between' py='15px' backgroundColor='violet'>
                <Container>
                <Text fontSize='21px' fontWeight={500} color='white'>Food Resort</Text>
                </Container>
                <Container display='flex' gap='51px'> 
            <ActiveLink to='/'>Home</ActiveLink>
            <ActiveLink to='/menu'>Menu</ActiveLink>
            <ActiveLink to='/search'>Search</ActiveLink>
            <ActiveLink to='/cart'>Cart</ActiveLink>
                </Container>
            </Flex>
        </nav>
    );
};

export default Header;