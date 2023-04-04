// import { Heading } from '@chakra-ui/react/dist';
import { Heading, CardBody } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Heading>Welcome To Food Resort</Heading>
        </div>
    );
};

export default Home;