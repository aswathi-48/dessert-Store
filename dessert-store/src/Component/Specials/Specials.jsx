// import React from 'react';
// import './Specials.css';

// const specialsData = [
//     {
//         id: 1,
//         title: 'Chocolate Lava Cake',
//         image: '/Images/lava-cake.jpg',
//         description: 'Warm, rich chocolate cake with gooey center, served with vanilla ice cream.',
//         price: '$6.99',
//     },
//     {
//         id: 2,
//         title: 'Strawberry Cheesecake',
//         image: '/Images/strawberry.jpg',
//         description: 'Creamy cheesecake with fresh strawberries and a graham cracker crust.',
//         price: '$7.49',
//     },
//     {
//         id: 3,
//         title: 'Macaron Platter',
//         image: 'https://media.istockphoto.com/id/1184466833/photo/platter-of-multicolored-macaroons.jpg?s=612x612&w=0&k=20&c=uFlL01c3TPJzdRR4nuWOcmlExoSNJIm3V0Hez_cgnqw=',
//         description: 'A colorful assortment of French macarons in various flavors.',
//         price: '$8.99',
//     },
// ];

// const Specials = () => {
//     return (
//         <div className="specials-container">
//             <h1 className="specials-heading">Today's Specials</h1>
//             <div className="specials-grid">
//                 {specialsData.map((item) => (
//                     <div key={item.id} className="special-card">
//                         <img src={item.image} alt={item.title} className="special-image" />
//                         <h3 className="special-title">{item.title}</h3>
//                         <p className="special-description">{item.description}</p>
//                         <span className="special-price">{item.price}</span>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Specials;


import React, { useState, useRef } from 'react';
import './Specials.css';

const specialsData = [
{
id: 1,
title: 'Chocolate Lava Cake',
image: '/Images/lava-cake.jpg',
video: 'https://www.youtube.com/embed/XOjfwIADbtg',
description:
'Warm, rich chocolate cake with gooey center, served with vanilla ice cream.',
price: '$6.99',
detailContent: 'Chocolate lava cake is a popular dessert featuring a soft cake exterior with a warm, gooey chocolate center.',
},
{
id: 2,
title: 'Strawberry Cheesecake',
image: '/Images/strawberry.jpg',
video: 'https://www.youtube.com/embed/l2iLSo4EBpg',
description:
'Creamy cheesecake with fresh strawberries and a graham cracker crust.',
price: '$7.49',
detailContent: 'Strawberry cheesecake combines sweet berries with a tangy creamy base — a classic dessert that everyone loves.',
},
{
id: 3,
title: 'Macaron Platter',
image:
'https://media.istockphoto.com/id/1184466833/photo/platter-of-multicolored-macaroons.jpg?s=612x612&w=0&k=20&c=uFlL01c3TPJzdRR4nuWOcmlExoSNJIm3V0Hez_cgnqw=',
video: 'https://www.youtube.com/embed/SE6EQH9nVdU',
description:
'A colorful assortment of French macarons in various flavors.',
price: '$8.99',
detailContent: 'French macarons are delicate pastries with a crisp shell and soft interior, available in many exciting flavors.',
},
];

const Specials = () => {
const [selectedSpecial, setSelectedSpecial] = useState(null);
const detailRef = useRef(null);

const handleCardClick = (item) => {
setSelectedSpecial(item);
setTimeout(() => {
detailRef.current.scrollIntoView({ behavior: 'smooth' });
}, 100);
};

return (
<div className="specials-container">
<h1 className="specials-heading">Today's Specials</h1>

  <div className="specials-grid">
    {specialsData.map((item) => (
      <div
        key={item.id}
        className="special-card"
        onClick={() => handleCardClick(item)}
      >
        <img src={item.image} alt={item.title} className="special-image" />
        <h3 className="special-title">{item.title}</h3>
        <p className="special-description">{item.description}</p>
        <span className="special-price">{item.price}</span>
      </div>
    ))}
  </div>

  {selectedSpecial && (
    <div ref={detailRef} className="special-detail">
      <h2>{selectedSpecial.title}</h2>
      <img
        src={selectedSpecial.image}
        alt={selectedSpecial.title}
        className="detail-image"
      />
      <p className="detail-description">{selectedSpecial.detailContent}</p>
      <div className="video-wrapper">
        <iframe
          width="560"
          height="315"
          src={selectedSpecial.video}
          title="Special video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )}
</div>
);
};

export default Specials;