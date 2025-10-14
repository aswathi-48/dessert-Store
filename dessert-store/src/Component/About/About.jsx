
import React, { useRef } from 'react';
import './About.css';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const dessertRef = useRef(null);

    const handleWatchMore = () => {
        dessertRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const navigate = useNavigate();

    const handleExploreMenu = () => {
        navigate('/menu');
    };


    return (
        <div>
            {/* Video Section */}
            <section className="video-section">
                <video autoPlay loop muted className="bg-video">
                    <source src="/Videos/video2.mp4" type="video/mp4" />
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
                    <button onClick={handleExploreMenu}>Explore Our Menu</button>
                </div>
            </section>

            {/* New Section: Our Story */}
            <section className="story-section">
                <h2>Our Story</h2>
                <div className="story-content">
                    <div className="text">
                        <h1>Crafting Sweet Moments with Every Bite</h1>
                        <p>
                            At Sweet Moments, our journey began with a simple idea: to create desserts that not only satisfy the taste buds but also bring joy to those who enjoy them.
                            We started with a passion for baking and a desire to share the sweetness of life with everyone. Today, we pride ourselves on using only the finest ingredients,
                            combined with traditional and modern baking techniques to create masterpieces for every occasion.
                        </p>
                        <p>
                            We believe that every dessert should tell a story, whether it's a birthday cake or a simple afternoon treat. Each creation is made with love, dedication, and the spirit of celebration.
                        </p>
                    </div>
                    <div className="video">
                        <video width="100%" loop autoPlay mut   ed>
                            <source src="/Videos/story2.mp4" type="video/mp4" loop autoPlay muted />
                            Your browser does not support the video tag.
                        </video>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;


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
//                     <source src="/Videos/dessert-store.mp4" type="video/mp4" />
//                     Your browser does not support the video tag.
//                 </video>
//                 <div className="video-overlay">
//                     <h2 data-aos="zoom-in">Satisfy Your Sweet Cravings</h2>
//                     <p data-aos="fade-up">Delve into a decadent world of artisanal desserts, where passion and creativity meet every bite.</p>
//                     <button className="order-btn" data-aos="fade-up" onClick={handleWatchMore}>Discover Our Treats</button>
//                 </div>
//             </section>

//             {/* Dessert Store Section */}
//             <h1 className="sweet">SWEET DELIGHTS</h1>

//             <section className="moments-section" ref={dessertRef}> 
//                 {/* Left: Image with overlay text */}
//                 <div className="video-container">
//                     <video src="/Videos/video.mp4" loop autoPlay muted></video>
//                     <h3><b>Desserts</b></h3>
//                 </div>

//                 {/* Right: Text Content */}
//                 <div className="text-content">
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

