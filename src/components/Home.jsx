// import { Heading } from '@chakra-ui/react/dist';
import { Heading, CardBody, Image, Text, Container } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Heading textAlign='center' my={50}>Welcome To Food Resort</Heading>
            <Image mx='auto' cursor='pointer' borderRadius={15} src='https://images.unsplash.com/photo-1482049016688-2d3e1b311543?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8Zm9vZHx8fHx8fDE2ODA2NjQ0MTY&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800'></Image>
            <Heading textAlign='center' my={50}>Our Signature Dish: Egg  Valvet</Heading>
            <Container>
            <Text>
Egg Valvet is one of our signature dishes at the restaurant, and for good reason. This classic Indian breakfast dish has been a favorite of our customers for years, and we take great pride in preparing it to perfection every time.</Text>

    <Text>Our version of Egg Valvet features fluffy scrambled eggs cooked with a medley of sautéed onions, tomatoes, and green chilies, seasoned with a blend of fragrant spices that give the dish its distinctive flavor and aroma. We believe that the key to a great Egg Valvet lies in the quality of the ingredients and the skill of the chef, and we use only the freshest and most flavorful ingredients to prepare this dish.</Text>

<Text>To prepare Egg Valvet, we start by sautéing the onions, tomatoes, and green chilies until they are soft and tender, bringing out their natural sweetness and tanginess. Then, we add in the eggs, which have been whisked together with a pinch of turmeric powder, salt, and black pepper, and cook them until they are light and fluffy. Finally, we finish the dish with a generous garnish of fresh coriander leaves, which add a bright and refreshing touch to the dish.</Text>

<Text>Egg Valvet is a versatile dish that can be enjoyed for breakfast, lunch, or dinner. It pairs well with a variety of breads and toasts, and can be customized to your taste preferences by adding additional spices or ingredients. Whether you're in the mood for something spicy and bold, or something milder and more comforting, Egg Valvet is the perfect choice.</Text>

<Text>At our restaurant, we take great pride in our signature dishes, and Egg Valvet is no exception. We believe that this dish represents the very best of Indian cuisine, with its bold flavors, complex spices, and satisfying texture. We invite you to come in and try our Egg Valvet today, and experience the rich and vibrant flavors of this beloved dish for yourself.</Text>
            </Container>
        </div>
    );
};

export default Home;