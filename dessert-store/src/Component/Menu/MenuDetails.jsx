import React from 'react';
import { useParams } from 'react-router-dom';
import dessertItems from '../../data/desserts.json';
import './Menudetail.css'

const MenuDetails = () => {
    const { name } = useParams();
    const decodedName = decodeURIComponent(name);
    const dessert = dessertItems.find(item => item.name === decodedName);

    if (!dessert) return <p>Dessert not found!</p>;

    return (
        <div className="dessert-detail">
            <img src={dessert.image} alt={dessert.name} />
            <h2>{dessert.name}</h2>
            <p className="price">{dessert.price}</p>
            <p className="description">{dessert.description}</p>
        </div>
    );
};

export default MenuDetails;
