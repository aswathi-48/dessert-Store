import React from 'react'

const About = () => {
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
                    <button className="order-btn" data-aos="fade-up">Watch More</button>
                </div>
            </section>

        </div>
    )
}

export default About