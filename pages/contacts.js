import Image from 'next/image';
import styles from '../components/Contacts/Contacts.module.css';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';
import React, { useState, useEffect } from 'react';

const Contacts = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      comment: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required(t('contacts_your_name')),
      email: Yup.string().email(t('contacts_your_invalid')).required(t('contacts_enter')),
      comment: Yup.string().required(t('contacts_your_share')),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const form = document.createElement('form');
        form.setAttribute('action', 'https://formsubmit.co/olexaevtush@gmail.com');
        form.setAttribute('method', 'POST');

        for (const key in values) {
          if (values.hasOwnProperty(key)) {
            const input = document.createElement('input');
            input.setAttribute('type', 'hidden');
            input.setAttribute('name', key);
            input.setAttribute('value', values[key]);
            form.appendChild(input);
          }
        }
        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);

        toast.success(t('contacts_form_submit'), {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });

        resetForm();
      } catch (error) {
        console.error(t('contacts_form_submit'), error);
      }
    },
  });

  return (
    loading ? (
      <LoadingScreen />
    ) : (
    <div className={styles.contactContainer}>
      <ToastContainer />
      <motion.div
        className={styles.contactImage}
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}>
        <motion.div
          animate={{ x: [10, -10, 10] }}
          transition={{ repeat: Infinity, duration: 2.5 }}>
          <Image src="/cupcoffee.png" alt="Contact Image" width={300} height={300} loading="lazy" />
        </motion.div>
      </motion.div>
      <div className={styles.contactForm}>
        <h2>{t('contacts_title')}</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="name">{t('contacts_name')}</label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.input}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className={styles.error}>{formik.errors.name}</div>
            ) : null}
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">{t('contacts_email')}</label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className={styles.error}>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="comment">{t('contacts_comment')}</label>
            <textarea
              id="comment"
              name="comment"
              className={styles.textarea}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.comment}
            />
            {formik.touched.comment && formik.errors.comment ? (
              <div className={styles.error}>{formik.errors.comment}</div>
            ) : null}
          </div>
          <button className={styles.submitButton} type="submit">{t('contacts_submit')}</button>
        </form>
      </div>
      </div>
    )
  );
};

export default Contacts;
