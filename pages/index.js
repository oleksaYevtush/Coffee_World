import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";
import Image from 'next/image';
import '../components/i18n';
import { useSpring, animated } from 'react-spring';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';

const Home = () => {
  const { t, i18n } = useTranslation();
  const imageAnimation = useSpring({
    opacity: 1,
    transform: 'translateX(0%)',
    from: { opacity: 0, transform: 'translateX(100%)' },
    config: { duration: 600 }
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Head>
        <title>Coffee World | Home</title>
        <meta name="title" content="Coffee World"/>
        <meta property="og:title" content="Coffee World" />
        <meta property="og:description" content="Unusual recipes and interesting facts about coffee" />
        <meta property="og:image" content="../public/coffeeworld_hero.png" />
        <meta property="og:url" content="URL" />
        <meta property="og:type" content="website" />
      </Head>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.textContainer}>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 1.5 }}
                  className={`${styles.homeTitle}`}>
                    {t('main_welcome')} 
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className={styles.homeText}>
                  {t('main_discover')}
                </motion.p>
                <Link href="/recipes" passHref>
                  <motion.button
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className={styles.recipeBtn}>
                    {t('main_button')}
                  </motion.button>
                </Link>
              </div>
              <div className={styles.mainImage}>
                <animated.div style={imageAnimation}>
                  <Image src="/coffeeworld.gif" alt="Coffee World" width={350} height={350} className={styles.imgHero} priority />
                </animated.div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Home;
