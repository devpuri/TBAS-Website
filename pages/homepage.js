import React, { useState } from "react";
import styles from '../styles/HomePage.module.css';
import Image from 'next/image';
import { MDBIcon, MDBContainer } from 'mdbreact';

 

const HomePage = () => {

  const artworks = [
    { id: 1, title: 'Awakening Bliss', image: '/artwork1.jpg' },
    { id: 2, title: 'Mystic Mane', image: '/artwork2.jpg' },
    { id: 3, title: 'Dancing Colors', image: '/artwork3.jpg' },
    { id: 4, title: 'Transcendent Love', image: '/artwork4.jpg' },
    { id: 5, title: 'Blooming Serenity', image: '/artwork5.jpg' },
    { id: 6, title: 'Divine Union: Radha Krishna', image: '/artwork6.jpg' },
    { id: 7, title: 'Nature\'s Palette', image: '/artwork7.jpg' },
    { id: 8, title: 'Chromatic Foliage', image: '/artwork8.jpg' },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.mainDiv}>
          <h1 className={styles.title}>The Best Art School</h1>

          <p style={{marginTop:"4rem", width:"400px", lineHeight:"1.5em", fontSize:"1.1em"}}> 
          ~ Embark on a Captivating Journey through the Vibrant Palette of Indian and Modern Art: Unleashing Boundless Creativity and Cultural Expressions"
          </p> 
            <Image className={styles.headingImage}
            src="/homeImage.jpg"
            width={870}
            height={520}
            alt="Picture of the author"
          />
        </div>
        <div style={{width:"100%", display: "flex", justifyContent: "center", alignItems: "center", marginTop:"3rem"}}>
        <Image
            src="/HomeDownArrow.png"
            width={35}
            height={50}
            alt="Picture of the author"
          />
        </div>
        
      </header>

      <main className={styles.main}>

        <section style={{width:"100%", display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
          <section className={styles.artworkSection}>
            <p className={styles.artworkHeading}>My Artworks</p>

            <div className={styles.artworkContainer}>
              {artworks.map((artwork) => (
                <div key={artwork.id} className={styles.artworkItem}>
                  <img className={styles.artworkImage} src={artwork.image} alt={artwork.title} />
                  <h3 className={styles.artworkTitle}>{artwork.title}</h3>
                </div>
              ))}
            </div>
          </section>
        </section>

        <section className={styles.aboutSection}>
        <div className={styles.section}>
          <div className={styles.textContainer}>
            <h2>About Me</h2>
            <p style={{fontSize:"18px", marginTop:"2rem", fontWeight:"lighter", lineHeight:"1.2em"}}>
            Welcome to my artistic world! I'm Urvashi Saini, a passionate artist hailing from the vibrant land of India. With a brush in hand and boundless creativity in my soul, I aim to transport you into a realm of beauty, culture, and emotions through my artwork.

Drawing inspiration from the rich heritage and diverse landscapes of India, my creations are a celebration of colors, traditions, and the human experience. Each stroke on the canvas tells a story, capturing the essence of life, love, and spirituality. From mesmerizing portraits to captivating landscapes, my art aims to evoke deep emotions and leave an indelible impression on your heart.  
            </p>
          </div>
          <div className={styles.imageContainer}>
            <img src="/image1.jpg" alt="Image 1" className={styles.image1} />
            <img src="/image2.jpg" alt="Image 2" className={styles.image2} />
          </div>
        </div>
        </section>

      </main>

      <section className={styles.footerSection}>
        <div className={styles.footerContainer}>
          <p className={styles.footerHead}>
            Follow me on Social Media:</p>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/TheBestARTSchool" className={styles.icon}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.facebook.com/TheBestARTSchool" className={styles.icon}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/thebestartschool_/" className={styles.icon}>
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        </section>
      <footer className={styles.footer}>
        <p className={styles.footerText}>&copy; 2023 The Best Art School. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default HomePage;
