import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { t } from 'i18next';

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <div className="not-found">
      <h1>{t('error_ouch')}</h1>
      <h2>{t('error_page')}</h2>
      <p>{t('error_go')}<Link href="/" passHref>{t('error_home')}</Link>{t('error_after')}</p>
    </div>
  );
}
 
export default NotFoundPage;