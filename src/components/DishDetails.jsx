import { Button, Card, Heading, Image } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const DishDetails = () => {
    const meal = useLoaderData()
    console.log(meal)

    const { strMeal, strMealThumb } = meal.meals[0]
    return (
        <>
            <Container>
            <Heading fontSize={31} mb={5}>{strMeal}</Heading>
                <Image borderRadius={15} mt='auto' src={strMealThumb}></Image>
                <Link  to={`/menu`}>
            <Button mx='auto'>Go Back</Button>
                </Link>
            </Container>
        </>
    );
};

export default DishDetails;