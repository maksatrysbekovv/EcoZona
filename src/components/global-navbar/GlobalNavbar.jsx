import logo from 'assests/logos/stay_booker_logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from 'components/hamburger-menu/HamburgerMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from 'contexts/AuthContext';
import { useContext } from 'react';
import NavbarItems from 'components/navbar-items/NavbarItems';
import { useLanguage } from 'i18n/LanguageContext';

const GlobalNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isAuthenticated } = useContext(AuthContext);
  const { language, changeLanguage } = useLanguage();
  const onHamburgerMenuToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="relative flex flex-wrap justify-between items-center px-4 md:px-12 global-navbar__container bg-brand brand-divider-bottom shadow-md">
      <div className="flex">
        <Link to="/">
          <img src={logo} alt="site logo" className="site-logo__img" />
        </Link>
      </div>
      <ul className="list-none hidden md:flex">
        <NavbarItems isAuthenticated={isAuthenticated} />
      </ul>
      <div className="flex items-center gap-2">
        <button
          onClick={() => changeLanguage('en')}
          className={`px-2 py-1 text-sm rounded ${language === 'en' ? 'bg-white text-brand' : 'text-white opacity-70'}`}
        >
          EN
        </button>
        <button
          onClick={() => changeLanguage('ru')}
          className={`px-2 py-1 text-sm rounded ${language === 'ru' ? 'bg-white text-brand' : 'text-white opacity-70'}`}
        >
          RU
        </button>
        <button
          onClick={() => changeLanguage('kg')}
          className={`px-2 py-1 text-sm rounded ${language === 'kg' ? 'bg-white text-brand' : 'text-white opacity-70'}`}
        >
          KG
        </button>
      </div>
      <FontAwesomeIcon
        data-testid="menu-toggle__button"
        icon={faBars}
        size="2x"
        color="#fff"
        className="block md:hidden"
        onClick={onHamburgerMenuToggle}
      />
      <HamburgerMenu
        isVisible={isVisible}
        onHamburgerMenuToggle={onHamburgerMenuToggle}
        isAuthenticated={isAuthenticated}
      />
    </div>
  );
};

export default GlobalNavbar;
