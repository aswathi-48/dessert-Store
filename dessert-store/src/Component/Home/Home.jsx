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


import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <div className="home-page">
      {/* Hero Section */}
      {/* <section className="hero">
        <h1>🍰 Welcome to SweetTreats</h1>
        <p>Delicious desserts made with love. Order your favorite now!</p>
        <button className="order-btn">Explore Desserts</button>
      </section> */}

      {/* Video Section */}
<section className="video-section">
  <video autoPlay loop muted className="bg-video">
    <source src="/Videos/video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="video-overlay">
    <h2 data-aos="zoom-in">Experience the Art of Desserts</h2>
    <p data-aos="fade-up">Handcrafted sweets with love and passion – every bite tells a story.</p>
    <button className="order-btn" data-aos="fade-up">Watch More</button>
  </div>
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
          <img src="/Images/desser9.jpg" alt="Cake5" className="marquee-img" />



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

      {/* Next Menu Section */}
<section className="next-menu">
  <h2>More Treats Coming Soon</h2>
  <div className="menu-items">
    <div className="menu-card">
      <img src="/Images/blue3.jpg" alt="New Dessert 1" />
      <h3>Blueberry Tart</h3>
    </div>
    <div className="menu-card">
      <img src="/Images/blue2.jpg" alt="New Dessert 2" />
      <h3>Lemon Cheesecake</h3>
    </div>
    <div className="menu-card">
      <img src="/Images/Macarons2.jpg" alt="New Dessert 3" />
      <h3>Macarons</h3>
    </div>
    <div className="menu-card">
      <img src="/Images/strawberry2.jpg" alt="New Dessert 3" />
      <h3>Strawberry Cake</h3>
    </div>
  </div>
</section>

{/* Special Section */}
<section className="special-section">
  <div className="special-container">
    <div className="special-image" data-aos="fade-right">
      <img src="/Images/spcl2.jpg" alt="Special Dessert" />
    </div>
    <div className="special-content" data-aos="fade-left">
      <h2>Special Treat of the Month</h2>
      <p>
        Indulge in our exclusive Red Velvet Cheesecake — a perfect blend of creaminess and richness topped with luscious strawberries. Limited time only!
      </p>
      <button className="order-btn">Order Now</button>
    </div>
  </div>
</section>




    </div>
  );
};

export default Home;
