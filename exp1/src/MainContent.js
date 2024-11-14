import React from 'react';
import './MainContent.css';

function MainContent() {
    return (
        <main className="main-content">
            <section id="home">
                <h2>Home</h2>
                <p>Welcome to our website. We offer a variety of services to cater to your needs.</p>
            </section>
            <section id="about">
                <h2>About Us</h2>
                <p>We are a client-focused company dedicated to delivering the best results.</p>
            </section>
            <section id="services">
                <h2>Our Services</h2>
                <p>Explore the wide range of services we offer to our clients.</p>
            </section>
            <section id="contact">
                <h2>Contact Us</h2>
                <p>Get in touch with us for more information or to get started.</p>
            </section>
        </main>
    );
}

export default MainContent;
