// import React, { useRef } from 'react';
// import './Home.css';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// const slides = [
//   {
//     image: '/Images/cake.jpg',
//     title: 'Delicious Cakes',
//     description: 'Made fresh every day with love!'
//   },
//   {
//     image: '/Images/allen-rad-JBIK4QZOFfc-unsplash.jpg',
//     title: 'Tasty Pastries',
//     description: 'Sweet, flaky, and unforgettable.'
//   },
//   {
//     image: '/Images/dessert.jpg',
//     title: 'Dessert Heaven',
//     description: 'Explore the joy of every bite.'
//   }
// ];

// const Home = () => {
//   const sliderRef = useRef(null);

//   const scrollLeft = () => {
//     sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth, behavior: 'smooth' });
//   };

//   const scrollRight = () => {
//     sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: 'smooth' });
//   };

//   return (
//     <div className="slider-wrapper">
//       <button className="arrow left" onClick={scrollLeft}>
//         <FaChevronLeft />
//       </button>
//       <div className="slider-container" ref={sliderRef}>
//         {slides.map((slide, index) => (
//           <div className="slide" key={index}>
//             <img src={slide.image} alt={`slide-${index}`} />
//             <div className="slide-text">
//               <h2>{slide.title}</h2>
//               <p>{slide.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button className="arrow right" onClick={scrollRight}>
//         <FaChevronRight />
//       </button>
//     </div>
//   );
// };

// export default Home;

// import React from 'react';
// import './Home.css';

// const Home = () => {
//   return (
//     <div className="home-page">
//       {/* Hero Section */}
//       <section className="hero">
//         <h1>🍰 Welcome to SweetTreats</h1>
//         <p>Delicious desserts made with love. Order your favorite now!</p>
//         <button className="order-btn">Explore Desserts</button>
//       </section>

//       {/* Featured Desserts */}
//       <section className="featured">
//         <h2>Our Favorites</h2>
//         <div className="dessert-grid">
//           <div className="dessert-card">
//             <img src="/Images/cake.jpg" alt="Cake" />
//             <h3>Chocolate Cake</h3>
//           </div>
//           <div className="dessert-card">
//             <img src="/Images/cake.jpg" alt="Cupcake" />
//             <h3>Vanilla Cupcake</h3>
//           </div>
//           <div className="dessert-card">
//             <img src="/Images/cake.jpg" alt="Ice Cream" />
//             <h3>Strawberry Ice Cream</h3>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <h1>🍰 Welcome to SweetTreats</h1>
        <p>Delicious desserts made with love. Order your favorite now!</p>
        <button className="order-btn">Explore Desserts</button>
      </section>

      {/* Scrolling Images */}
      <section className="marquee-section">
        <marquee behavior="scroll" direction="left" scrollamount="6">
          <img src="/Images/cupcake3.jpg" alt="Cake1" className="marquee-img" />
          <img src="/Images/cake.jpg" alt="Cake2" className="marquee-img" />
          <img src="/Images/cupcake2.jpg" alt="Cake3" className="marquee-img" />
          <img src="/Images/dessert.jpg" alt="Cake4" className="marquee-img" />
          <img src="/Images/dessert1.jpg" alt="Cake5" className="marquee-img" />
          <img src="/Images/desserts4.jpg" alt="Cake5" className="marquee-img" />
          <img src="/Images/desserts3.jpg" alt="Cake5" className="marquee-img" />
          <img src="/Images/desserts5.jpg" alt="Cake5" className="marquee-img" />
          <img src="/Images/desserts6.jpg" alt="Cake5" className="marquee-img" />
          <img src="/Images/desserts7.jpg" alt="Cake5" className="marquee-img" />
          <img src="/Images/desserts8.jpg" alt="Cake5" className="marquee-img" />


        </marquee>
      </section>

      {/* Featured Desserts */}
      <section className="featured">
        <h2>Our Favorites</h2>
        <div className="dessert-grid">
          <div className="dessert-card">
            <img src="/Images/cake.jpg" alt="Cake" />
            <h3>Chocolate Cake</h3>
          </div>
          <div className="dessert-card">
            <img src="/Images/cake.jpg" alt="Cupcake" />
            <h3>Vanilla Cupcake</h3>
          </div>
          <div className="dessert-card">
            <img src="/Images/cake.jpg" alt="Ice Cream" />
            <h3>Strawberry Ice Cream</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
