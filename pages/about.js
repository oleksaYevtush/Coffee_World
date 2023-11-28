import Head from 'next/head';
import styles from '../components/About/About.module.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';
import React, { useState, useEffect } from 'react';

const About = () => {
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
      <>
        {loading ? (
          <LoadingScreen />
        ) : (
          <>
            <Head>
              <title>Coffee World | About Us</title>
              <meta name="title" content="About Us"/>
            </Head>
            <h1 className={styles.aboutHeading}>{t('about_us')}</h1>
            <div className={styles.aboutContainer}>
              <motion.div
                className={styles.card}
                variants={cardVariants}
                initial="hidden"
                animate="visible">
                <motion.img
                  src="/image1.jpg"
                  alt="Image 1"
                  whileHover={{ scale: 1.1 }} loading="lazy" />
                <motion.div className={styles.overlay} whileHover={{ opacity: 1 }}>
                {t('about_card_one')} 
                </motion.div>
              </motion.div>
              <motion.div
                className={styles.card}
                variants={cardVariants}
                initial="hidden"
                animate="visible">
                <motion.img
                  src="/image2.jpg"
                  alt="Image 2"
                  whileHover={{ scale: 1.1 }} loading="lazy" />
                <motion.div className={styles.overlay} whileHover={{ opacity: 1 }}>
                {t('about_card_two')}
                </motion.div>
              </motion.div>
              <motion.div
                className={styles.card}
                variants={cardVariants}
                initial="hidden"
                animate="visible">
                <motion.img
                  src="/image3.jpg"
                  alt="Image 3"
                  whileHover={{ scale: 1.1 }} loading="lazy" />
                <motion.div className={styles.overlay} whileHover={{ opacity: 1 }}>
                {t('about_card_three')}
                </motion.div>
              </motion.div>
              <motion.div
                className={styles.card}
                variants={cardVariants}
                initial="hidden"
                animate="visible">
                <motion.img
                  src="/image4.jpg"
                  alt="Image 4"
                  whileHover={{ scale: 1.1 }} loading="lazy" />
                <motion.div className={styles.overlay} whileHover={{ opacity: 1 }}>
                {t('about_card_four')}
                </motion.div>
              </motion.div>
              <motion.div
                className={styles.card}
                variants={cardVariants}
                initial="hidden"
                animate="visible">
                <motion.img
                  src="/image5.jpg"
                  alt="Image 5"
                  whileHover={{ scale: 1.1 }} loading="lazy" />
                <motion.div className={styles.overlay} whileHover={{ opacity: 1 }} >
                {t('about_card_five')}
                </motion.div>
              </motion.div>
              <motion.div
                className={styles.card}
                variants={cardVariants}
                initial="hidden"
                animate="visible">
                <motion.img
                  src="/image6.jpg"
                  alt="Image 6"
                  whileHover={{ scale: 1.1 }} loading="lazy" />
                <motion.div className={styles.overlay} whileHover={{ opacity: 1 }}>
                {t('about_card_six')}
                </motion.div>
              </motion.div>
              </div>
        </>
      )}
    </>
  );
};

export default About;