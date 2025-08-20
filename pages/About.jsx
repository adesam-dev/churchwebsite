import React, { useState } from "react";
import pastor1 from "../assets/image1.jpg";
import "./About.css";

export default function About() {
    const [active, setActive] = useState(null);

    const toggleAccordion = (index) => {
        setActive(active === index ? null : index);

    }; 

    return (
        <div className="about-page">
            <div className="content">
                <h2>About Us</h2>
                 <p>Grace Church is a community of believers dedicated to serving God and loving people.</p>
            </div>
            <section className="history">
                <div className="history-text">
                    <h2>Our History</h2>
                    <p>Our church was founded with the vision to bring people closer to God
                       and to serve our community with love and compassion.
                   </p>
              </div>
                
            </section>

                  <section className="leaders">
        <h2>Our Leaders</h2>
        <div className="leader-cards">
          <div className="leader-card">
            <img src={pastor1} alt="Pastor 1" />
            <h3>Pastor John Doe</h3>
            <p>Senior Pastor</p>
          </div>
          <div className="leader-card">
            <img src={pastor1} alt="Pastor 2" />
            <h3>Pastor Mary Jane</h3>
            <p>Assistant Pastor</p>
          </div>
          <div className="leader-card">
            <img src={pastor1} alt="Pastor 3" />
            <h3>Pastor Paul Smith</h3>
            <p>Youth Pastor</p>
          </div>
        </div>
      </section>

       <section className="accordion-section">
             <h2>What We Believe</h2>
     <div className="accordion">
          <div className="accordion-item">
            <button onClick={() => toggleAccordion(1)}>
              Mission
            </button>
            {active === 1 && (
              <p>
                Our mission is to share the gospel and serve our community with
                love and faith.
              </p>
            )}
          </div>
          <div className="accordion-item">
            <button onClick={() => toggleAccordion(2)}>
              Vision
            </button>
            {active === 2 && (
              <p>
                Our vision is to raise a generation of believers who live in
                Christ and impact the world.
              </p>
                 )}
          </div>
          <div className="accordion-item">
                 <button onClick={() => toggleAccordion(3)}>
                   Tenets
               </button>
                  {active === 3 && (
              <p>
                  We believe in the Bible as God’s word, salvation through Christ,
                   and living a holy life.
              </p>
            )}
            </div>
          </div>
          </section>




          
        </div>
    
  );
}
