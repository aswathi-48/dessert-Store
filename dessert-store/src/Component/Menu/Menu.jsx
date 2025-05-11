import React from 'react';
import './Menu.css'; // Optional for styling

const Menu = () => {
    const desserts = [
        { name: 'Chocolate Cake', image: '/Images/chocolate-cake.jpg' },
        { name: 'Strawberry Tart', image: '/Images/strawberry-tart.jpg' },
        { name: 'Macarons', image: '/Images/macarons.jpg' },
        { name: 'Cheesecake', image: '/Images/cheesecake.jpg' },
        { name: 'Lemon Meringue Pie', image: '/Images/lemon-meringue.jpg' },
        { name: 'Tiramisu', image: '/Images/tiramisu.jpg' },
        { name: 'Brownies', image: '/Images/brownies.jpg' },
        { name: 'Cupcakes', image: '/Images/cupcakes.jpg' },
        { name: 'Eclairs', image: '/Images/eclairs.jpg' },
        { name: 'Donuts', image: '/Images/donuts.jpg' },
        { name: 'Fruit Tart', image: '/Images/fruit-tart.jpg' },
        { name: 'Ice Cream Sundae', image: '/Images/sundae.jpg' },
        { name: 'Red Velvet Cake', image: '/Images/red-velvet.jpg' },
        { name: 'Banana Split', image: '/Images/banana-split.jpg' },
        { name: 'Churros', image: '/Images/churros.jpg' },
        { name: 'Creme Brulee', image: '/Images/creme-brulee.jpg' },
        { name: 'Mousse Cups', image: '/Images/mousse.jpg' },
        { name: 'Baklava', image: '/Images/baklava.jpg' },
        { name: 'Panna Cotta', image: '/Images/panna-cotta.jpg' },
        { name: 'Pumpkin Pie', image: '/Images/pumpkin-pie.jpg' },
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
