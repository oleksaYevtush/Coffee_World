import Layout from '../components/Layout/Layout';
import '../styles/globals.css';
import React, { useEffect } from 'react';
import { initReactI18next } from 'react-i18next';
import i18n from '../components/i18n';
import AnimatedCursor from "react-animated-cursor";
import ScrollToTopButton from '../components/Scroll/ScrollToTopButton';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    if (!i18n.isInitialized) {
      i18n
        .use(initReactI18next)
        .init({
          lng: 'en',
          supportedLngs: ['en', 'uk'],
          interpolation: { escapeValue: false },
          fallbackLng: 'en',
          detection: {
            order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
            caches: ['cookie']
          },
        });
    }
  }, []);

  return (
    <Layout>
      <AnimatedCursor
        innerSize={8}
        outerSize={34}
        innerScale={1}
        outerScale={1.5}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "var(--brand-brown)",
        }}
        outerStyle={{
          border: "2px solid var(--brand-brown)",
        }}
      />
      <ScrollToTopButton />
      <Component {...pageProps} />  
      <Analytics />   
    </Layout>
  );
}

export default MyApp;
