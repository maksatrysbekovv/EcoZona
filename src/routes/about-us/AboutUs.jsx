import React from 'react';
import { useLanguage } from 'i18n/LanguageContext';

/**
 * AboutUs component
 * @returns {jsx}
 */
const AboutUs = () => {
  const { t } = useLanguage();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold text-brand mb-2">{t('navbar.aboutUs')}</h1>
      <p className="text-lg mb-8">
        {t('navbar.welcome')} <span className="text-brand">EcoZona</span>, {t('footer.aboutText')}
      </p>

      <h2 className="text-3xl font-extrabold text-brand mb-2">{t('about.ourMissionTitle')}</h2>
      <p className="text-lg mb-8">
        {t('about.ourMission', { brand: 'EcoZona' })}
      </p>

      <h2 className="text-3xl font-extrabold text-brand mb-2">
        {t('home.whyChooseUs')}
      </h2>
      <ul className="list-disc ml-6 mb-8">
        <li className="text-lg mb-3">
          {t('home.bestSelectionDesc')}
        </li>
        <li className="text-lg mb-3">
          {t('home.easyBookingDesc')}
        </li>
        <li className="text-lg mb-3">
          {t('about.supportDesc')}
        </li>
        <li className="text-lg mb-3">
          {t('about.securityDesc')}
        </li>
      </ul>

      <h2 className="text-3xl font-extrabold text-brand mb-2">{t('footer.contactUs')}</h2>
      <p className="text-lg mb-4">
        {t('about.contactText')}{' '}
        <a
          className="text-brand hover:underline"
          href="mailto:info@ecozona.com"
        >
          info@ecozona.com
        </a>
        . We're here to help!
      </p>
      <p className="text-lg">
        {t('about.thankYou', { brand: 'EcoZona' })}
      </p>
    </div>
  );
};

export default AboutUs;
