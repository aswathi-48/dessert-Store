import React from 'react';
import { useParams } from 'react-router-dom';
import dessertItems from '../../data/desserts.json';
import './Menudetail.css';

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

            {dessert.ingredients && (
                <div className="ingredients">
                    <h4>Ingredients</h4>
                    <ul>
                        {dessert.ingredients.map((ing, index) => (
                            <li key={index}>{ing}</li>
                        ))}
                    </ul>
                </div>
            )}

            {dessert.allergy_info && (
                <p className="allergy-info"><strong>Allergy Info:</strong> {dessert.allergy_info}</p>
            )}

            {dessert.nutrition && (
                <div className="nutrition">
                    <h4>Nutrition Facts</h4>
                    <ul>
                        <li><strong>Calories:</strong> {dessert.nutrition.calories}</li>
                        <li><strong>Fat:</strong> {dessert.nutrition.fat}</li>
                        <li><strong>Carbs:</strong> {dessert.nutrition.carbs}</li>
                        <li><strong>Protein:</strong> {dessert.nutrition.protein}</li>
                    </ul>
                </div>
            )}

            {dessert.reviews && dessert.reviews.length > 0 && (
                <div className="reviews">
                    <h4>Customer Reviews</h4>
                    {dessert.reviews.map((review, index) => (
                        <div key={index} className="review">
                            <p><strong>{review.user}</strong>: {review.comment}</p>
                            <p>Rating: {review.rating}/5</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MenuDetails;
