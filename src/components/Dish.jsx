import { Card, Heading, Image } from '@chakra-ui/react';
import React from 'react';

const Dish = ({strMeal, strMealThumb}) => {
    // console.log(meal)
    return (
        <Card m={5} p={7}>
            <Heading fontSize={31} mb={5}>{strMeal}</Heading>
            <Image borderRadius={15} mt='auto' src={strMealThumb}></Image>
        </Card>
    );
};

export default Dish;