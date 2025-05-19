// import React from 'react';
// import { useParams } from 'react-router-dom';
// import dessertItems from '../../data/desserts.json';
// import './Menudetail.css'

// const MenuDetails = () => {
//     const { name } = useParams();
//     const decodedName = decodeURIComponent(name);
//     const dessert = dessertItems.find(item => item.name === decodedName);

//     if (!dessert) return <p>Dessert not found!</p>;

//     return (
//         <div className="dessert-detail">
//             <img src={dessert.image} alt={dessert.name} />
//             <h2>{dessert.name}</h2>
//             <p className="price">{dessert.price}</p>
//             <p className="description">{dessert.description}</p>
//         </div>
//     );
// };

// export default MenuDetails;


import React from 'react';
import { useParams } from 'react-router-dom';
import dessertItems from '../../data/desserts.json';
import './Menudetail.css';

const MenuDetails = () => {
    const { name } = useParams();
    const decodedName = decodeURIComponent(name);
    const dessert = dessertItems.find(item => item.name === decodedName);

    if (!dessert) return <p>Dessert not found!</p>;

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(<span key={i} className={i <= rating ? 'star filled' : 'star'}>★</span>);
        }
        return stars;
    };

    return (
        <div className="dessert-detail">
            <div className="dessert-image">
                <img src={dessert.image} alt={dessert.name} />
            </div>
            <div className="dessert-info">
                <h2>{dessert.name}</h2>
                <p className="price">{dessert.price}</p>
                <p className="description">{dessert.description}</p>
                {dessert.reviews && dessert.reviews.length > 0 && (
                    <div className="reviews">
                        <h4>Customer Reviews</h4>
                        {dessert.reviews.map((review, index) => (
                            <div key={index} className="review">
                                <p><strong>{review.user}</strong>: {review.comment}</p>
                                <p className="stars">Rating: {renderStars(review.rating)}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MenuDetails;
