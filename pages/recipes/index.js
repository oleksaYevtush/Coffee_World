import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useTrail, animated } from 'react-spring';
import styles from '../../styles/Recipes.module.css';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import React, { useState, useEffect } from 'react';

export const getStaticProps = async () => {
  try {
    const res = await fetch('http://localhost:5000/items');
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    
    const data = await res.json();

    return {
      props: { recipes: data },
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);

    return {
      props: { recipes: [] },  
    };
  }
};


const Recipes = ({ recipes }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const trail = useTrail(recipes.length, {
    opacity: 1,
    transform: 'translateX(0%)',
    from: { opacity: 0, transform: 'translateX(100%)' },
    config: { mass: 1, tension: 120, friction: 14 },
  });
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    loading ? (
      <LoadingScreen />
    ) : (
    <div className={styles.recipeGridContainer}>
      <h1 className={styles.textTitle}>{t('recipe_title')}</h1>
      <div className={styles.recipeContainer}>
      {trail.map((props, index) => (
        <animated.div key={recipes[index].id} style={props} className={styles.animatedRecipeCard}>
          <Link href={`/recipes/${recipes[index].id}`} legacyBehavior>
            <a className={styles.recipeCard}>
              <div className={styles.imageContainer}>
                <Image src={recipes[index].image} alt={recipes[index].name} width={250} height={250} priority={true} />
              </div>
              <div className={styles.recipeText}>
                <h3>{recipes[index].name}</h3>
                <p className={styles.recipeDesc}>{recipes[index].desc}</p>
              </div>
            </a>
          </Link>
        </animated.div>
      ))}
      </div>
    </div>
    )
  );
};
  

export default Recipes;