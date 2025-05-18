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


// import React, { useState, useRef } from 'react';
// import './Specials.css';

// const specialsData = [
// {
// id: 1,
// title: 'Chocolate Lava Cake',
// image: '/Images/lava-cake.jpg',
// video: 'https://www.youtube.com/embed/XOjfwIADbtg',
// description:
// 'Warm, rich chocolate cake with gooey center, served with vanilla ice cream.',
// price: '$6.99',
// detailContent: 'Chocolate lava cake is a popular dessert featuring a soft cake exterior with a warm, gooey chocolate center.',
// },
// {
// id: 2,
// title: 'Strawberry Cheesecake',
// image: '/Images/strawberry.jpg',
// video: 'https://www.youtube.com/embed/l2iLSo4EBpg',
// description:
// 'Creamy cheesecake with fresh strawberries and a graham cracker crust.',
// price: '$7.49',
// detailContent: 'Strawberry cheesecake combines sweet berries with a tangy creamy base — a classic dessert that everyone loves.',
// },
// {
// id: 3,
// title: 'Macaron Platter',
// image:
// 'https://media.istockphoto.com/id/1184466833/photo/platter-of-multicolored-macaroons.jpg?s=612x612&w=0&k=20&c=uFlL01c3TPJzdRR4nuWOcmlExoSNJIm3V0Hez_cgnqw=',
// video: 'https://www.youtube.com/embed/SE6EQH9nVdU',
// description:
// 'A colorful assortment of French macarons in various flavors.',
// price: '$8.99',
// detailContent: 'French macarons are delicate pastries with a crisp shell and soft interior, available in many exciting flavors.',
// },
// ];

// const Specials = () => {
// const [selectedSpecial, setSelectedSpecial] = useState(null);
// const detailRef = useRef(null);

// const handleCardClick = (item) => {
// setSelectedSpecial(item);
// setTimeout(() => {
// detailRef.current.scrollIntoView({ behavior: 'smooth' });
// }, 100);
// };

// return (
// <div className="specials-container">
// <h1 className="specials-heading">Today's Specials</h1>

//   <div className="specials-grid">
//     {specialsData.map((item) => (
//       <div
//         key={item.id}
//         className="special-card"
//         onClick={() => handleCardClick(item)}
//       >
//         <img src={item.image} alt={item.title} className="special-image" />
//         <h3 className="special-title">{item.title}</h3>
//         <p className="special-description">{item.description}</p>
//         <span className="special-price">{item.price}</span>
//       </div>
//     ))}
//   </div>

//   {selectedSpecial && (
//     <div ref={detailRef} className="special-detail">
//       <h2>{selectedSpecial.title}</h2>
//       <img
//         src={selectedSpecial.image}
//         alt={selectedSpecial.title}
//         className="detail-image"
//       />
//       <p className="detail-description">{selectedSpecial.detailContent}</p>
//       <div className="video-wrapper">
//         <iframe
//           width="560"
//           height="315"
//           src={selectedSpecial.video}
//           title="Special video"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         />
//       </div>
//     </div>
//   )}
// </div>
// );
// };

// export default Specials;

// import React, { useState, useRef } from 'react';
// import './Specials.css';

// const specialsData = [
//   {
//     id: 1,
//     title: 'Chocolate Lava Cake',
//     image: '/Images/lava-cake.jpg',
//     video: '../../../public/Videos/lava.mp4',
//     description: 'Warm, rich chocolate cake with gooey center, served with vanilla ice cream.',
//     price: '$6.99',
//     detailContent: 'Chocolate lava cake is a popular dessert featuring a soft cake exterior with a warm, gooey chocolate center.',
//   },
//   {
//     id: 2,
//     title: 'Strawberry Cheesecake',
//     image: '/Images/strawberry.jpg',
//     video: '../../../public/Videos/cheese.mp4',
//     description: 'Creamy cheesecake with fresh strawberries and a graham cracker crust.',
//     price: '$7.49',
//     detailContent: 'Strawberry cheesecake combines sweet berries with a tangy creamy base — a classic dessert that everyone loves.',
//   },
//   {
//     id: 3,
//     title: 'Macaron Platter',
//     image: 'https://media.istockphoto.com/id/1184466833/photo/platter-of-multicolored-macaroons.jpg?s=612x612&w=0&k=20&c=uFlL01c3TPJzdRR4nuWOcmlExoSNJIm3V0Hez_cgnqw=',
//     video: '/Videos/',
//     description: 'A colorful assortment of French macarons in various flavors.',
//     price: '$8.99',
//     detailContent: 'French macarons are delicate pastries with a crisp shell and soft interior, available in many exciting flavors.',
//   },
// ];

// const Specials = () => {
//   const [selectedSpecial, setSelectedSpecial] = useState(null);
//   const detailRef = useRef(null);

//   const handleCardClick = (item) => {
//     setSelectedSpecial(item);
//     setTimeout(() => {
//       detailRef.current.scrollIntoView({ behavior: 'smooth' });
//     }, 100);
//   };

//   return (
//     <div className="specials-containers">
//       <h1 className="specials-heading">Today's Specials</h1>

//       <div className="specials-grid">
//         {specialsData.map((item) => (
//           <div
//             key={item.id}
//             className="special-card"
//             onClick={() => handleCardClick(item)}
//           >
//             <img src={item.image} alt={item.title} className="special-image" />
//             <h3 className="special-title">{item.title}</h3>
//             <p className="special-description">{item.description}</p>
//             <span className="special-price">{item.price}</span>
//           </div>
//         ))}
//       </div>

//       {selectedSpecial && (
//         <div ref={detailRef} className="special-detail">
//           {/* Image + Title/Description Row */}
//           <div className="detail-row top-row">
//             <div className="detail-image-wrapper">
//               <img src={selectedSpecial.image} alt={selectedSpecial.title} className="detail-image" />
//             </div>
//             <div className="detail-info">
//               <h2>{selectedSpecial.title}</h2>
//               <p className="detail-description">{selectedSpecial.description}</p>
//             </div>
//           </div>

//           {/* Content + Video Row */}
//           <div className="detail-row bottom-row">
//             <div className="detail-content-text">
//               <p>{selectedSpecial.detailContent}</p>
//             </div>
//             <div className="video-wrapper">
//               <iframe
//                 width="100%"
//                 height="315"
//                 src={selectedSpecial.video}
//                 title="Special video"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Specials;


import React, { useState, useRef } from 'react';
import './Specials.css';

const specialsData = [
    {
        id: 1,
        title: 'Chocolate Lava Cake',
        image: '/Images/lava-cake.jpg',
        video: '../../../public/Videos/lava.mp4',
        description: 'Warm, rich chocolate cake with gooey center, served with vanilla ice cream.',
        descriptions: 'A warm, rich chocolate cake with a gooey molten center, delicately baked to perfection and served alongside a scoop of creamy vanilla ice cream. The contrast of hot fudge-filled core and cool, smooth ice cream creates a symphony of flavors and textures in every bite.',
        price: '$6.99',
        detailContent: 'Chocolate lava cake is an indulgent dessert that combines the fluffiness of sponge cake with the richness of molten chocolate. The cake is slightly crisp on the outside, while the inside flows with thick, luxurious ganache the moment it’s cut into. Paired with cold vanilla bean ice cream or fresh berries, it offers a delightful blend of warm and cold, soft and smooth. Ideal for romantic dinners or special celebrations, this dessert never fails to impress with its dramatic presentation and decadent flavor.',
    },
    {
        id: 2,
        title: 'Strawberry Cheesecake',
        image: '/Images/strawberry.jpg',
        video: '../../../public/Videos/cheese.mp4',
        description: 'Creamy cheesecake with fresh strawberries and a graham cracker crust.',
        descriptions: 'A lusciously smooth and creamy cheesecake topped with hand-picked strawberries and a glossy strawberry glaze, all nestled atop a buttery, golden graham cracker crust. This dessert delivers a harmonious balance of tart fruitiness and rich sweetness.',
        price: '$7.49',
        detailContent: 'Our strawberry cheesecake is a celebration of flavors and textures. The velvety cheesecake filling is made with premium cream cheese, whipped to a silky consistency and infused with a hint of vanilla and lemon zest. The topping includes fresh, juicy strawberries layered over a homemade strawberry compote, adding a vibrant, fruity kick. The buttery graham cracker base provides a crunchy contrast, making each forkful an experience of smooth, sweet, and satisfying delight. Perfect for afternoon tea, festive dinners, or simply treating yourself.',
    },
    {
        id: 3,
        title: 'Macaron Platter',
        image: 'https://media.istockphoto.com/id/1184466833/photo/platter-of-multicolored-macaroons.jpg?s=612x612&w=0&k=20&c=uFlL01c3TPJzdRR4nuWOcmlExoSNJIm3V0Hez_cgnqw=',
        video: '/Videos/',
        description: 'A colorful assortment of French macarons in various flavors.',
        descriptions: 'A vibrant and sophisticated assortment of handmade French macarons, featuring a rainbow of colors and a rich variety of flavors such as pistachio, lemon, raspberry, vanilla bean, chocolate ganache, and salted caramel.',
        price: '$8.99',
        detailContent: 'This macaron platter offers an elegant display of pastel-colored treats, each crafted using almond flour, egg whites, and a touch of artistry. Light and crisp on the outside with a chewy, flavorful filling inside, these macarons melt in your mouth. From the nutty earthiness of pistachio to the rich indulgence of chocolate ganache, every flavor is designed to delight your taste buds. Ideal for parties, high tea, or gifting, our macaron platter adds a touch of French sophistication to any occasion.',
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
        <div className="dessert-section">
            <h1 className="dessert-title">Today's Specials</h1>

            <div className="dessert-grid">
                {specialsData.map((item) => (
                    <div
                        key={item.id}
                        className="dessert-card"
                        onClick={() => handleCardClick(item)}
                    >
                        <img src={item.image} alt={item.title} className="dessert-image" />
                        <h3 className="dessert-name">{item.title}</h3>
                        <p className="dessert-summary">{item.description}</p>
                        <span className="dessert-cost">{item.price}</span>
                    </div>
                ))}
            </div>

            {selectedSpecial && (
                <div ref={detailRef} className="dessert-details">
                    <div className="dessert-row top-detail">
                        <div className="dessert-img-box">
                            <img src={selectedSpecial.image} alt={selectedSpecial.title} className="dessert-full-image" height={500} />
                        </div>
                        <div className="dessert-info-box">
                            <h2>{selectedSpecial.title}</h2>
                            <p className="dessert-info-summary">{selectedSpecial.descriptions}</p>
                        </div>
                    </div>

                    <div className="dessert-row bottom-detail">
                        <div className="dessert-full-desc">
                            <p>{selectedSpecial.detailContent}</p>
                        </div>
                        <div className="dessert-video-box">
                            <video
                                key={selectedSpecial.video} 
                                width="100%"
                                height="315"
                                autoPlay
                                loop
                                muted
                            >
                                <source src={selectedSpecial.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Specials;
