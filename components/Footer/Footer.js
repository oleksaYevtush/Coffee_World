import { Instagram, Twitter, Facebook, Pinterest } from '@mui/icons-material';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.textFooter}>Copyright 2023 Coffee World</div>
      <div className={styles.socialIcons}>
        <Instagram fontSize="large" />
        <Twitter fontSize="large" />
        <Facebook fontSize="large" />
        <Pinterest fontSize="large" />
      </div>
    </footer>
  );
}

export default Footer;
