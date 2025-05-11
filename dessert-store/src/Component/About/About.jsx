
// import React from 'react';
// import './About.css';

// const About = () => {
//     return (
//         <div>
//             {/* Video Section */}
//             <section className="video-section">
//                 <video autoPlay loop muted className="bg-video">
//                     <source src="/Videos/video.mp4" type="video/mp4" />
//                     Your browser does not support the video tag.
//                 </video>
//                 <div className="video-overlay">
//                     <h2 data-aos="zoom-in">Experience the Art of Desserts</h2>
//                     <p data-aos="fade-up">Handcrafted sweets with love and passion – every bite tells a story.</p>
//                     <button className="order-btn" data-aos="fade-up">Watch More</button>
//                 </div>
//             </section>

//         </div>
//     );
// }

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
                    <source src="/Videos/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="video-overlay">
                    <h2 data-aos="zoom-in">Experience the Art of Desserts</h2>
                    <p data-aos="fade-up">Handcrafted sweets with love and passion – every bite tells a story.</p>
                    <button className="order-btn" data-aos="fade-up" onClick={handleWatchMore}>Watch More</button>
                </div>
            </section>

            {/* Dessert Store Section */}
            <section className="dessert-section" ref={dessertRef}>
                <h2 className="section-title" data-aos="fade-up">Welcome to Our Dessert Store</h2>
                <div className="dessert-content">
                    <div className="video-box" data-aos="fade-right">
                        <video autoPlay muted loop controls className="dessert-video">
                            <source src="/Videos/video2.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                    </div>
                    <div className="text-box" data-aos="fade-left">
                        <h3>Delicious Moments Await</h3>
                        <p>
                            From rich chocolate cakes to fruity pastries, our store offers a wide variety of handmade desserts that satisfy every sweet tooth. We blend tradition with creativity to serve joy in every bite.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
