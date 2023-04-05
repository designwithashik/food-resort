import { Grid, Heading, Select, SelectField } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLoaderData, useNavigate } from 'react-router-dom';
import Dish from './Dish';

const Menu = () => {
    const [selectedClient, setSelectedClient] = useState('Indian');
    const navigate = useNavigate();

    useEffect(() => {
        navigate(`${selectedClient}`)
    },[selectedClient])

    function handleSelectChange(event) {
        setSelectedClient(event.target.value);
    }

    console.log(selectedClient)
    // handleChange = (event) => {
    //     this.setState({selectValue: event.target.value})
    //    console.log(value)
    // }
   const countries = ["Japanese", "Chinese", "Canadian", "Mexican", "Italian", "French", "Spanish", "Thai", "Indian", "Greek",
                     "Turkish", "Lebanese", "Korean", "Vietnamese", "Brazilian", "Peruvian", "Argentinian", "Colombian", "German", "British",
                     "Irish", "Scottish", "Swedish", "Norwegian", "Finnish", "Russian", "Ukrainian", "Polish", "Czech", "Hungarian",
                     "Romanian", "Bulgarian", "Serbian", "Croatian", "Slovenian", "Austrian", "Swiss", "Dutch", "Belgian", "Portuguese",
                     "Moroccan", "Egyptian", "Tunisian", "Algerian", "Ethiopian", "South African", "Nigerian", "Ghanaian", "Kenyan",
                     "Tanzanian", "Ugandan", "Zimbabwean", "Zambian", "Australian", "New Zealand", "American", "Mexican", "Brazilian",
                     "Peruvian", "Argentinian", "Colombian", "Canadian", "Singaporean", "Malaysian", "Indonesian", "Filipino", "Cambodian",
                     "Laotian", "Myanmarese", "Bangladeshi", "Pakistani", "Sri Lankan", "Nepalese", "Afghan", "Iranian", "Iraqi",
                     "Israeli", "Palestinian", "Syrian", "Lebanese", "Jordanian", "Saudi Arabian", "Emirati", "Omani", "Qatari", "Kuwaiti",
                     "Bahraini", "Turkmen", "Kazakh", "Uzbek", "Kyrgyz", "Tajik", "Mongolian"];
    const meals = useLoaderData()
    // console.log(meals)
    return (
        <div>
            <Heading> Choose Your Favorite Food!</Heading>
            <Select value={selectedClient} onChange={handleSelectChange}>
                {countries.map((country, index) => <option key={index} value={`${country}`}>{country}</option>)}
            </Select>
           <Outlet/>
        </div>
    );
};

export default Menu;