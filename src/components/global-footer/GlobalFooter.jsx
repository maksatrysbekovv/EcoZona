import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from 'i18n/LanguageContext';

const FooterLink = ({ to, label }) => (
  <Link
    to={to}
    className="block text-slate-700 hover:text-brand transition-colors duration-300"
  >
    {label}
  </Link>
);

const GlobalFooter = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-slate-50 text-slate-700 mt-6">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="font-bold text-lg mb-2">{t('footer.about')}</h4>
            <FooterLink to="/about-us" label={t('navbar.aboutUs')} />
            <FooterLink to="/" label={t('footer.contactUs')} />
            <FooterLink to="/" label={t('footer.privacyPolicy')} />
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="font-bold text-lg mb-2">{t('footer.support')}</h4>
            <FooterLink to="/" label={t('footer.faq')} />
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="font-bold text-lg mb-2">Newsletter</h4>
            <p>Stay updated with our latest trends</p>
            <form>
              <input
                type="email"
                placeholder={t('auth.email')}
                className="p-2 rounded"
              />
              <button className="ml-2 p-2 bg-brand text-white rounded">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="text-center mt-10">
          <p>Designed and styled by izoogood</p>
          <p>
            &copy; {new Date().getFullYear()} izoogood. {t('footer.allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;
