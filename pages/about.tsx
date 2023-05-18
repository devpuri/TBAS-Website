import React from 'react';
import styles from '../styles/AboutPage.module.css';

const AboutPage: React.FC = () => {
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>This Page is Under Construction</h1>
    <p className={styles.message}>Please come back later!</p>
    <iframe src="https://giphy.com/embed/l3vQYe7l1TInypnYA" width="380" height="480"></iframe>

  </div>
  );
};

export default AboutPage;
