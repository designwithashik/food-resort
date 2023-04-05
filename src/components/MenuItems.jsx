import { Grid, Heading, Select, SelectField } from '@chakra-ui/react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Dish from './Dish';


const MenuItems = () => {
    const meals = useLoaderData()
    // console.log(meals)
    return (
        <div>
            <Grid templateColumns='repeat(5, 1fr)'>
            {meals.meals.map(meal => <Dish key={meal.idMeal} {...meal}></Dish>)}
            </Grid>
        </div>
    );
};

export default MenuItems;