// import React, { useRef } from 'react';
// import './About.css';

// const About = () => {
//     const dessertRef = useRef(null);

//     const handleWatchMore = () => {
//         dessertRef.current?.scrollIntoView({ behavior: 'smooth' });
//     };

//     return (
//         <div>
//             {/* Video Section */}
//             <section className="video-section">
//                 <video autoPlay loop muted className="bg-video">
//                     <source src="/Videos/video2.mp4" type="video/mp4" />
//                     Your browser does not support the video tag.
//                 </video>
//                 <div className="video-overlay">
//                     <h2 data-aos="zoom-in">Experience the Art of Desserts</h2>
//                     <p data-aos="fade-up">Handcrafted sweets with love and passion – every bite tells a story.</p>
//                     <button className="order-btn" data-aos="fade-up" onClick={handleWatchMore}>Watch More</button>
//                 </div>
//             </section>

//             {/* Dessert Store Section */}

//             <h1 className='sweet'>SWEET DELIGHTS</h1>
//             <section class="moments-section">
//                 {/* <!-- Left: Image with overlay text --> */}
//                 <div className="video-container">
//                     <video src="/Videos/video.mp4" loop autoPlay muted></video>
//                     <h3><b>Desserts</b></h3>
//                 </div>


//                 {/* <!-- Right: Text Content --> */}
//                 <div class="text-content">
//                     <h3>WE SERVE <br /> SWEET DELIGHTS</h3>
//                     <p>
//                         At Sweet Moments, we craft delicious desserts that turn every bite into a celebration.
//                         From handcrafted cakes to artisanal pastries, our treats are made with love and the finest ingredients.
//                     </p>
//                     <p>
//                         Whether you're marking a special occasion or simply treating yourself, our desserts are designed to satisfy
//                         your cravings and create joyful memories that linger long after the last bite.
//                     </p>
//                     <button>Explore Our Menu</button>
//                 </div>

//             </section>



//         </div>
//     );
// };

// export default About;
import React, { useRef } from 'react';
import './About.css';

const About = () => {
    const dessertRef = useRef(null);

    const handleWatchMore = () => {
        dessertRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            {/* Video Section */}
            <section className="video-section">
                <video autoPlay loop muted className="bg-video">
                    <source src="/Videos/dessert-store.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="video-overlay">
                    <h2 data-aos="zoom-in">Satisfy Your Sweet Cravings</h2>
                    <p data-aos="fade-up">Delve into a decadent world of artisanal desserts, where passion and creativity meet every bite.</p>
                    <button className="order-btn" data-aos="fade-up" onClick={handleWatchMore}>Discover Our Treats</button>
                </div>
            </section>

            {/* Dessert Store Section */}
            <h1 className="sweet">SWEET DELIGHTS</h1>

            <section className="moments-section" ref={dessertRef}> 
                {/* Left: Image with overlay text */}
                <div className="video-container">
                    <video src="/Videos/video.mp4" loop autoPlay muted></video>
                    <h3><b>Desserts</b></h3>
                </div>

                {/* Right: Text Content */}
                <div className="text-content">
                    <h3>WE SERVE <br /> SWEET DELIGHTS</h3>
                    <p>
                        At Sweet Moments, we craft delicious desserts that turn every bite into a celebration.
                        From handcrafted cakes to artisanal pastries, our treats are made with love and the finest ingredients.
                    </p>
                    <p>
                        Whether you're marking a special occasion or simply treating yourself, our desserts are designed to satisfy
                        your cravings and create joyful memories that linger long after the last bite.
                    </p>
                    <button>Explore Our Menu</button>
                </div>
            </section>
        </div>
    );
};

export default About;
