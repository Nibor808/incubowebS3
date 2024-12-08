import React, {useEffect, useLayoutEffect, useMemo, useState} from 'react';
import logo from '../styles/images/incubo_logo.png';
import logoSm from '../styles/images/incubo_logo_sm.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';
import {HeaderLayout} from './HeaderLayout';

export interface HeaderProps {
    toPortfolio: (ev: React.MouseEvent<HTMLButtonElement>) => void;
    toContact: (ev: React.MouseEvent<HTMLButtonElement>) => void;
    toTop: (ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export const Header: React.FC<HeaderProps> = ({toPortfolio, toContact, toTop}) => {
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const [modeIcon, setModeIcon] = useState<React.ReactElement>(<FontAwesomeIcon icon={faSun} />);
    const [width, setWidth] = React.useState<number>(window.innerWidth);

    useLayoutEffect(() => {
        const resizeHandler = () => setWidth(window.innerWidth);

        window.addEventListener('resize', resizeHandler);

        return () => window.removeEventListener('resize', resizeHandler);
    }, []);

    const logoImg = useMemo(() => (width < 768 ? logoSm : logo), [width]);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
            setModeIcon(<FontAwesomeIcon icon={faSun} />);
        } else {
            document.body.classList.remove('dark-mode');
            setModeIcon(<FontAwesomeIcon icon={faMoon} />);
        }
    }, [darkMode]);

    return (
        <HeaderLayout
            logoImg={logoImg}
            toTop={toTop}
            toPortfolio={toPortfolio}
            toContact={toContact}
            setDarkMode={setDarkMode}
            darkMode={darkMode}
            modeIcon={modeIcon}
        />
    );
};
