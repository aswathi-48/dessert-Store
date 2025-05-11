import React from 'react';
import './Menu.css';

const dessertItems = [
    {
        name: "Chocolate Lava Cake",
        price: "$6.99",
        image: "/Images/lava-cake.jpg",
        description: "Warm chocolate cake with gooey molten center.",
    },
    {
        name: "Strawberry Cheesecake",
        price: "$5.99",
        image: "/Images/cheesecake.jpg",
        description: "Creamy cheesecake topped with fresh strawberries.",
    },
    {
        name: "Macarons Box",
        price: "$9.99",
        image: "/Images/macarons.jpg",
        description: "Colorful French macarons with assorted flavors.",
    },
    {
        name: "Tiramisu",
        price: "$7.50",
        image: "/Images/tiramisu.jpg",
        description: "Classic Italian dessert with coffee and mascarpone.",
    },
];

const Menu = () => {
    return (
        <section className="menu-section">
            <h2>Our Dessert Menu</h2>
            <div className="menu-grid">
                {dessertItems.map((item, index) => (
                    <div key={index} className="menu-item">
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p className="price">{item.price}</p>
                        <p className="description">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Menu;
