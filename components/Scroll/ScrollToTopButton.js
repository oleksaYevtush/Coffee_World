import React, { useState, useEffect } from 'react';
import styles from './ScrollToTopButton.module.css';
import Image from 'next/image';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={`${styles.scrollToTop} ${isVisible ? styles.show : ''}`} onClick={scrollToTop}>
      <Image src="/coffee-icon.png" alt="Coffee Icon" width={45} height={45} loading="lazy" />
    </div>
  );
};

export default ScrollToTop;
