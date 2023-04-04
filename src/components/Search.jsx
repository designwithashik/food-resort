import { Button, Input, Text } from '@chakra-ui/react';
import React from 'react';

const Search = () => {
    return (
        <div>
            <Text>Looking for the best?</Text> <Input type='search'></Input><Button>Search</Button>
            <h1>Hello</h1>
        </div>
    );
};

export default Search;