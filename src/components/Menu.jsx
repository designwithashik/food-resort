import { Grid, Heading, Select } from '@chakra-ui/react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Dish from './Dish';

const Menu = () => {
    const meals = useLoaderData()
    console.log(meals)
    return (
        <div>
            <Heading> Choose Your Favorite Food!</Heading>
            <Select></Select>
            <Grid templateColumns='repeat(5, 1fr)'>
            {meals.meals.map(meal => <Dish key={meal.idMeal} {...meal}></Dish>)}
            </Grid>
        </div>
    );
};

export default Menu;