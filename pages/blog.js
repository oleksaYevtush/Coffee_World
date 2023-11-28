import { motion } from 'framer-motion';
import styles from '../components/Blog/Blog.module.css';
import Image from 'next/image';
import '../components/i18n';
import { useTranslation } from 'react-i18next';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';
import React, { useState, useEffect } from 'react';

const Blog = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <motion.div className={styles.blogContainer} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className={styles.imageContainer} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
            <Image src="/coffee_cup_plate.png" alt="Coffee Banner" layout="responsive" width={1500} height={800} />
          </motion.div>
          <motion.h1 className={styles.titleBlog} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
            {t('blog_titlefirst')}
          </motion.h1>
          <motion.p className={styles.blogText} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
            {t('blog_ elixir')}
          </motion.p>
          <motion.h1 className={styles.titleBlog} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
            {t('blog_beans')}
          </motion.h1>
          <motion.p className={styles.blogText} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
            {t('blog_beanstext')}
          </motion.p>
          <motion.h1 className={styles.titleBlog} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
            {t('blog_varieties')}
          </motion.h1>
          <motion.ol className={styles.blogCoffee} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
            <motion.li>
              {t('blog_arabica')}
            </motion.li>
            <motion.li>
              {t('blog_robusta')} 
            </motion.li>
            <motion.li>
              {t('blog_liberica')} 
            </motion.li>
            <motion.li>
              {t('blog_excelsa')}  
            </motion.li>
          </motion.ol>
        </motion.div>
      )}
    </div>
  );
};

export default Blog;
