import React from 'react';
import './Menu.css';
import dessertItems from '../../data/desserts.json'

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
