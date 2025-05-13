import React from 'react';
import './Specials.css';

const specialsData = [
    {
        id: 1,
        title: 'Chocolate Lava Cake',
        image: '/Images/lava-cake.jpg',
        description: 'Warm, rich chocolate cake with gooey center, served with vanilla ice cream.',
        price: '$6.99',
    },
    {
        id: 2,
        title: 'Strawberry Cheesecake',
        image: '/Images/strawberry.jpg',
        description: 'Creamy cheesecake with fresh strawberries and a graham cracker crust.',
        price: '$7.49',
    },
    {
        id: 3,
        title: 'Macaron Platter',
        image: 'https://media.istockphoto.com/id/1184466833/photo/platter-of-multicolored-macaroons.jpg?s=612x612&w=0&k=20&c=uFlL01c3TPJzdRR4nuWOcmlExoSNJIm3V0Hez_cgnqw=',
        description: 'A colorful assortment of French macarons in various flavors.',
        price: '$8.99',
    },
];

const Specials = () => {
    return (
        <div className="specials-container">
            <h1 className="specials-heading">Today's Specials</h1>
            <div className="specials-grid">
                {specialsData.map((item) => (
                    <div key={item.id} className="special-card">
                        <img src={item.image} alt={item.title} className="special-image" />
                        <h3 className="special-title">{item.title}</h3>
                        <p className="special-description">{item.description}</p>
                        <span className="special-price">{item.price}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Specials;

