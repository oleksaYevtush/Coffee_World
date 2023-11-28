import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { DiCoffeescript } from 'react-icons/di';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

const Header = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [isTablet, setIsTablet] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 920);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header>
      <Link href="/" legacyBehavior>
        <a className={styles.logoContainer}>
          <DiCoffeescript />
          <span className={styles.logoText}>{t('header_name')}</span>
        </a>
      </Link>
      <div>
        <button
          type="submit"
          className={`${styles.languageButton} ${styles.ua}`}
          onClick={() => i18n.changeLanguage('uk')}>
          UA
        </button>
        <button
          type="submit"
          className={`${styles.languageButton} ${styles.en}`}
          onClick={() => i18n.changeLanguage('en')}>
          EN
        </button>
      </div>
      {isTablet ? (
        <motion.button
          className={styles.burgerButton}
          onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}>{t('burger_menu')}
        </motion.button>
      ) : (
        <nav>
          <Link href="/" legacyBehavior>
            <a className={styles.linkContainer}>{t('header_home')}</a>
          </Link>
          <Link href="/recipes" legacyBehavior>
            <a className={styles.linkContainer}>{t('header_recipes')}</a>
          </Link>
          <Link href="/blog" legacyBehavior>
            <a className={styles.linkContainer}>{t('header_blog')}</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className={styles.linkContainer}>{t('header_about')}</a>
          </Link>
          <Link href="/contacts" legacyBehavior>
            <a className={styles.linkContainer}>{t('header_contacts')}</a>
          </Link>
        </nav>
      )}
      <AnimatePresence>
        {isTablet && isBurgerMenuOpen && (
          <motion.div
            key="burgerMenu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.75 }}
            className={styles.burgerMenu}>
            <button
              className={styles.closeButton}
              onClick={() => setIsBurgerMenuOpen(false)}>
              {t('burger_close')}
            </button>
            {/* Burger */}
            <Link href="/" legacyBehavior>
              <a>{t('header_home')}</a>
            </Link>
            <Link href="/recipes" legacyBehavior>
              <a>{t('header_recipes')}</a>
            </Link>
            <Link href="/blog" legacyBehavior>
              <a>{t('header_blog')}</a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a>{t('header_about')}</a>
            </Link>
            <Link href="/contacts" legacyBehavior>
              <a>{t('header_contacts')}</a>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};

export default Header;
