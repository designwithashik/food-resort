import { Button, Card, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Dish = ({ strMeal, strMealThumb, idMeal}) => {
    // console.log(meal)
    return (
        <Card m={5} p={7}>
            <Heading fontSize={31} mb={5}>{strMeal}</Heading>
            <Image borderRadius={15} mt='auto' src={strMealThumb}></Image>
            <Link style={{display: 'flex', justifyContent: 'center'}} to={`/dish/${idMeal}`}><Button mt={5}>Dish Details</Button></Link>
 
        </Card>
    );
};

export default Dish;