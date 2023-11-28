import styles from '../../styles/Recipes.module.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Image from 'next/image';

export const getStaticPaths = async () => {
  const response = await fetch('http://localhost:5000/items');
  if (!response.ok) {
    console.error(`HTTP error! Status: ${response.status}`);
    return {
      paths: [],
      fallback: false,
    };
  }

  const data = await response.json();
  if (!Array.isArray(data)) {
    console.error('Data is not an array');
    return {
      paths: [],
      fallback: false,
    };
  }

  const paths = data.map(recipe => ({
    params: { id: recipe.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  try {
    const res = await fetch('http://localhost:5000/items');
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    const recipe = data.find(item => item.id === id);

    return {
      props: { recipe },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { recipe: null },
    };
  }
};

const Details = ({ recipe }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <div className={styles.singleRecipe}>
      <h1>{recipe && recipe.name}</h1>
      {recipe && recipe.image && Array.isArray(recipe.image) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={styles.imageContainer}
        >
          {recipe.image.map((image, index) => (
            <Image
              key={index}
              src={`/recipes${image}`}
              alt="Coffee World"
              width={250}
              height={250}
            />
          ))}
        </motion.div>
      )}
      <div>
        <p className={styles.recipeDesc}>{recipe && recipe.desc}</p>
      </div>
      <div ref={ref} className={styles.instructionsContainer}>
        {recipe && recipe.instructions && (
          <motion.ul animate={controls} initial={{ opacity: 0, y: 20 }}>
            {recipe.instructions.map((instruction, index) => (
              <motion.li key={index} className={styles.instructionsIcon}>
                {instruction}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
    </div>
  );
};

export default Details;