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
        {t('navbar.welcome')} <span className="text-brand">STAY BOOKER</span>, {t('footer.aboutText')}
      </p>

      <h2 className="text-3xl font-extrabold text-brand mb-2">Our Vision</h2>
      <p className="text-lg mb-8">
        At <span className="text-brand">STAY BOOKER</span>, we envision a world
        where every traveler finds the perfect accommodation that suits their
        needs and preferences. We aim to simplify the hotel booking process,
        offering a wide range of options for every budget.
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
          Our dedicated customer support team is available 24/7 to assist you
          with any inquiries or issues you may encounter during your booking
          process or stay.
        </li>
        <li className="text-lg mb-3">
          We prioritize the security of your personal information and
          transactions. Book with confidence, knowing that your data is safe
          with us.
        </li>
      </ul>

      <h2 className="text-3xl font-extrabold text-brand mb-2">{t('footer.contactUs')}</h2>
      <p className="text-lg mb-4">
        Have questions or need assistance? Feel free to reach out to our
        customer support team at{' '}
        <a
          className="text-brand hover:underline"
          href="mailto:info@staybooker.com"
        >
          info@staybooker.com
        </a>
        . We're here to help!
      </p>
      <p className="text-lg">
        Thank you for choosing <span className="text-brand">STAY BOOKER</span>.
        We look forward to being your go-to platform for all your hotel booking
        needs.
      </p>
    </div>
  );
};

export default AboutUs;
