import React from 'react';
import './Menu.css'; // Optional for styling

const Menu = () => {
    const desserts = [
        { name: 'Chocolate Cake', image: '/Images/chocolate-cake.jpg' },
        { name: 'Strawberry Tart', image: '/Images/strawberry-tart.jpg' },
        { name: 'Macarons', image: '/Images/macarons.jpg' },
        { name: 'Cheesecake', image: '/Images/cheesecake.jpg' },
    ];

    return (
        <div className="menu-page">
            <h1>Our Dessert Menu</h1>
            <div className="dessert-grid">
                {desserts.map((item, index) => (
                    <div key={index} className="dessert-card">
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
