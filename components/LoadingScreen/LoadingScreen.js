import React from 'react';
import styles from './LoadingScreen.module.css';

const LoadingScreen = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingCup}>
      </div>
    </div>
  );
};

export default LoadingScreen;
